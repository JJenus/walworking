// Modern animation system using GSAP and Intersection Observer
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Initialize animations when DOM is ready
    const initializeAnimations = () => {
      // Fade in animations
      gsap.utils.toArray('[data-animate="fade-in"]').forEach((element: any) => {
        gsap.fromTo(element, 
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Slide up animations
      gsap.utils.toArray('[data-animate="slide-up"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Slide in from left
      gsap.utils.toArray('[data-animate="slide-left"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Slide in from right
      gsap.utils.toArray('[data-animate="slide-right"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Scale animations
      gsap.utils.toArray('[data-animate="scale"]').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Stagger animations for lists
      gsap.utils.toArray('[data-animate="stagger"]').forEach((container: any) => {
        const children = container.children
        gsap.fromTo(children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Parallax effects
      gsap.utils.toArray('[data-parallax]').forEach((element: any) => {
        const speed = element.dataset.parallax || 0.5
        gsap.to(element, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        })
      })

      // Counter animations
      gsap.utils.toArray('[data-counter]').forEach((element: any) => {
        const target = parseInt(element.dataset.counter)
        const duration = parseFloat(element.dataset.duration) || 2
        
        ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => {
            gsap.to(element, {
              innerHTML: target,
              duration: duration,
              ease: "power2.out",
              snap: { innerHTML: 1 },
              onUpdate: function() {
                element.innerHTML = Math.ceil(element.innerHTML)
              }
            })
          }
        })
      })

      // Hover animations for cards
      gsap.utils.toArray('.card-hover').forEach((card: any) => {
        const tl = gsap.timeline({ paused: true })
        tl.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" })
        
        card.addEventListener('mouseenter', () => tl.play())
        card.addEventListener('mouseleave', () => tl.reverse())
      })

      // Button hover effects
      gsap.utils.toArray('.btn-animate').forEach((btn: any) => {
        const tl = gsap.timeline({ paused: true })
        tl.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" })
        
        btn.addEventListener('mouseenter', () => tl.play())
        btn.addEventListener('mouseleave', () => tl.reverse())
      })

      // Text reveal animations
      gsap.utils.toArray('[data-animate="text-reveal"]').forEach((element: any) => {
        const text = element.textContent
        element.innerHTML = text.split('').map((char: string) => 
          char === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0; transform: translateY(20px);">${char}</span>`
        ).join('')
        
        const chars = element.querySelectorAll('span')
        gsap.to(chars, {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.02,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      })

      // Loading animations
      const showLoadingAnimation = (element: HTMLElement) => {
        const overlay = document.createElement('div')
        overlay.className = 'loading-overlay'
        overlay.innerHTML = `
          <div class="loading-spinner">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `
        element.style.position = 'relative'
        element.appendChild(overlay)
        
        gsap.fromTo(overlay, 
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        )
      }

      const hideLoadingAnimation = (element: HTMLElement) => {
        const overlay = element.querySelector('.loading-overlay')
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => overlay.remove()
          })
        }
      }

      // Expose loading functions globally
      window.showLoading = showLoadingAnimation
      window.hideLoading = hideLoadingAnimation
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAnimations)
    } else {
      initializeAnimations()
    }

    // Refresh ScrollTrigger on route changes
    const router = useRouter()
    router.afterEach(() => {
      nextTick(() => {
        ScrollTrigger.refresh()
      })
    })
  }
})

// Type declarations for global functions
declare global {
  interface Window {
    showLoading: (element: HTMLElement) => void
    hideLoading: (element: HTMLElement) => void
  }
}