import { Component, OnInit } from '@angular/core';
import { Item, ItemServiceService } from '../item-service.service';
import axios from 'axios';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item= {
    itemName: '',
    itemDescription: '',
    price: 0,
    category: '',
    manufacturer: '',
  };
  constructor(private itemService: ItemServiceService) {}
  categories: any[] = [];

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories() {
    axios
      .get('http://localhost:8080/categories/names')
      .then((response) => {
        console.log('Response:', response);
        this.categories = response.data; // Populate the categories array
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }
  addItem() {
    this.itemService.addItem(this.item).subscribe(
      (response) => {
        console.log('item added successfully:', response);
        // Reset the form or perform any other necessary actions
        this.item = {
          itemName: '',
          itemDescription: '',
          price: 0,
          category: '',
          manufacturer: '',
        };
      },
      (error) => {
        console.error('Error adding items:', error);
      }
    );
  }
  selectedCategory: string = '';

  onCategorySelected(category: string) {
    this.selectedCategory = category;
  }
}


  