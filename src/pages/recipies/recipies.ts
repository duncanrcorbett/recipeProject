import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {EditRecipiePage} from "../edit-recipie/edit-recipie";


@Component({
  selector: 'page-recipies',
  templateUrl: 'recipies.html',
})
export class RecipiesPage {

  constructor(private navCntrl: NavController){}

  onNewRecipe(){
    this.navCntrl.push(EditRecipiePage, {mode: 'New'});
  }

}
