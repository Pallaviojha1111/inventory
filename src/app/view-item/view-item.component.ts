import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  items: any[] = []; // Initialize items as an empty array
constructor(){}
  ngOnInit(): void {
    axios
      .get('http://localhost:8080/items')
      .then((response) => {
        console.log('Response:', response);
        this.items = response.data; // Populate the items array
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }
  editItem(item: any) {
  }
  
  deleteItem(item: any) {
    // Implement the logic for deleting the item
  }
  @Input() selectedCategory: string = '';
  }


