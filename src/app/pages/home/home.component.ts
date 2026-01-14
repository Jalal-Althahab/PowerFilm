import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService, Movie } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // To fix the ion-icon error
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email = '';
  newReleases: Movie[] = [];
  topMovies: Movie[] = [];
  tvShows: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.newReleases = this.movieService.getNewReleases();
    this.topMovies = this.movieService.getTopMovies();
    this.tvShows = this.movieService.getTvShows();
  }

  onFilterClick(filter: string) {
    console.log('Filter clicked:', filter);
  }

  onSubmit() {
    if (this.email) {
      console.log('Form submitted with email:', this.email);
      this.email = '';
    }
  }
}