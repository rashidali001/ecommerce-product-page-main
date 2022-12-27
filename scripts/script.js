/* cart */ 
let cart_items = 0;
let total_count = 0;

if (cart_items == 0)
{
    let cart_information = document.querySelector('div.cart-information');
    let empty = document.createElement('div');
    let empty_text = document.createTextNode('Your cart is empty!');
    empty.appendChild(empty_text);
    empty.classList.add('empty');
    cart_information.appendChild(empty);
}



/* Add to cart script */
function addChartItems(){

    
    let cart_number = document.querySelector('#number');
    if ( cart_number.value == 0){
        alert("Nothing added to the cart");
        return;
    }

    cart_items++;


    if(cart_items == 1)
    {
        let empty = document.querySelector('div.empty');
        empty.remove();

        /* Adding checkout */

        let cart_information = document.querySelector('div.cart-information');
        let checkout = document.createElement('div');
        let checkout_text = document.createTextNode('Checkout');
        checkout.classList.add('checkout');
        checkout.appendChild(checkout_text);
        cart_information.appendChild(checkout);

    }

    let item_count = parseInt(cart_number.value);
    let item_price = parseInt(document.querySelector('span.price-tag').innerText);
    let item_total = item_count * item_price;
    total_count += item_count;
    let item_heading = document.querySelector('h2.sneaker_title').innerText;

     

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
    let cart_heading_text = document.createTextNode(item_heading);
    cart_heading.appendChild(cart_heading_text);
    cart_total.appendChild(cart_heading);

    let cart_pricing = document.createElement('p');
    cart_pricing.classList.add('cart-pricing');
    cart_total.appendChild(cart_pricing);

        let cart_price = document.createElement('span');
        cart_price.classList.add('cart-price');
        let cart_price_text = document.createTextNode('Kshs'+item_price+'x');
        cart_price.appendChild(cart_price_text);
        cart_pricing.appendChild(cart_price);

        let cart_count = document.createElement('span');
        cart_count.classList.add('cart-count');
        let cart_count_text = document.createTextNode(item_count);
        cart_count.appendChild(cart_count_text);
        cart_pricing.appendChild(cart_count);

        let cart_total_price = document.createElement('span');
        cart_total_price.classList.add('cart-total-price');
        let cart_total_price_text = document.createTextNode(' Kshs' + item_total);
        cart_total_price.appendChild(cart_total_price_text);
        cart_pricing.appendChild(cart_total_price);

    /* creating the third child */

    let cart_delete = document.createElement('div');
    cart_delete.classList.add('cart-delete');
    cart_list.appendChild(cart_delete);
    let img_delete = document.createElement('img');
    img_delete.src = './images/icon-delete.svg';
    img_delete.onclick = removeElement;
    cart_delete.appendChild(img_delete);

    /* return cart value to o */
    cart_number.value = 0;
    notification();
}


function removeElement(){
    let parent = this.parentElement.parentElement;
    parent.remove();
    let previous = this.parentElement.previousSibling;
    let x = previous.childNodes[1]; // <span class="cart-total">
    let y = x.childNodes[1]; // <span class="cart-count">

    total_count -= y.innerHTML; // reducing the count on the notification
    console.log(total_count);
    notification(1);    
    
    cart_items--;
    if (cart_items == 0)
    {
        let cart_information = document.querySelector('div.cart-information');
        let empty = document.createElement('div');
        let empty_text = document.createTextNode('Your cart is empty!');
        empty.appendChild(empty_text);
        empty.classList.add('empty');
        cart_information.appendChild(empty);

        /* remove checkout */
        let checkout = document.querySelector('div.checkout');
        checkout.remove();
    }
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

function notification( value = 0){
    
    if (value == 0){
        let title = document.querySelector('#title-cart');
        let notification_display = document.createElement('span');
        notification_display.classList.add('cart-counts');
        let notification_display_text = document.createTextNode(total_count);
        notification_display.appendChild(notification_display_text);
        title.appendChild(notification_display);
    }
    else{
        let cart_count_delete = document.querySelector('span.cart-counts');
        if (total_count == 0)
        {            
            console.log("entered here");
        }
        else
        {
            cart_count_delete.remove();
            let title = document.querySelector('#title-cart');
            let notification_display = document.createElement('span');
            notification_display.classList.add('cart-counts');
            let notification_display_text = document.createTextNode(total_count);
            notification_display.appendChild(notification_display_text);
            title.appendChild(notification_display);
        }
        
    }
}




