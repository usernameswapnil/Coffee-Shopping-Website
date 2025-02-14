let search=document.querySelector('.search-box');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick=()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');

}


let header = document.querySelector('header');

window.addEventListener('scroll' , ()=>{
    header.classList.toggle('shadow',window.scrollY>0);

});
// Array to hold cart items
let cart = [];

// Function to search items
function searchItems() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to add items to the cart
function addToCart(itemName) {
    cart.push(itemName);
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Function to view cart (you can expand this for actual cart page)
function viewCart() {
    alert('Cart contains: ' + cart.join(', '));
}