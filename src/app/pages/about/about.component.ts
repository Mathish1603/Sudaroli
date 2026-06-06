import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  values = [
    { icon: 'fa-seedling', title: 'Quality Ingredients', text: 'Fresh flour, eggs, spices, and carefully selected meat-based sides give every dish its dependable taste.' },
    { icon: 'fa-hand-holding-heart', title: 'Hygienic Preparation', text: 'Our cooking area is organized for clean preparation, quick service, and consistent quality.' },
    { icon: 'fa-people-roof', title: 'Family-Friendly Environment', text: 'A welcoming evening stop for students, workers, families, and anyone craving comfort food.' }
  ];
}
