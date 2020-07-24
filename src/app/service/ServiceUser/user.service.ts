import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly SERVER_URL_USERS = "http://localhost:3000/users";

  constructor(
    private http : HttpClient
  ) { }
  
  getUserFromId(id : any){
    let httpParams = new HttpParams()
    .append("id", id);

    let options = {
      params : httpParams
    }

    return this.http.get(this.SERVER_URL_USERS, options)
  }

  getDataFromEmail(email:any, password:any){
    let httpParams = new HttpParams()
    .append("email", email)
    .append("password", password);

    let options = {
      params : httpParams
    }

    return this.http.get(this.SERVER_URL_USERS, options)
  }

  addDataUser(dataUser:any){    
    return this.http.post(this.SERVER_URL_USERS, dataUser)
  }

  editDataUser(id : any, dataUser : any){
    return this.http.put(this.SERVER_URL_USERS+"/"+id, dataUser)
  }
}
