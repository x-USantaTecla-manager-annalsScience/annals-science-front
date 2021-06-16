import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ModalLoginRegisterComponent } from 'src/app/components/modals/modal-login-register/modal-login-register.component';
import { LOGIN_FORM, REGISTER_FORM } from 'src/app/models/forms.constant';
import { User, UserInput } from 'src/app/models/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DATA_ENTITY, HEADER_LOGIN, HEADER_REGISTER } from './models/home-data-view';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeViewComponent implements OnInit {

  _dataEntity = DATA_ENTITY;
  inputUser: UserInput = {
    name: '',
    surname:'',
    email:'',
    password:''
  };

  constructor(private modal: MatDialog, private _authService : AuthService) { }

  ngOnInit(): void {
  }

  manageButtonsHeader(text: string){
    if(text === 'login'){
      this.openModal(LOGIN_FORM.CONF, 'Inicio de Sesión', HEADER_LOGIN);
    }else{
      this.openModal(REGISTER_FORM.CONF, 'Registro', HEADER_REGISTER);
    }
  }

  openModal(formConf: any, title: string, header: any[]){


    const dialogRef = this.modal.open(ModalLoginRegisterComponent, {
      width: '300px',
      data: { 
        modalFormConf: formConf,
        header: header,
        title: title
      }
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      this.inputUser = {
        name: res.value.name,
        surname: res.value.surname,
        email: res.value.email,
        password: res.value.password
      };

      this._authService.register(this.inputUser).subscribe(res => {
        console.log(res);
      })
    });
  }


}
