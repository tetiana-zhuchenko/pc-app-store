import checkBrowser from './checkBrowser.js'

const showArrow = (element) => (element.style.display = 'block')

const hideArrow = (element) => (element.style.display = 'none')

const handleDownload = (link) => {
  const a = document.createElement('a')
  a.href = link
  a.download = link.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  const userBrowser = checkBrowser()

  const isFirefox = userBrowser.firefoxAgent

  const arrowContainer = isFirefox
    ? document.querySelector('[data-appearing-arrow-top]')
    : document.querySelector('[data-appearing-arrow-bottom]')

  setTimeout(() => showArrow(arrowContainer), 1500)
  setTimeout(() => hideArrow(arrowContainer), 20000)
}

export default handleDownload
