import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  //template: ``,
  templateUrl:'./simple-form.component.html',
  styles: []
})

export class SimpleFormComponent implements OnInit {

  onClick(event, value){
    console.log(event);
    console.log(value);
  }
  constructor() { }

  ngOnInit() {

  }

}
