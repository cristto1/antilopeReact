const products = [
    {
        id: '1',
        name: 'Collar elefante',
        price: 40000,
        category: 'Collares',
        img: 'https://cristto1.github.io/antilope/assets/image/collar-elefante.jpg',
        stock: 8,
        description: 'Collar dorado con dige de elefante'
    },
    { 
        id: '2', 
        name: 'Pulsera mano de Dios', 
        price: 30000, 
        category: 'Pulseras', 
        img: 'https://cristto1.github.io/antilope/assets/image/pulsera-2.jpg',
        stock: 10, 
        description: 'Pulsera dorada con dige de mano de Dios'
    },
    { 
        id: '3', 
        name: 'Ear cuff corona', 
        price: 30000, 
        category: 'Ear Cuff', 
        img: 'https://cristto1.github.io/antilope/assets/image/earcuff-2.jpg',
        stock: 5, 
        description: 'Ear cuff dorado corona'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category=== categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

