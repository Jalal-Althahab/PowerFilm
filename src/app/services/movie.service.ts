import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  year: string;
  quality: string;
  duration: string;
  rating: string;
  image: string;
  description?: string;
  genres?: string[];
  ageRating?: string;
  trailerId?: string; // YouTube video ID
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { 
      id: 1, 
      title: 'The Northman', 
      year: '2022', 
      quality: 'HD', 
      duration: '137 min', 
      rating: '8.5', 
      image: 'upcoming-1.png',
      description: 'A young Viking prince is on a quest to avenge his father\'s murder.',
      genres: ['Action', 'Adventure', 'Drama'],
      ageRating: 'PG 18',
      trailerId: 'oMSdFM12hOw' // Working
    },
    { 
      id: 2, 
      title: 'Doctor Strange in the Multiverse of Madness', 
      year: '2022', 
      quality: '4K', 
      duration: '126 min', 
      rating: 'NR', 
      image: 'upcoming-2.png',
      description: 'Doctor Strange teams up with a mysterious teenage girl to fight against a powerful new threat.',
      genres: ['Action', 'Adventure', 'Fantasy'],
      ageRating: 'PG 13',
      trailerId: 'aWzlQ2N6qqg' // Working
    },
    { 
      id: 3, 
      title: 'Memory', 
      year: '2022', 
      quality: '2K', 
      duration: 'N/A', 
      rating: 'NR', 
      image: 'upcoming-3.png',
      description: 'An assassin-for-hire finds that he\'s become a target after he refuses to complete a job for a dangerous criminal organization.',
      genres: ['Action', 'Thriller'],
      ageRating: 'R',
      trailerId: 'yGw8yw6Mso8' // Memory Trailer #1 (2022) | Movieclips Trailers
    },
    { 
      id: 4, 
      title: 'The Unbearable Weight of Massive Talent', 
      year: '2022', 
      quality: 'HD', 
      duration: '107 min', 
      rating: 'NR', 
      image: 'upcoming-4.png',
      description: 'Nicolas Cage plays a fictionalized version of himself in this action-comedy.',
      genres: ['Action', 'Comedy', 'Crime'],
      ageRating: 'R',
      trailerId: 'CKTRbKch2K4' // The Unbearable Weight of Massive Talent (2022 Movie) Official Trailer – Nicolas Cage
    },
{ 
  id: 5, 
  title: 'The Dark Knight', 
  year: '2008', 
  quality: '4K', 
  duration: '152 min', 
  rating: '9.0', 
  image: 'movie-1.png',
  description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  genres: ['Action', 'Crime', 'Drama'],
  ageRating: 'PG 13',
  trailerId: 'EXeTwQWrcwY'
},
    { 
      id: 6, 
      title: 'Morbius', 
      year: '2022', 
      quality: 'HD', 
      duration: '104 min', 
      rating: '5.9', 
      image: 'movie-2.png',
      description: 'A biochemist with a rare blood disease attempts to cure himself, but he inadvertently infects himself with a form of vampirism.',
      genres: ['Action', 'Adventure', 'Horror'],
      ageRating: 'PG 13',
      trailerId: 'oZ6iiRrz1SY' // MORBIUS - Official Trailer (HD)
    },
    { 
      id: 7, 
      title: 'The Adam Project', 
      year: '2022', 
      quality: '4K', 
      duration: '106 min', 
      rating: '7.0', 
      image: 'movie-3.png',
      description: 'A time-traveling pilot teams up with his younger self and his late father to come to terms with his past while saving the future.',
      genres: ['Action', 'Adventure', 'Comedy'],
      ageRating: 'PG 13',
      trailerId: 'IE8HIsIrq4o' // Working
    },
    { 
      id: 8, 
      title: 'Free Guy', 
      year: '2021', 
      quality: '4K', 
      duration: '115 min', 
      rating: '7.7', 
      image: 'movie-4.png',
      description: 'A bank teller named Guy discovers he\'s actually a background character inside an expansive open world video game called Free City.',
      genres: ['Action', 'Adventure', 'Comedy', 'Science Fiction'],
      ageRating: 'PG 13',
      trailerId: 'X2m-08cOAbc' // Working
    },
    { 
      id: 9, 
      title: 'The Batman', 
      year: '2022', 
      quality: '4K', 
      duration: '176 min', 
      rating: '7.9', 
      image: 'movie-5.png',
      description: 'Batman ventures into Gotham City\'s underworld when a sadistic killer leaves behind a trail of cryptic clues.',
      genres: ['Action', 'Crime', 'Drama'],
      ageRating: 'PG 13',
      trailerId: 'mqqft2x_Aa4' // Working
    },
    { 
      id: 10, 
      title: 'Uncharted', 
      year: '2022', 
      quality: 'HD', 
      duration: '116 min', 
      rating: '7.0', 
      image: 'movie-6.png',
      description: 'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan.',
      genres: ['Action', 'Adventure'],
      ageRating: 'PG 13',
      trailerId: 'eHp3MbsCbMg' // Working
    },
    { 
      id: 11, 
      title: 'Death on the Nile', 
      year: '2022', 
      quality: '2K', 
      duration: '127 min', 
      rating: '6.5', 
      image: 'movie-7.png',
      description: 'While on vacation on the Nile, Hercule Poirot must investigate the murder of a young heiress.',
      genres: ['Crime', 'Drama', 'Mystery'],
      ageRating: 'PG 13',
      trailerId: 'dZRqB0JLizw' // Official Trailer | Death on the Nile | 20th Century Studios
    },
    { 
      id: 12, 
      title: 'The King\'s Man', 
      year: '2021', 
      quality: 'HD', 
      duration: '131 min', 
      rating: '7.0', 
      image: 'movie-8.png',
      description: 'In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.',
      genres: ['Action', 'Adventure', 'Thriller'],
      ageRating: 'R',
      trailerId: '5zdBG-iGfes' // Working
    },
    { 
      id: 13, 
      title: 'Moon Knight', 
      year: '2022', 
      quality: '2K', 
      duration: '47 min', 
      rating: '8.6', 
      image: 'series-1.png',
      description: 'Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector.',
      genres: ['Action', 'Adventure', 'Fantasy'],
      ageRating: 'TV 14',
      trailerId: 'x7Krla_UxRg' // Working
    },
    { 
      id: 14, 
      title: 'Halo', 
      year: '2022', 
      quality: '2K', 
      duration: '59 min', 
      rating: '8.8', 
      image: 'series-2.png',
      description: 'An epic 26th-century conflict between humanity and an alien threat known as the Covenant.',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      ageRating: 'TV MA',
      trailerId: '5KZ3MKraNKY' // Halo The Series (2022) | Official Trailer | Paramount
    },
    { 
      id: 15, 
      title: 'Vikings: Valhalla', 
      year: '2022', 
      quality: '2K', 
      duration: '51 min', 
      rating: '8.3', 
      image: 'series-3.png',
      description: 'A sequel series to Vikings, set 100 years later and following the adventures of Leif Erikson, Freydis, Harald Hardrada, and the Norman King William the Conqueror.',
      genres: ['Action', 'Adventure', 'Drama'],
      ageRating: 'TV MA',
      trailerId: '9GgxinPwAGc' // Vikings: Valhalla main trailer
    },
    { 
      id: 16, 
      title: 'Money Heist', 
      year: '2017', 
      quality: '4K', 
      duration: '70 min', 
      rating: '8.3', 
      image: 'series-4.png',
      description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history.',
      genres: ['Action', 'Crime', 'Mystery'],
      ageRating: 'TV MA',
      trailerId: '_InqQJRqGW4' // Working
    }
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  getNewReleases(): Movie[] {
    return this.movies.filter(movie => movie.id >= 1 && movie.id <= 4);
  }

  getTopMovies(): Movie[] {
    return this.movies.filter(movie => movie.id >= 5 && movie.id <= 12);
  }

  getTvShows(): Movie[] {
    return this.movies.filter(movie => movie.id >= 13 && movie.id <= 16);
  }

  getSimilarContent(currentMovieId: number): Movie[] {
    const currentMovie = this.getMovieById(currentMovieId);
    if (!currentMovie) return this.getTvShows();
    
    if (currentMovie.id >= 13 && currentMovie.id <= 16) {
      return this.getTvShows().filter(movie => movie.id !== currentMovieId);
    }
    
    return this.getTopMovies().filter(movie => movie.id !== currentMovieId).slice(0, 4);
  }
}