import { Component } from "@angular/core";
import { Dog } from "./dog";
import { DogsService } from "./dogs.service";
import { Favorites } from "./favorites";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "The Bulldog Shop";
  public dogs: Dog[];
  public favorites: Dog[] = [];

  constructor(private dogService: DogsService) {}
  ngOnInit() {
    this.dogService.getAllDogs().subscribe((dogData) => (this.dogs = dogData));
  }

  updateFavs(favDog: Dog) {
    this.dogService.updateFavs(this.favorites, favDog);
  }
}
