window.addEventListener('DOMContentLoaded', () => {
    let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    openbtn = document.querySelector('.open');



    function createCart(){
        let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        closebtn =document.createElement('button');
        deleteBtn = document.createElement('button')


        cart.classList.add('cart')
        field.classList.add('cart-field')
        closebtn.classList.add('close')
        deleteBtn.classList.add('danger')

        heading.textContent = 'В нашей корзине'
        closebtn.textContent = 'Закрить'
        deleteBtn.textContent= 'Delete'

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closebtn)

    }
    createCart()

    let cart = document.querySelector('.cart')
    closebtn = document.querySelector('.close')
    field = document.querySelector('.cart-field')

    openbtn.addEventListener('click', () => {
        cart.style.display = 'block'
    })
    closebtn.addEventListener('click', () =>{
        cart.style.display = 'none'
    })

    buttons.forEach( (item, i) =>
    {
        item.addEventListener('click', function (){
            let cloneItem = products[i].cloneNode(true),
            btn = cloneItem.querySelector('button');

        btn.remove()
        field.appendChild(cloneItem)
        products[i].remove()    
        })        
    })
})

