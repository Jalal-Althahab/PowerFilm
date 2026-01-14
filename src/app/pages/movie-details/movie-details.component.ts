import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { MovieService, Movie } from '../../services/movie.service';
import { ScrollService } from '../../services/scroll.service';
import { VideoPlayerComponent } from '../../video-player/video-player.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterLink, VideoPlayerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  similarContent: Movie[] = [];
  showVideoPlayer: boolean = false;
  private routeSub: Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    this.scrollService.scrollToTop('auto');
    
    this.routeSub = this.route.params.subscribe(params => {
      const movieId = +params['id'];
      this.loadMovieDetails(movieId);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  loadMovieDetails(movieId: number) {
    this.movie = this.movieService.getMovieById(movieId) ?? null;
    if (this.movie) {
      this.similarContent = this.movieService.getSimilarContent(movieId);
    }
  }

  getFirstWord(title: string): string {
    const words = title.split(' ');
    return words.length > 1 ? words[0] : title;
  }

  getRestOfTitle(title: string): string {
    const words = title.split(' ');
    return words.length > 1 ? words.slice(1).join(' ') : '';
  }

  onMovieClick(movieId: number) {
    this.scrollService.scrollToTop('auto');
    
    setTimeout(() => {
      this.router.navigate(['/movie-details', movieId]);
    }, 100);
  }

  playMovie() {
    if (this.movie) {
      console.log('Playing trailer for:', this.movie.title);
      this.showVideoPlayer = true;
      // Disable body scroll when video player is open
      document.body.style.overflow = 'hidden';
    }
  }

  closeVideoPlayer() {
    this.showVideoPlayer = false;
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
  }

  watchFullMovie() {
    if (this.movie) {
      console.log('Watching full movie:', this.movie.title);
      alert(`Starting full movie: ${this.movie.title}\n\nThis would redirect to the movie streaming page in a real application.`);
      this.closeVideoPlayer();
    }
  }

  shareTrailer() {
    if (this.movie) {
      console.log('Sharing trailer:', this.movie.title);
      const shareUrl = `https://www.youtube.com/watch?v=${this.movie.trailerId}`;
      const shareText = `Watch "${this.movie.title}" trailer on YouTube`;
      
      if (navigator.share) {
        navigator.share({
          title: `${this.movie.title} - Trailer`,
          text: shareText,
          url: shareUrl,
        })
        .then(() => console.log('Trailer shared successfully'))
        .catch((error) => console.log('Error sharing trailer:', error));
      } else {
        navigator.clipboard.writeText(`${shareText}: ${shareUrl}`)
          .then(() => alert('Trailer link copied to clipboard!'))
          .catch(err => console.error('Failed to copy:', err));
      }
    }
  }

  watchNow() {
    if (this.movie) {
      console.log('Watch now clicked for:', this.movie.title);
      alert(`Starting "${this.movie.title}" on PowerFilm...\n\nIn a real application, this would begin streaming the movie.`);
    }
  }

  shareMovie() {
    if (this.movie) {
      console.log('Sharing movie:', this.movie.title);
      const shareUrl = window.location.href;
      
      if (navigator.share) {
        navigator.share({
          title: this.movie.title,
          text: `Check out "${this.movie.title}" on PowerFilm!`,
          url: shareUrl,
        })
        .then(() => console.log('Movie shared successfully'))
        .catch((error) => console.log('Error sharing movie:', error));
      } else {
        navigator.clipboard.writeText(`${this.movie.title} - ${shareUrl}`)
          .then(() => alert('Movie link copied to clipboard!'))
          .catch(err => console.error('Failed to copy:', err));
      }
    }
  }
}