// plugins/smooth-scroll.client.ts
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      // Smooth scroll function
      const smoothScroll = (target: string | HTMLElement, options: ScrollIntoViewOptions = {}) => {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        
        if (!element) {
          console.warn(`Smooth scroll target not found: ${target}`);
          return;
        }
  
        const defaultOptions: ScrollIntoViewOptions = {
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        };
  
        element.scrollIntoView({ ...defaultOptions, ...options });
      };
  
      // Handle anchor links with smooth scroll
      const handleAnchorLinks = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
            const href = this.getAttribute('href');
            
            // Skip if it's an empty hash or same page anchor
            if (!href || href === '#' || href === '#!') return;
            
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Smooth scroll to target
            smoothScroll(href);
          });
        });
      };
  
      // Add smooth scroll method to global context
      nuxtApp.provide('smoothScroll', smoothScroll);
  
      // Initialize on page load
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleAnchorLinks);
      } else {
        handleAnchorLinks();
      }
  
      // Also handle navigation changes in Nuxt
      nuxtApp.hook('page:finish', () => {
        setTimeout(handleAnchorLinks, 100); // Small delay to ensure DOM is updated
      });
    }
  });