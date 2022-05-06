import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testo:string = ""
  gender:string = ""
  prob:number = 0

  constructor(private http:HttpClient){}  //costruttore crea l'oggetto e la salva nella variabile http

  stampa(){
    this.http.get('https://api.genderize.io/?name='+this.testo ).subscribe(
      res=>{
        this.gender = res["gender"]
        this.prob = res["probability"]

      },
      err =>{
        console.log(err)
      }
    )
  }
}
