import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  reasons = [
    { icon: 'fa-fire-burner', title: 'Served Hot', text: 'Parottas are prepared fresh in small batches through the evening.' },
    { icon: 'fa-bowl-food', title: 'Rich Sides', text: 'Pair every bite with aromatic salna, gravies, and egg curry.' },
    { icon: 'fa-hand-sparkles', title: 'Clean Kitchen', text: 'We follow careful preparation and serving practices every day.' }
  ];

  popularDishes = [
    {
      name: 'Kada 65',
      image: 'assets/foods/kada65.png',
      text: 'Chopped parotta tossed on the hot tawa with spices, onion, and egg.'
    },
    {
      name: 'Chicken 65',
      image: 'assets/foods/chicken65.png',
      text: 'Crispy spicy chicken bites finished with garlic, chilli, and curry leaves.'
    },
    {
      name: 'Omelette',
      image: 'assets/foods/omlate.png',
      text: 'Fresh egg omelette with onion, chilli, pepper, and coriander.'
    }
  ];

  reviews = [
    { name: 'Arun K.', text: 'The parottas are always hot and soft. Their salna has that perfect evening-stall taste.' },
    { name: 'Meena R.', text: 'Clean place, quick service, and the kothu parotta is my family favorite.' },
    { name: 'Vignesh S.', text: 'Affordable, filling, and consistently delicious. Best stop after work.' }
  ];
}
