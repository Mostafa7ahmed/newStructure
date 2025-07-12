import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taxi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taxi.component.html',
  styleUrl: './taxi.component.scss'
})
export class TaxiComponent {
vehicles = [
  {
    name: 'Similar Sedan',
    price: 15,
    passengers: '1-3',
    bags: 3,
    image: 'images/transfer-sharm-el-shejh-egipet-1-370x234.jpg.jpeg',
  },
  {
    name: 'Similar SUV',
    price: 20,
    passengers: '1-4',
    bags: 4,
    image: 'images/transfer-sharm-el-shejh-3-370x234.jpg.jpeg',
  },
  {
    name: 'Toyota Hiace Minibus',
    price: 25,
    passengers: '1-9',
    bags: 9,
    image: 'images/transfer-sharm-el-shejh-2-370x234.jpg.jpeg',
  },
    {
    name: 'Similar Sedan',
    price: 15,
    passengers: '1-3',
    bags: 3,
    image: 'images/transfer-sharm-el-shejh-egipet-1-370x234.jpg.jpeg',
  },
  {
    name: 'Similar Sedan',
    price: 15,
    passengers: '1-3',
    bags: 3,
    image: 'images/transfer-sharm-el-shejh-egipet-1-370x234.jpg.jpeg',
  },
  {
    name: 'Similar SUV',
    price: 20,
    passengers: '1-4',
    bags: 4,
    image: 'images/transfer-sharm-el-shejh-3-370x234.jpg.jpeg',
  },
  {
    name: 'Toyota Hiace Minibus',
    price: 25,
    passengers: '1-9',
    bags: 9,
    image: 'images/transfer-sharm-el-shejh-2-370x234.jpg.jpeg',
  },
    {
    name: 'Similar Sedan',
    price: 15,
    passengers: '1-3',
    bags: 3,
    image: 'images/transfer-sharm-el-shejh-egipet-1-370x234.jpg.jpeg',
  },
];
  selectedVehicle: any = null;

  viewDetails(vehicle: any) {
    this.selectedVehicle = vehicle;
  }

  closeModal() {
    this.selectedVehicle = null;
  }
}
