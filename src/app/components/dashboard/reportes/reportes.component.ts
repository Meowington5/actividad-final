import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router:Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      usuario: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  ingresar(){
    const email = this.form.value.email;
    const usuario = this.form.value.usuario;
    if(email == null && usuario == null){
      this.form.reset();
    } else {
      this.fakeLoading();
    }
  }
  fakeLoading(){
    this._snackBar.open("Mensaje enviado", "Cerrar",{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }

}
