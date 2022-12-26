/* Opening Overlay nav */

function openNav()
{
    let body = document.querySelector('body');
    let overlay = document.querySelector('#overlay');

    overlay.style.display = 'block';
    body.style.backgroundColor = 'hsl(0, 0%, 70%)';
}

/* Closing Overlay nav */

function closeNav()
{
    let overlay = document.querySelector('#overlay');
    let body = document.querySelector('body');
    
    overlay.style.display = 'none';
    body.style.backgroundColor = 'hsl(0, 0%, 100%)';

}

let images =  ['/images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];

/* Courasel */
let img =document.querySelector('#courasel-img');

img.src = images[0];
let change = 0;
function courasel(value){
    change = change + value;

    if (change < 0){
        change = images.length-1;
        img.src = images[change];
        return;
    }

    if (change > (images.length-1))
    {
        change = 0;
        img.src = images[change];
        return;
    }
    img.src = images[change];  
}

/** Closing cart */

function closeCart(){
    let cart = document.querySelector('div.cart');
   

    cart.style.display = 'none';
    
}

function openCart(){
    let cart = document.querySelector('div.cart');
    let body = document.querySelector('body');

    cart.style.display = "block";
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';
}

/* Count */
let num = 0
let number = document.querySelector('#number');
number.value = num;
function count(value){
    num = parseInt(number.value);
    num += value;

    if (num < 0)
    {
        num = 0;
    }
    
    number.value = num;
}

/* Popup */

let pos;

function popUpImg(value){
    pos = value;
    let popup = document.querySelector('div.popup');
    let body = document.querySelector('body');
    let popup_img = document.querySelector('#popup-img');

    popup_img.src = images[value];
    body.style.backgroundColor = 'rgba(0,0,0,0.7)';
    popup.style.display = 'flex';
}

function closePopup(){
    let popup = document.querySelector('div.popup');
    let body = document.querySelector('body');

    body.style.backgroundColor = 'white';    
    popup.style.display = 'none';

}

function changecourasel(value){
    
    let img = document.querySelector('#popup-img');
    let change;    
}





