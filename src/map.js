export function initIslandMap() {
  const pins = document.querySelectorAll('[data-island-map] [data-target]')
  pins.forEach((pin) => {
    pin.addEventListener('click', () => {
      const id = pin.getAttribute('data-target')
      const target = document.getElementById(id)
      if (!target) return
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      target.classList.add('zone--pulse')
      window.setTimeout(() => target.classList.remove('zone--pulse'), 1200)
    })
  })
}
