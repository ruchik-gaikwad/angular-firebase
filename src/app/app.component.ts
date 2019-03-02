import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private db:AngularFireDatabase ) {
      db.list('/').valueChanges().subscribe(data => {
        console.log(data)
      })
      db.list('/').push({
        'name': "Ruchik", 
        "Session": "Afternoon"
      })
  }
  title = 'firebase-angular';
}
