import { Injectable } from '@angular/core';

@Injectable()

export class MailService {

  //message = `you've got mail`;

  messages=[
    `you're now friends with me`,
    `i like you`,
    `here's what i said`
  ];
  constructor() { }

}
