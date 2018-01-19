import {Component, OnInit} from '@angular/core';
import {NavParams} from "ionic-angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-edit-recipie',
  templateUrl: 'edit-recipie.html',
})
export class EditRecipiePage implements OnInit{
  mode = 'New';
  selectOptions = ['easy','medium','hard'];
  recipeForm : FormGroup;

  constructor(private navParams: NavParams) {
  }

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }


  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('medium', Validators.required)
    })
  }

  onSubmit(){
    console.log(this.recipeForm)
  }
}
