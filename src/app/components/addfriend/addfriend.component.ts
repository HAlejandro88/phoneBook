import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfriend',
  templateUrl: './addfriend.component.html',
  styleUrls: ['./addfriend.component.css']
})
export class AddfriendComponent implements OnInit {

  forma: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddfriendComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder) {
    console.log(data);
    this.forma = fb.group({
      'NombreCompleto': data.NombreCompleto,
      'telefono': data.telefono,
      'email': data.email,
      'fechaNacimiento': data.fechaNacimiento
    })
  }

  ngOnInit() {
  }

  saveChanges() {
    this.dialogRef.close(this.forma.value);
  }

  cancelar() {
    this.dialogRef.close();
  }

}
