const productsOlElement = document.getElementById('productsOlElement')
const productNameInput = document.getElementById('productNameInput')
const addProductBtn = document.getElementById('addProductBtn')

let products = []
fetchProductsFromApi()
// addProductBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     productsOlElement.insertAdjacentHTML('afterbegin', `<li>${productNameInput.value}</li>`) //insertAdjacentHTML(string, string)
// })

addProductBtn.addEventListener('click', (event) => {
    event.preventDefault()
    products.push(productNameInput.value)
    console.log(products);

    renderProducts()
})

function renderProducts() {
    productsOlElement.innerHTML = '' // очистка списка

    const productLiElements = products.map(product => {
        const newProductLi = document.createElement('li')
        newProductLi.innerText = product
        newProductLi.className = "list-group-item list-group-item-info"

        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'
        removeBtn.className = "btn btn-danger"
        removeBtn.type = "button"
        removeBtn.style.marginLeft = "10px"
        removeBtn.addEventListener('click', () => {
            products = products.filter(p => p !== product)
            renderProducts()
            //product = 'Milk' -> удаляемый продукт
            //['Milk', 'Banana', 'Bread']
        })

        newProductLi.appendChild(removeBtn)
        return newProductLi
    })
   
    productsOlElement.append(...productLiElements)
}

async function fetchProductsFromApi() {
    try {
        const response = await fetch('https://fakestoreapi.com/products') // undefined -> {response} 
        const data = await response.json() // const data = undefined
        products = data.map(product => product.title)
        renderProducts()
    }
    catch(err) {
        productsOlElement.innerHTML = '<li class="list-group-item list-group-item-danger">Ошибка при получении продуктов</li>'
    }
}