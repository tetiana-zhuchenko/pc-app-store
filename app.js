import createProductCard from './js/createProductCard.js'
import createErrorMessage from './js/createErrorMessage.js'

document.addEventListener('DOMContentLoaded', () => {
  const PRODUCTS_API = 'https://veryfast.io/t/front_test_api.php'
  const productCardsContainer = document.querySelector('[data-product-cards]')

  fetch(PRODUCTS_API)
    .then((response) => response.json())
    .then((data) => {
      data.result.elements.forEach((product) => {
        const productCard = createProductCard(product)
        productCardsContainer.appendChild(productCard)
      })
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
      const errorMessage = createErrorMessage()
      productCardsContainer.appendChild(errorMessage)
    })
})
