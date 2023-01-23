import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  userName:any;
  password :any;
  habilitado:any;
  constructor(private autenticacion: AutenticacionService, private router: Router){}

  urlRedireccion ="";
  login(){
    if(this.userName=="AD"&& this.password=="123456"){
      this.autenticacion.login();
      this.urlRedireccion = this.autenticacion.urlUsuarioIntentaAcceder;
      this.autenticacion.urlUsuarioIntentaAcceder = '';
      this.router.navigate([this.urlRedireccion]);
    }else{
      alert("usuario o contraseña es incorrecto");
    }

  }
  habilitar(){
    if(this.userName==''||this.password==''){
        this.habilitado=true;
    }else{
        this.habilitado = false;
    }
  }
}
