import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService) { }

 

}
