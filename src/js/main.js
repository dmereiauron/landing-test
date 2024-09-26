import '../styles/main.scss'

// document.addEventListener('DOMContentLoaded', function () {
//   const itemsContainer = document.querySelector('.product-section__items')
//   console.log(itemsContainer)
//   const downloadArrow = document.querySelector('.download-arrow')

//   // Fetch JSON data using AJAX
//   fetch('https://veryfast.io/t/front_test_api.php')
//     .then((response) => response.json())
//     .then((data) => data.result.elements)
//     .then((data) => {
//       data.forEach((item) => {
//         const itemElement = document.createElement('div')
//         itemElement.className = 'product-card'
//         itemElement.innerHTML = `
//                     <h2>${item.name_display}</h2>
//                     <p>License: ${item.license_name}</p>
//                     <p>Price: ${item.price_key}</p>
//                     <p>Best Seller: ${item.is_best ? 'Yes' : 'No'}</p>
//                     <button class="download-btn" data-link="${
//                       item.link
//                     }">Download</button>
//                 `
//         itemsContainer.appendChild(itemElement)
//       })

//       // Add click event listener to download buttons
//       const downloadButtons = document.querySelectorAll('.download-btn')
//       downloadButtons.forEach((button) => {
//         button.addEventListener('click', function () {
//           const link = this.getAttribute('data-link')
//           downloadFile(link)
//         })
//       })
//     })
//     .catch((error) => console.error('Error fetching data:', error))

//   function downloadFile(url) {
//     const a = document.createElement('a')
//     a.href = url
//     a.download = url.substring(url.lastIndexOf('/') + 1)
//     document.body.appendChild(a)
//     a.click()
//     document.body.removeChild(a)

//     showDownloadArrow()
//   }

//   function showDownloadArrow() {
//     if (downloadArrow.classList.contains('hidden')) {
//       downloadArrow.classList.remove('hidden')
//     }

//     // Adjust arrow position based on browser
//     if (navigator.userAgent.indexOf('Chrome') !== -1) {
//       downloadArrow.className = 'arrow down'
//       downloadArrow.style.left = '50%'
//       downloadArrow.style.transform = 'translateX(-50%)'
//     } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
//       downloadArrow.className = 'arrow right'
//       downloadArrow.style.top = '50%'
//       downloadArrow.style.transform = 'translateY(-50%)'
//     }
//   }
// })
