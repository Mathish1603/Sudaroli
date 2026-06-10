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
          description: 'Traditional South Indian layered parotta, soft, flaky, and freshly cooked on the tawa.',
          price: 'Rs. 10',
          image: 'assets/foods/parotta.png'
        },
        {
          name: 'Wheat Parotta',
          description: 'Healthy whole-wheat parotta with soft layers and a rich homemade flavor.',
          price: 'Rs. 25',
          image: 'assets/foods/wheatparotta.png'
        },
        {
          name: 'Bun Parotta',
          description: 'Thick, fluffy, and buttery parotta with a soft texture, perfect with salna and gravies.',
          price: 'Rs. 25',
          image: 'assets/foods/bunparotta.png'
        },
        {
          name: 'Nool Parotta',
          description: 'Delicate shredded parotta made with fine layers, soft and light with every bite.',
          price: 'Rs. 30',
          image: 'assets/foods/noolparotta.png'
        },
        {
          name: 'Kizhi Parotta',
          description: 'Parotta wrapped in banana leaf with flavorful gravy and spices for an authentic taste.',
          price: 'Rs. 120',
          image: 'assets/foods/kizhiparotta.png'
        },
        {
          name: 'Chapathi',
          description: 'Soft whole-wheat flatbread served fresh and ideal with gravies and side dishes.',
          price: 'Rs. 20',
          image: 'assets/foods/chapathi.png'
        }
      ]
    },
    {
      title: 'Side Dishes',
      items: [
        {
          name: 'Mutton Chukka',
          description: 'Tender mutton slow-cooked with aromatic spices and roasted to perfection.',
          price: 'Rs. 150',
          image: 'assets/foods/muttonchukka.png'
        },
        {
          name: 'Chicken Chukka',
          description: 'Juicy chicken stir-fried with traditional spices, onions, and curry leaves.',
          price: 'Rs. 80',
          image: 'assets/foods/chickenchukka.png'
        },
        {
          name: 'Liver Chukka',
          description: 'Fresh liver sautéed with onions, pepper, and authentic South Indian spices.',
          price: 'Rs. 120',
          image: 'assets/foods/liverchukka.png'
        }
      ]
    },
    {
      title: 'Gravy',
      items: [
        {
          name: 'Chicken Gravy',
          description: 'Rich and flavorful chicken curry prepared with traditional spices and herbs.',
          price: 'Rs. 80',
          image: 'assets/foods/chickengravy.png'
        },
        {
          name: 'Mutton Gravy',
          description: 'Tender mutton cooked in a thick aromatic gravy bursting with authentic flavors.',
          price: 'Rs. 120',
          image: 'assets/foods/muttongravy.png'
        },
        {
          name: 'Egg Gravy',
          description: 'Boiled eggs simmered in a mildly spiced onion and tomato-based gravy.',
          price: 'Rs. 60',
          image: 'assets/foods/egggravy.png'
        }
      ]
    },
    {
      title: 'Lunch Specials',
      items: [
        {
          name: 'Chicken Biryani',
          description: 'Aromatic basmati rice cooked with tender chicken and traditional biryani spices.',
          price: 'Rs. 120',
          image: 'assets/foods/chickenbiriyani.png'
        },
        {
          name: 'Mutton Biryani',
          description: 'Flavorful basmati rice layered with succulent mutton and slow-cooked to perfection.',
          price: 'Rs. 180',
          image: 'assets/foods/muttonbiriyani.png'
        },
        {
          name: 'Egg Biryani',
          description: 'Fragrant biryani rice prepared with boiled eggs, herbs, and aromatic spices.',
          price: 'Rs. 90',
          image: 'assets/foods/eggbiriyani.png'
        }
      ]
    },
    {
      title: 'Evening Specials',
      items: [
        {
          name: 'Omelette',
          description: 'Fresh egg omelette prepared with onions, green chillies, pepper, and coriander.',
          price: 'Rs. 20',
          image: 'assets/foods/omlate.png'
        },
        {
          name: 'Kalaki',
          description: 'Soft, creamy, and slightly runny egg dish seasoned with pepper and spices.',
          price: 'Rs. 20',
          image: 'assets/foods/kalaki.png'
        },
        {
          name: 'Halfboil',
          description: 'Perfectly half-cooked egg with a soft yolk, lightly seasoned with pepper.',
          price: 'Rs. 120',
          image: 'assets/foods/halfboil.png'
        },
        {
          name: 'Kada 65',
          description: 'Crispy quail 65 marinated in traditional spices and fried until golden brown.',
          price: 'Rs. 100',
          image: 'assets/foods/kada65.png'
        },
        {
          name: 'Liver 65',
          description: 'Spicy liver fry coated with flavorful masala and tossed with curry leaves.',
          price: 'Rs. 60',
          image: 'assets/foods/liver65.png'
        },
        {
          name: 'Chicken 65',
          description: 'Crispy boneless chicken marinated in signature spices and deep-fried to perfection.',
          price: 'Rs. 80',
          image: 'assets/foods/chicken65.png'
        }
      ]
    }
  ];
}
