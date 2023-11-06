import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 23;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():string{
    return this.name = 'Spiderman'
  }
  changeAge():number{
    return this.age = 26
  }

  reset(){
    this.name = 'ironman'
    this.age = 23
  }



}
