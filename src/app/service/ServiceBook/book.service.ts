import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly SERVER_URL_BOOK = "http://localhost:3000/booking";

  constructor(
    private http : HttpClient
  ) { }

  getData(id : any){
    let httpParams = new HttpParams()
    .append("idUser", id);

    let options = {
      params : httpParams
    }
    
    return this.http.get(this.SERVER_URL_BOOK,options)
  }

  addBoking(dataBook : any){
    return this.http.post(this.SERVER_URL_BOOK, dataBook)
  }
}
