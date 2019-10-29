import { Component, OnInit } from '@angular/core';
import { Mierda } from '../mierda';

@Component({
  selector: 'app-mierda',
  templateUrl: './mierda.component.html',
  styleUrls: ['./mierda.component.css']
})
export class MierdaComponent implements OnInit {

  mierda: Mierda = {
    pene: 7,
    name: 'Semen'
  };

  constructor() { }

  ngOnInit() {
  }

}
