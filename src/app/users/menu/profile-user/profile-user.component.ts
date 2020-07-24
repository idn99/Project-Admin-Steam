import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/ServiceUser/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  idUser : any;
  dataUser: any;

  constructor(
    private router : Router,
    private service : UserService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.idUser = id;

    if(this.idUser == null){
      this.router.navigate(['login'])
    }

    this.service.getUserFromId(id)
    .subscribe((data => {
      console.log(data);
      this.dataUser = data;
    })
    );
  }

  onEdit(){
    this.router.navigate(['/beranda-user/edit-profile'])
  }

}
