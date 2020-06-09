import { AddfriendComponent } from './../addfriend/addfriend.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  formulario = false;

  friend = {
    idPersona: '',
    NombreCompleto: '',
    telefono: '',
    email: '',
    fechaNacimiento: ''
  };

  personas: any[] = [];

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { 
    if (localStorage.getItem('agenda')) {
      this.personas = JSON.parse(localStorage.getItem('agenda'));
    }
  }

  ngOnInit() {
  }

  update(persona: any) {
    const dialogRef = this.dialog.open(AddfriendComponent, {
      width: '800px',
      data: {
              idPersona: persona.idPersona,
              NombreCompleto: persona.NombreCompleto,
              telefono: persona.telefono,
              email: persona.email,
              fechaNacimiento: persona.fechaNacimiento
            }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'cerro');
      if (!result) {
        return;
      }
      persona.idPersona = result.idPersona;
      persona.NombreCompleto = result.NombreCompleto;
      persona.telefono = result.telefono;
      persona.email = result.email;
      persona.fechaNacimiento = result.fechaNacimiento;
      this.saveLocalStorage();
      this.snackBar.open('Contacto Actualizado', 'Cerrar', { duration: 3000 });
    })
  }

  creatFriend(form: NgForm) {
    console.log(form);
    this.personas.push(this.friend);
    console.log(this.personas);
    this.saveLocalStorage();
    this.snackBar.open(`Contacto Agregado ${this.friend.NombreCompleto}`, 'Cerrar', { duration: 3000 });
    this.formulario = false;
  }

  saveLocalStorage() {
    localStorage.setItem('agenda', JSON.stringify(this.personas));
  }

  deletePerson(posicion: number) {
    this.personas.splice(posicion, 1);
    this.saveLocalStorage();
    this.snackBar.open('Contacto eliminada', 'Cerrar', { duration: 3000 });
  }

}
