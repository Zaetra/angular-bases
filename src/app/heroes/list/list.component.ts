import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
 public heroNames: string[] = ['Spiderman','Hulk','She Hulk','IronMan','Thor'];
 public deletedHero?:string = '';

 removeLastHero() {
  this.deletedHero = this.heroNames.pop();
 }

}
