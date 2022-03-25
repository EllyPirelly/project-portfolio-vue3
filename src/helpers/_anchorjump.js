/* anchor jump */
export const AnchorJump = (function () {
  let links

  const setLinks = () => {
    links = Array.from(document.querySelectorAll('[data-link]'))
  }

  const linkAction = function (event) {
    event.preventDefault()

    const href = this.getAttribute('href')
    const target = document.querySelector(href)

    history.pushState(null, null, href)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const setLinkAction = () => {
    links.forEach((link) => link.addEventListener('click', linkAction))
  }

  const init = () => {
    setLinks()
    setLinkAction()
  }

  return {
    init,
  }
})()
