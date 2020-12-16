import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://pbs.twimg.com/media/EpZEZFXXMAUuzmX?format=jpg&name=small';
  image2 = 'https://pbs.twimg.com/media/EpZEZFXXIAMtlBq?format=jpg&name=medium';
  image3 = 'https://pbs.twimg.com/media/EpYuzlZXcAcJqv7?format=jpg&name=small';

  constructor() { }

  ngOnInit() {
  }

}