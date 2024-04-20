import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userObtenido: User | null = null;
  nombre: string = "";
  apellido: string = "";

  constructor(private userService: UserService) {}

  ngOnInit() {

    
  }
}