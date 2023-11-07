import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';


export interface Item {
itemName: string;
  itemDescription: string;
  price: number;
  category: string;
  manufacturer: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private baseUrl = 'http://localhost:8080/items'; // Your Spring Boot API endpoint for adding products

  constructor() {}

  addItem(item: Item): Observable<any> {
    return new Observable((observer) => {
      axios
        .post(this.baseUrl, item)
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}

