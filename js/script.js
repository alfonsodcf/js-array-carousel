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

//variabile per raccogliere tutto l'html che va in items-container
let itemTemplate = '';

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = '';



//preparo una variabile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovverro il primo elemento dell'array
let currentIndexActive = 0;


//eseguo il ciclo for sull'array delle immagini (items) e popolo l'html delle due variabili da stampare nei due contenitori (immagini e thombnails)
for(let i = 0; i < items.length; i++){
    let classActive = '';
    
    if(i === currentIndexActive ) {
        classActive = "active";
    }
    itemTemplate += `
        <div class="item ${classActive}">
           <img src="${items[i]}">
            <div class="title">
                <h2>${title[i]}</h2>
                <p>${text[i]}</p>
            </div>
        </div>`;
    
    thumbTemplate += `
        <div class="thumb ${classActive}">
            <img src="${items[i]}" alt="">
        </div>
    `;

//console.log(itemTemplate);
}

//console.log(thumpTemplate);
//console.log(itemTemplate);

//metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");
//console.log(itemContainer);

//stampo l'html corrispondente nei due contenitori
itemContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.quarySelector{".item"}.classList.add("active");


//pulsanti
//.next .fa-circle-chevron-down
//.prev .fa-circle-chevron-up
//metto nelle variabili 'next, prev' i due pulsanti
const next = document.querySelector(' .fa-circle-chevron-down');
const prev = document.querySelector(' .fa-circle-chevron-up');
//console.log(next, prev)
function slideDown(){
    //prendo l'immagine con currentIndexActive e togliere classe active
    
    const imgs = document.getElementsByClassName('item');
    imgs[currentIndexActive].classList.remove('active');
    
    const thumbs = document.getElementsByClassName('thumb'); //
    thumbs[currentIndexActive].classList.remove('active'); //

    if(currentIndexActive === 4){
        currentIndexActive = 0; 
    } else {
        currentIndexActive ++;
    }
    

    imgs[currentIndexActive].classList.add('active');
    thumbs[currentIndexActive].classList.add('active'); //non capisco perche comentando le righe con il comento alla fine funzioa tutto uguale 

    
}

function slideUp(){
    const imgs = document.getElementsByClassName('item');
    imgs[currentIndexActive].classList.remove('active');
    
    const thumbs = document.getElementsByClassName('thumb'); //
    thumbs[currentIndexActive].classList.remove('active'); //

    if(currentIndexActive === 0){
        currentIndexActive = items.length - 1; //4
    } else {
        currentIndexActive --;
    }
    

    imgs[currentIndexActive].classList.add('active');
    thumbs[currentIndexActive].classList.add('active'); //non capisco perche comentando le righe con il comento alla fine funzioa tutto uguale 
}

next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);