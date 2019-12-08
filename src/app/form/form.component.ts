import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private nbIngenieur = 645;
  private model:FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.model = this.formBuilder.group({
      prenom:'',
      age:0,
      poid:0,
      taille:0
    });
    setTimeout(function(){
      this.nbIngenieur--;
    },1000);
  }

  formSubmit()
  {
    let data = {
      prenom: this.model.get('prenom').value,
      age: this.model.get('age').value,
      taille: this.model.get('taille').value,
      poid: this.model.get('poid').value
    }

    // @ts-ignore
    let data_string = JSON.stringify(data);
    // @ts-ignore
    sessionStorage.setItem("data",data_string);
    this.router.navigate(['result']);

  }

}
