import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryItems = [
    {
      title: 'Fresh Parottas',
          image: 'assets/foods/parotta.png'

    },
    {
      title: 'Mutton Chukka',
          image: 'assets/foods/muttonchukka.png'

    },
    {
      title: 'Chicken 65',
          image: 'assets/foods/chicken65.png'

    },
    {
      title: 'Omelette',
          image: 'assets/foods/omlate.png'

    },
    {
      title: 'Kada Fry',
          image: 'assets/foods/kada65.png'

    },
    {
      title: 'Liver Fry',
          image: 'assets/foods/liver65.png'

    }
  ];
}
