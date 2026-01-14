import { Component, OnInit, HostListener, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isHeaderActive = false;

  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderActive = window.scrollY >= 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('active-scroll', this.isMenuOpen);
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('active-scroll');
  }

  onLanguageChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    console.log('Language changed to:', selectElement.value);
  }

  // Navigation methods for smooth scrolling
  navigateToHome() {
    this.router.navigate(['/']);
    this.scrollService.scrollToTop();
    this.closeMenu();
  }

  navigateToMovies() {
    this.scrollService.scrollToSection('top-movies');
    this.closeMenu();
  }

  navigateToTvShows() {
    this.scrollService.scrollToSection('tv-shows');
    this.closeMenu();
  }

  navigateToNewReleases() {
    this.scrollService.scrollToSection('new-releases');
    this.closeMenu();
  }

  navigateToFeatures() {
    this.scrollService.scrollToSection('features-section');
    this.closeMenu();
  }

  navigateToPricing() {
    // For now, just scroll to offer section since we don't have a pricing page
    this.scrollService.scrollToSection('offer-section');
    this.closeMenu();
  }
}