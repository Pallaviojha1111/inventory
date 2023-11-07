import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  registrationData: any = {};

  onSubmit() {
    // Implement registration logic, e.g., send registrationData to a back-end service
    console.log('Registration data:', this.registrationData);
    // You can send the registration data to your server here for registration.
  }
}
