import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(private dataService:DataService) { }


  ngOnInit() {

    // Llamamos al método que se encuentra en el DataService
    // Asignamos el valor retorno del Observable a la propiedad mensajes
    this.mensajes = this.dataService.getData()


      // Como llamamos al Observable, debemos subscribirnos
      // .subscribe((posts:any[]) => {
      //   console.log(posts);
      //   this.mensajes = posts;
      // });
  }
  // Método que recoge el evento que se dispara en el componente Hijo
  escuchaClick( id:number ){
    console.log('Click en : ' + id);
  }

}
