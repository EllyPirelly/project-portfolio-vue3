// dark-light mode
export const colorScheme = (function () {
  // check if prefers-color-scheme is available
  if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported')
  }

  const darkModeClass = 'dark-theme'
  const localStorageColorScheme = 'hasColorSchemeDark'

  const getColorScheme = () => {
    return (
      localStorage.getItem(localStorageColorScheme) ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }

  const removeColorScheme = () => {
    document.body.classList.remove(darkModeClass)
    localStorage.removeItem(localStorageColorScheme)
  }

  const setColorScheme = () => {
    document.body.classList.add(darkModeClass)
    localStorage.setItem(localStorageColorScheme, 'true')
  }

  const toggleColorScheme = () => {
    const colorToggleBox = document.querySelector(
      '[data-element="icon-mode-switch"]'
    )

    colorToggleBox.checked = getColorScheme()

    colorToggleBox.addEventListener('change', function () {
      if (this.checked) {
        setColorScheme()
      } else {
        removeColorScheme()
      }
    })
  }

  const init = () => {
    if (getColorScheme()) {
      setColorScheme()
    }

    toggleColorScheme()
  }

  return {
    init,
  }
})()
