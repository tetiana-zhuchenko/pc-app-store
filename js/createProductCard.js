import handleDownload from './handleDownload.js'

const createProductCard = (product) => {
  const fiftyPercentOof =
    product.price_key === '50%'
      ? `<img src="./img/50off.png" alt="discount image" class="card__price-discount-img"> <p class="card__price-discount-amount">$9.99</p>`
      : ''
  const bestValue = product.is_best
    ? `<p class="card__price-discount">Best Value</p>`
    : ''

  const pricePerTime = product.name_display.toLowerCase().includes('monthly')
    ? '/MO'
    : '/PER YEAR'

  const cardWrapper = document.createElement('div')
  cardWrapper.className = 'card-wrapper'

  cardWrapper.innerHTML = `
    <div class="card-bg"></div>
    <div class="card">
        <div class="card__price">
            ${fiftyPercentOof}
            ${bestValue}
            <p>${product.amount}<span class="card__term">${pricePerTime}</span></p>
        </div>
        <p class="card__description">${product.name_prod} <br /><span class="card__description-device">${product.license_name}</span></p>
        <button type="button" class="card__button" data-card-btn>
            DOWNLOAD
            <svg width="30" height="30" viewBox="0 0 30 30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0C6.72517 0 0 6.71012 0 15C0 23.2899 6.71013 30 15 30C23.2899 30 30 23.2899 30 15C30 6.71012 23.2748 0 15 0ZM12.2768 14.6239H13.2547C13.4654 14.6239 13.6459 14.4584 13.6459 14.2327V8.33501C13.6459 8.12438 13.8114 7.94382 14.0371 7.94382H15.9629C16.1735 7.94382 16.3541 8.10933 16.3541 8.33501V14.2327C16.3541 14.4433 16.5195 14.6239 16.7452 14.6239H17.7231C18.0391 14.6239 18.2196 15 18.0241 15.2558L15.3009 18.671C15.1505 18.8666 14.8495 18.8666 14.6991 18.671L11.991 15.2558C11.7803 15 11.9609 14.6239 12.2768 14.6239ZM23.5155 20.2507V21.65C23.5155 21.8606 23.3501 22.0411 23.1244 22.0411H8.39516H6.86056C6.64993 22.0411 6.46941 21.8756 6.46941 21.65V20.2507V16.4443C6.46941 16.2337 6.63489 16.0532 6.86056 16.0532H8.00401C8.21464 16.0532 8.39516 16.2186 8.39516 16.4443V19.8596C8.39516 19.8596 12.214 19.8596 23.1244 19.8596V16.4443C23.1244 16.2337 23.3501 16.0532 23.5155 16.0532H24.66C24.8706 16.0532 25.0511 16.2186 25.0511 16.4443V20.2507C25.0511 20.4664 24.8856 20.6418 24.66 20.6418H23.5155C23.5155 20.2507 23.5155 20.2507 23.5155 20.2507Z" fill="#ffffff"/>
            </svg>
        </button>
        </div>
    `

  const downloadButton = cardWrapper.querySelector('[data-card-btn]')

  downloadButton.addEventListener('click', () => handleDownload(product.link))

  return cardWrapper
}

export default createProductCard
