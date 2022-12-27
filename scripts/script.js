/* cart 
let cart_items = 0;
let cart_empty = document.querySelector('#empty');
let cart_information = document.querySelector('div.cart-information');
let cart_number = document.querySelector('#number');

if (cart_items == 0)
{
    cart_empty.style.display = 'block';
    cart_information.style.alignItems = 'center';
}

function addChartItems(){
    if (cart_number.innerText == 0){
        alert("Nothing added to the cart");
        return;
    }

}
*/

/* Add to cart script */
function addChartItems(){

    let cart_information = document.querySelector('div.cart-information');
    let cart_list = document.createElement('div');
    cart_list.classList.add('cart-list');
    let checkout =document.querySelector('div.checkout');
    cart_information.insertBefore(cart_list, checkout);

    /* creating the direct children first */

    let cart_img = document.createElement('div');
    cart_img.classList.add('cart-img');
    cart_list.appendChild(cart_img);
    let img = document.createElement('img');
    img.src = './images/image-product-1-thumbnail.jpg';
    cart_img.appendChild(img);

    /* creating second child element */

    let cart_total = document.createElement('div');
    cart_total.classList.add('cart-total');
    cart_list.appendChild(cart_total);
        /* crreating sub childs of the second child */
    
    let cart_heading = document.createElement('p');
    cart_heading.classList.add('cart-heading');
    let cart_heading_text = document.createTextNode('Fall Limited Edition Sneakers');
    cart_heading.appendChild(cart_heading_text);
    cart_total.appendChild(cart_heading);

    let cart_pricing = document.createElement('p');
    cart_pricing.classList.add('cart-pricing');
    cart_total.appendChild(cart_pricing);

        let cart_price = document.createElement('span');
        cart_price.classList.add('cart-price');
        let cart_price_text = document.createTextNode('Kshs125.00x');
        cart_price.appendChild(cart_price_text);
        cart_pricing.appendChild(cart_price);

        let cart_count = document.createElement('span');
        cart_count.classList.add('cart-count');
        let cart_count_text = document.createTextNode('3');
        cart_count.appendChild(cart_count_text);
        cart_pricing.appendChild(cart_count);

        let cart_total_price = document.createElement('span');
        cart_total_price.classList.add('cart-total-price');
        let cart_total_price_text = document.createTextNode(' Kshs375.00');
        cart_total_price.appendChild(cart_total_price_text);
        cart_pricing.appendChild(cart_total_price);
    
    let cart_delete = document.createElement('div');
    cart_delete.classList.add('cart-delete');
    cart_list.appendChild(cart_delete);
    let img_delete = document.createElement('img');
    img_delete.src = './images/icon-delete.svg';
    cart_delete.appendChild(img_delete);
}







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





