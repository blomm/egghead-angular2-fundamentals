import { Component, Inject } from '@angular/core';
//import { MailService } from './mail.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <app-simple-form></app-simple-form>
  //     {{mail.message}}
  //   </div>
  //   `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'app2 works!';

  constructor(
    @Inject('mail') private mail, 
    @Inject('api') private api
    ){

  }
}
