import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  readonly SERVER_URL_ADMIN = "http://localhost:3000/admin";
  readonly SERVER_URL_BOOK = "http://localhost:3000/booking";

  constructor(
    private http : HttpClient
  ) { }

  loginAdmin(email : any, password :any){
    let httpParams = new HttpParams()
    .append("email", email)
    .append("password", password);

    let options = {
      params : httpParams
    }

    return this.http.get(this.SERVER_URL_ADMIN, options)
  }

  getDoneService(){
    let httpParams = new HttpParams()
    .append("status", "Done")

    let options = {
      params : httpParams
    }

    return this.http.get(this.SERVER_URL_BOOK, options)
  }

  getProgressService(){
    let httpParams = new HttpParams()
    .append("status", "On Progress")

    let options = {
      params : httpParams
    }

    return this.http.get(this.SERVER_URL_BOOK, options)
  }

  getDataBook(id : any){
    let httpParams = new HttpParams()
    .append("id", id)

    let options = {
      params : httpParams
    }

    return this.http.get(this.SERVER_URL_BOOK, options)
  }

  editData(id : any, editData : any){
    return this.http.put(this.SERVER_URL_BOOK+"/"+id, editData)
  }

}
