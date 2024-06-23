export default function checkBrowser() {
  let userAgentString = navigator.userAgent
  let chromeAgent = userAgentString.indexOf('Chrome') > -1
  let IExplorerAgent =
    userAgentString.indexOf('MSIE') > -1 || userAgentString.indexOf('rv:') > -1
  let firefoxAgent = userAgentString.indexOf('Firefox') > -1
  let safariAgent = userAgentString.indexOf('Safari') > -1
  if (chromeAgent && safariAgent) safariAgent = false
  let operaAgent = userAgentString.indexOf('OP') > -1
  if (chromeAgent && operaAgent) chromeAgent = false

  return {
    safariAgent,
    chromeAgent,
    IExplorerAgent,
    operaAgent,
    firefoxAgent,
  }
}
