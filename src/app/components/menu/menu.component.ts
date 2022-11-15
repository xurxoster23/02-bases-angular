import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Array dónde definimos las rutas
  rutas = [
    {
      name:'Home',
      path:'/home'
    },
    {
      name:'About',
      path:'/about'
    },
    {
      name:'Contact',
      path:'/contact'
    },
    {
      name:'Posts',
      path:'/posts'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
