import '../styles/main.scss'
import halfPriceIcon from '../public/svg/icon_half_price.svg'
import buttonIcon from '../public/svg/icon_button_download.svg'

document.addEventListener('DOMContentLoaded', function () {
  const itemsContainer = document.querySelector('.product-section__items')
  console.log(itemsContainer)
  const downloadArrow = document.querySelector('.download-arrow')
  console.log(halfPriceIcon)

  // Fetch JSON data using AJAX
  fetch('https://veryfast.io/t/front_test_api.php')
    .then((response) => response.json())
    .then((data) => data.result.elements)
    .then((data) => {
      data.forEach((item) => {
        const itemElement = document.createElement('article')
        itemElement.className = 'product-card'
        itemElement.innerHTML = `
              <div class="product-card__price">
                ${
                  item.is_best
                    ? `<div class="product-card__price-badge">Best value</div>`
                    : ''
                }
                ${
                  item.price_key === '50%'
                    ? `<div class="product-card__price-half">
                        <img src='${halfPriceIcon}' alt='Half price icon' />          
                      </div>`
                    : ''
                }
                <span class="product-card__price-text">$${item.amount}</span>
                <span class="product-card__price-period">${
                  item.price_key === '50%' ? '/mo' : '/per year'
                }</span>
              </div>
              <div class="product-card__description">
                <span class="product-card__description-title"
                  >${item.name_display}</span
                >
                <span class="product-card__description-text"
                  >${item.license_name}</span
                >
              </div>
              <button data-link='${
                item.link
              }' class="button download-button product-card__download-button">
                <span class="button__text">Download</span>
                <img src='${buttonIcon}' alt='Button download icon' />
              </button>
                `
        itemsContainer.appendChild(itemElement)
      })

      // Add click event listener to download buttons
      const downloadButtons = document.querySelectorAll('.download-button')
      downloadButtons.forEach((button) => {
        button.addEventListener('click', function () {
          const link = this.getAttribute('data-link')
          downloadFile(link)
        })
      })
    })
    .catch((error) => console.error('Error fetching data:', error))

  function downloadFile(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.substring(url.lastIndexOf('/') + 1)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => {
      Arrow.show(5000)
    }, 1500)
  }
})
