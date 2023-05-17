import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  // Tus datos aquí. Para este ejemplo, simplemente utilizaremos un objeto con un precio para cada artículo.
  data = [
    { name: 'shoes', price: 100 },
    { name: 'shirt', price: 150 },
    { name: 'tshirt', price: 80 },
    { name: 'hoodies', price: 200 },
    { name: 'jean', price: 120 }
  ];

  // Calcula el precio más alto para determinar la longitud de las barras
  highestPrice = Math.max(...this.data.map(item => item.price));

  ngOnInit() {
    // Ordena los datos por precio descendente
    this.data.sort((a, b) => b.price - a.price);
  }
}
