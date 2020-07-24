import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  idAdmin : any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id-admin');
    
    this.idAdmin = id;

    console.log(this.idAdmin)

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }
  }

}
