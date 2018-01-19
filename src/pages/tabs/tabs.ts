import { Component } from '@angular/core';
import {ShoppingListPage} from "../shopping-list/shopping-list";
import {RecipiesPage} from "../recipies/recipies";


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  slPage = ShoppingListPage;
  recipesPage = RecipiesPage;


}
