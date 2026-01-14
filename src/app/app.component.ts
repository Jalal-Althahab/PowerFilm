import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  title = 'powerfilm';
  isTopBtnActive = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen to route changes
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Scroll to top on route change (except when staying on movie-details)
      if (!event.urlAfterRedirects.includes('#')) {
        window.scrollTo(0, 0);
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isTopBtnActive = window.scrollY >= 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}