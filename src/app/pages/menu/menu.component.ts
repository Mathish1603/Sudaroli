import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categories: MenuCategory[] = [
    {
      title: 'Parotta',
      items: [
        {
          name: 'Plain Parotta',
          description: 'Classic layered parotta, soft inside and crisp outside.',
          price: 'Rs. 20',
          image: 'assets/foods/kada65.png'
        },
        {
          name: 'Egg Parotta',
          description: 'Flaky parotta finished with egg and mild spices.',
          price: 'Rs. 45',
          image: 'assets/foods/kada65.png'
        },
        {
          name: 'Kothu Parotta',
          description: 'Chopped parotta tossed with egg, onion, herbs, and masala.',
          price: 'Rs. 80',
          image: 'assets/foods/kada65.png'
        },
        {
          name: 'Chilli Parotta',
          description: 'Crisp parotta pieces tossed in a spicy chilli sauce.',
          price: 'Rs. 90',
          image: 'assets/foods/kada65.png'
        },
        {
          name: 'Veg Kothu Parotta',
          description: 'Vegetable kothu with cabbage, carrot, onion, and house masala.',
          price: 'Rs. 70',
          image: 'assets/foods/kada65.png'
        },
        {
          name: 'Veg Kothu Parotta',
          description: 'Vegetable kothu with cabbage, carrot, onion, and house masala.',
          price: 'Rs. 70',
          image: 'assets/foods/kada65.png'
        }
      ]
    },
    {
      title: 'Side Dishes',
      items: [
        {
          name: 'Chicken Salna',
          description: 'Aromatic chicken salna with warm spices and rich gravy.',
          price: 'Rs. 60',
          image: 'assets/foods/muttonchukka.png'

        },
        {
          name: 'Mutton Salna',
          description: 'Deep, peppery mutton salna for a hearty parotta plate.',
          price: 'Rs. 90',
          image: 'assets/foods/muttonchukka.png'

        },
        {
          name: 'Chicken Gravy',
          description: 'Thick chicken gravy cooked with onion, tomato, and masala.',
          price: 'Rs. 100',
          image: 'assets/foods/muttonchukka.png'

        },
        {
          name: 'Egg Curry',
          description: 'Boiled egg simmered in a comforting South Indian curry.',
          price: 'Rs. 50',
          image: 'assets/foods/muttonchukka.png'
        }
        ,
        {
          name: 'Egg Curry',
          description: 'Boiled egg simmered in a comforting South Indian curry.',
          price: 'Rs. 50',
          image: 'assets/foods/muttonchukka.png'
        }
        ,
        {
          name: 'Egg Curry',
          description: 'Boiled egg simmered in a comforting South Indian curry.',
          price: 'Rs. 50',
          image: 'assets/foods/muttonchukka.png'
        }
      ]
    },
    {
      title: 'Evening Specials',
      items: [
        {
          name: 'Omelette',
          description: 'Fresh egg omelette with onion, chilli, pepper, and coriander.',
          price: 'Rs. 35',
          image: 'assets/foods/muttonchukka.png'
        },
        {
          name: 'Kada Fry',
          description: 'Spicy quail fry roasted with masala, curry leaves, and pepper.',
          price: 'Rs. 130',
          image: 'assets/foods/muttonchukka.png'

        },
        {
          name: 'Liver Fry',
          description: 'Tender liver pieces cooked dry with pepper, onion, and house spices.',
          price: 'Rs. 90',
          image: 'assets/foods/muttonchukka.png'

        },
        {
          name: 'Chicken 65',
          description: 'Crispy, spicy chicken bites tossed with chilli, garlic, and curry leaves.',
          price: 'Rs. 120',
          image: 'assets/foods/muttonchukka.png'

        }
        ,
        {
          name: 'Chicken 65',
          description: 'Crispy, spicy chicken bites tossed with chilli, garlic, and curry leaves.',
          price: 'Rs. 120',
          image: 'assets/foods/muttonchukka.png'

        }
        ,
        {
          name: 'Chicken 65',
          description: 'Crispy, spicy chicken bites tossed with chilli, garlic, and curry leaves.',
          price: 'Rs. 120',
          image: 'assets/foods/muttonchukka.png'

        }
      ]
    }
  ];
}
