import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './users/auth/auth.component';
import { LoginUserComponent } from './users/auth/login-user/login-user.component';
import { RegistUserComponent } from './users/auth/regist-user/regist-user.component';
import { BookingComponent } from './users/booking/booking.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { TambahLayananComponent } from './admin/menu-admin/layanan/tambah-layanan/tambah-layanan.component';
import { MenuComponent } from './users/menu/menu.component';
import { ProfileComponent } from './admin/akun/profile/profile.component';
import { PesananComponent } from './users/menu/pesanan/pesanan.component';
import { ProfileUserComponent } from './users/menu/profile-user/profile-user.component';
import { UbahLayananComponent } from './admin/menu-admin/layanan/ubah-layanan/ubah-layanan.component';
import { ListLayananComponent } from './admin/menu-admin/layanan/list-layanan/list-layanan.component';
import { ListPesananComponent } from './admin/menu-admin/layanan/list-pesanan/list-pesanan.component';
import { EditProfileComponent } from './users/menu/edit-profile/edit-profile.component';
import { PesananDoneComponent } from './admin/menu-admin/layanan/list-pesanan/pesanan-done/pesanan-done.component';
import { PesananOnprogressComponent } from './admin/menu-admin/layanan/list-pesanan/pesanan-onprogress/pesanan-onprogress.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children:[
      {
        path: 'login', component: LoginUserComponent,
        children:[
          
        ],
      },
      {
        path: 'regist', component: RegistUserComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
      }
    ]
  },
  {
    path: 'beranda-user', component: MenuComponent,
    children: [
      {
        path: 'booking', component: BookingComponent
      },
      {
        path: 'profile', component: ProfileUserComponent
      },
      {
        path: 'pesanan', component: PesananComponent
      },
      {
        path: 'edit-profile', component: EditProfileComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pesanan'
      }
    ]
  },
  {
    path: 'admin', component: LoginComponent
  },
  {
    path: 'menu', component: MenuAdminComponent,
    children: [
      {
        path: 'list-pesanan', component: ListPesananComponent,
        children: [
          {
            path: 'selesai', component: PesananDoneComponent
          },
          {
            path: 'onprogress', component: PesananOnprogressComponent
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'selesai'
          }
        ]
      },
      {
        path: 'ubah-layanan', component: UbahLayananComponent
      },
      {
        path: 'tambah-layanan', component: TambahLayananComponent
      },
      {
        path: 'profile-admin', component: ProfileComponent
      },
      {
        path: 'list-layanan', component: ListLayananComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list-pesanan'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
