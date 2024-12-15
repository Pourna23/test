import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  bannerItems = [
    'Welcome to our website!',
    'Enjoy 50% off on selected items!',
    'Free shipping for orders above $50!',
    'New arrivals are here!'
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
