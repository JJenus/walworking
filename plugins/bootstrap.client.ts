// Bootstrap JavaScript initialization
import { Modal, Dropdown, Collapse, Tooltip, Popover, Toast, Offcanvas } from 'bootstrap'

export default defineNuxtPlugin(() => {
  // Initialize Bootstrap components when DOM is ready
  if (process.client) {
    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new Tooltip(tooltipTriggerEl)
    })

    // Initialize popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    popoverTriggerList.forEach(popoverTriggerEl => {
      new Popover(popoverTriggerEl)
    })

    // Initialize toasts
    const toastElList = document.querySelectorAll('.toast')
    toastElList.forEach(toastEl => {
      new Toast(toastEl)
    })

    // Theme toggle functionality
    const initializeThemeToggle = () => {
      const getStoredTheme = (): string | null => localStorage.getItem('theme')
      const setStoredTheme = (theme: string): void => localStorage.setItem('theme', theme)
      
      const getPreferredTheme = (): string => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
          return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }

      const setTheme = (theme: string): void => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
          document.documentElement.setAttribute('data-bs-theme', theme)
        }
      }

      const showActiveTheme = (theme: string, focus = false): void => {
        const themeSwitcher = document.querySelector('#bd-theme')
        if (!themeSwitcher) return

        const themeSwitcherText = document.querySelector('#bd-theme-text')
        const activeThemeIcon = document.querySelector('.theme-icon-active')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
        const svgOfActiveBtn = btnToActive?.querySelector('.theme-icon')

        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
          element.classList.remove('active')
          element.setAttribute('aria-pressed', 'false')
        })

        btnToActive?.classList.add('active')
        btnToActive?.setAttribute('aria-pressed', 'true')
        
        if (activeThemeIcon && svgOfActiveBtn) {
          activeThemeIcon.innerHTML = svgOfActiveBtn.innerHTML
        }

        // FIXED: Added proper type assertion for dataset
        const themeSwitcherLabel = `${themeSwitcherText?.textContent} (${(btnToActive as HTMLElement)?.dataset.bsThemeText})`
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

        if (focus) {
          (themeSwitcher as HTMLElement).focus()
        }
      }

      // Set theme on page load
      setTheme(getPreferredTheme())

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
          setTheme(getPreferredTheme())
        }
      })

      // Initialize theme switcher
      window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            if (theme) {
              setStoredTheme(theme)
              setTheme(theme)
              showActiveTheme(theme, true)
            }
          })
        })
      })
    }

    // Initialize theme toggle
    initializeThemeToggle()

    // Form validation
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', (event) => {
        if (!(form as HTMLFormElement).checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })

    // Smooth scroll for anchor links - FIXED: Added proper 'this' type annotation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href') || '')
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }
})