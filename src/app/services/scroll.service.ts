import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  init() {
    if (isPlatformBrowser(this.platformId)) {
      // Handle route changes
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        // If it's a movie details page, scroll to top
        if (event.url.includes('/movie-details/')) {
          this.scrollToTop();
        }
      });
    }
  }

  scrollToTop(behavior: 'auto' | 'smooth' = 'auto') {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior });
    }
  }

  scrollToElement(elementId: string, offset: number = 0, behavior: 'auto' | 'smooth' = 'smooth') {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior
          });
        }
      }, 100);
    }
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Navigate to home first if not already there
      if (!this.router.url.includes('/')) {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.scrollToElement(sectionId, 100, 'smooth');
          }, 300);
        });
      } else {
        // Already on home page, just scroll
        this.scrollToElement(sectionId, 100, 'smooth');
      }
    }
  }
}