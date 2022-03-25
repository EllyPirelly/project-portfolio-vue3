// toggle
export const toggleClass = (item, targetItem) => {
  if (item.getAttribute('data-toggle')) {
    targetItem.classList.toggle('toggle')
  } else {
    targetItem.classList.remove('toggle')
  }
}

export const toggleVisibility = () => {
  const toggleItems = Array.from(document.querySelectorAll('[data-toggle]'))

  toggleItems.forEach((toggle) => {
    const targetSelector = toggle.getAttribute('data-target')
    const targetPiece = document.querySelector(targetSelector)

    toggle.addEventListener('click', function () {
      toggleClass(this, targetPiece)
    })
  })
}
