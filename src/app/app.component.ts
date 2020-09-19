import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCyLGtNVvd4W9wIuHdraNu4jnZfMzXTIAU",
    authDomain: "bibliofirebase-7de5c.firebaseapp.com",
    databaseURL: "https://bibliofirebase-7de5c.firebaseio.com",
    projectId: "bibliofirebase-7de5c",
    storageBucket: "bibliofirebase-7de5c.appspot.com",
    messagingSenderId: "663947604926",
    appId: "1:663947604926:web:25943d94a522a4af2c7fef",
    measurementId: "G-H64VHPM0W1"

    };
    firebase.initializeApp(config);
    firebase.analytics();
  }
}
