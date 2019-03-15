import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as uuid from "uuid";
import { map  } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private db:AngularFireDatabase ) {
      // db.list('/').valueChanges().subscribe(data => {
      //   console.log(data)
      // })
      // db.list('/').push({
      //   'name': "Ruchik Gaikwad", 
      //   "Session": "Afternoon",
      //   "id": uuid.v4()
      // })
      console.log(uuid.v4());
      let itemRef = db.list('/');
      let items = itemRef.snapshotChanges().pipe(map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))))

      console.log()
      items.subscribe(data => {
        console.log(data)
      })
      // db.list('/', ref => ref.orderByChild('id').equalTo("d2f7a434-1148-4dd1-9af9-807b644521e3")).valueChanges().subscribe(console.log)
      // db.list('/', ref => ref.orderByChild('id').equalTo("d2f7a434-1148-4dd1-9af9-807b644521e3")).valueChanges().
    
  }
  title = 'firebase-angular';

}
