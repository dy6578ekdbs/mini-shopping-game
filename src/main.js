function loadItems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json=>json.items);
}

function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');

}

function createHTMLString(item){
    return `
    <li class="item">
    <img src="${item.image}" alt ="${item.tyoe}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

//함수 시간이 걸리니까, 성공적으로 되면, 그때 실행! -> promise
//main함수!
loadItems()
.then(items => {
    displayItems(items); //보여주고
   // setEventListeners(items); //이벤트까지
})
.catch(console.log);