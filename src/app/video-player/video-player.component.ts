import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  template: `
    <div class="video-player-overlay" (click)="close()" *ngIf="isVisible">
      <div class="video-player-container" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="close()">
          <ion-icon name="close-outline"></ion-icon>
        </button>
        
        <div class="video-wrapper">
          <div class="video-title">
            <h3>{{title}}</h3>
            <p>Official Trailer</p>
          </div>
          
          <div class="video-embed" *ngIf="videoUrl">
            <iframe 
              [src]="videoUrl" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              title="YouTube video player">
            </iframe>
          </div>
          
          <div class="video-info">
            <p>Watch the official trailer for {{title}}</p>
            <div class="video-actions">
              <button class="btn watch-btn" (click)="onWatchClick()">
                <ion-icon name="play-circle"></ion-icon>
                <span>Watch Full Movie</span>
              </button>
              <button class="btn share-btn" (click)="onShareClick()">
                <ion-icon name="share-social"></ion-icon>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .video-player-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .video-player-container {
      position: relative;
      width: 90%;
      max-width: 900px;
      background: var(--dark-color-3);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      z-index: 10;
      transition: var(--speed-1);
    }

    .close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: rotate(90deg);
    }

    .video-wrapper {
      padding: 20px;
    }

    .video-title {
      text-align: center;
      margin-bottom: 20px;
      padding: 0 20px;
    }

    .video-title h3 {
      color: var(--white-color);
      font-size: 24px;
      margin-bottom: 5px;
    }

    .video-title p {
      color: var(--accent-color);
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .video-embed {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
      overflow: hidden;
      border-radius: 8px;
      background: #000;
    }

    .video-embed iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }

    .video-info {
      text-align: center;
      padding: 20px;
      color: var(--light-color-2);
    }

    .video-info p {
      margin-bottom: 20px;
      font-size: 16px;
    }

    .video-actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
    }

    .btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      border-radius: 4px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      transition: var(--speed-1);
      text-transform: uppercase;
      font-size: 14px;
    }

    .watch-btn {
      background: var(--accent-color);
      color: var(--dark-color-1);
    }

    .watch-btn:hover {
      background: #ffd700;
      transform: translateY(-2px);
    }

    .share-btn {
      background: var(--metal-color-2);
      color: var(--white-color);
      border: 1px solid var(--accent-color);
    }

    .share-btn:hover {
      background: var(--accent-color);
      color: var(--dark-color-1);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .video-player-container {
        width: 95%;
        margin: 10px;
      }
      
      .video-title h3 {
        font-size: 20px;
      }
      
      .video-actions {
        flex-direction: column;
      }
      
      .btn {
        width: 100%;
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .video-wrapper {
        padding: 15px;
      }
      
      .video-title {
        padding: 0 10px;
      }
      
      .video-title h3 {
        font-size: 18px;
      }
    }
  `]
})
export class VideoPlayerComponent implements OnChanges {
  @Input() videoId: string = '';
  @Input() title: string = '';
  @Input() isVisible: boolean = false;
  @Output() closeVideo = new EventEmitter<void>();
  @Output() watchFullMovie = new EventEmitter<void>();
  @Output() shareTrailer = new EventEmitter<void>();

  videoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoId'] && this.videoId) {
      this.updateVideoUrl();
    }
  }

  updateVideoUrl() {
    const url = `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0&modestbranding=1`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close() {
    this.closeVideo.emit();
  }

  onWatchClick() {
    this.watchFullMovie.emit();
  }

  onShareClick() {
    this.shareTrailer.emit();
  }
}