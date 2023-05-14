/*!
 * Font Awesome Free 5.2.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
const navBar = document.querySelector('.nav')
const navBtn = document.querySelector('.navBtn')
const shopNav = document.querySelector('.cart')
const shopBtn = document.querySelector('.shopBtn')
const closeCart = document.querySelector('.closeBtn-cart')
const closeNav = document.querySelector('.closeBtn')
const images = document.querySelectorAll('.menu-item')
const modal = document.querySelector('.menu-modal');
const modalItem = document.querySelector('.modal-item');
const modalClose = document.querySelector('.modal-close')

//cart

const addCartItem = document.querySelectorAll('.buy-btn')
const itemPriceEl = document.querySelector('.price-item')
const mainContainer = document.querySelector('.cart')
const checkoutBtn = document.querySelector('.checkoutBtn-cart')
let totalEl = document.querySelector('.price-total')
let total = 0

for(let i = 0; i < addCartItem.length; i++){
    addCartItem[i].addEventListener('click', addToCart)
}

function addToCart(event){
    let btnParent = event.target.parentElement
    let itemImg = btnParent.children[1].src
    let itemName = btnParent.children[0].innerText
    let itemPrice = btnParent.children[2].innerText

    let cartItemContainer = document.createElement('div')
    cartItemContainer.innerHTML += ` <div class="items-container">
    <img src="${itemImg}" class="cart-img">
    <ul class="cart-items">
        <li class="single-item">${itemName}</li>
    </ul>
    <p class="price-item">${itemPrice}</p>
    <span class="remove-itemBtn">Remove</span>
</div>`
    mainContainer.insertBefore(cartItemContainer, mainContainer.lastElementChild)

    let itemPriceNum = parseFloat(itemPrice.replace('$', ''))
    total += itemPriceNum
    updateTotal()
}

function updateTotal(){
    totalEl.innerText = 'Total:' + ' ' + '$' + total.toFixed(2);
}

mainContainer.addEventListener('click', function(event) {
    let itemPriceNum = parseFloat(event.target.previousElementSibling.innerText.replace('$', ''))
    if (event.target.classList.contains('remove-itemBtn')) {
        event.target.parentElement.remove()
        total -= itemPriceNum
        updateTotal()
    }
})

checkoutBtn.addEventListener('click', function(){
    if(total > 0){
        alert('Thank you for your purchase!')
    }
    else{
        alert('Please add some items to the cart')
    }
})

shopBtn.addEventListener('click', function(){
    shopNav.classList.add('cart-show')
})

navBtn.addEventListener('click', function(){
    navBar.classList.add('nav-show')
})

closeCart.addEventListener('click', function(){
    shopNav.classList.toggle('cart-show')
})

closeNav.addEventListener('click', function(){
    navBar.classList.toggle('nav-show')
})

images.forEach(function(image){
    image.addEventListener('click', function(event){
        showModal(event)
    })
})

modalClose.addEventListener('click', function(){
    closeModal()
})

function showModal(event){
    event.preventDefault()
    if(event.target.classList.contains('menu-item-img')){
    let id = event.target.dataset.id
    modal.classList.add('menu-modal-show')
    modalItem.style.backgroundImage = `url(img/menu-${id}.jpg)`
      
    }
}

function closeModal(){
    modal.classList.remove('menu-modal-show')
}