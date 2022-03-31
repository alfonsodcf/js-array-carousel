const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let itemTemplate = '';
let thumpTemplate = '';
    
    // <div class="thumb active">
    //     <img src="./img/01.jpg" alt="">
    // </div>

    
    //items-container
    //thumbs-container

    //.next .fa-circle-chevron-down
    //.prev .fa-circle-chevron-up
    //active


for(let i = 0; i < items.length; i++){
    itemTemplate += `
        <div class="item active">
           <img src="${items[i]}">
            <div class="title">
                <h2>${title[i]}</h2>
                <p>${text[i]}</p>
            </div>
        </div>`;
}