import { Injectable } from "@angular/core";
import { Dog } from "./dog";
import DOGS from "./dogdata.json";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DogsService {
  private dogData: Dog[] = DOGS;

  constructor() {}

  getAllDogs(): Observable<Dog[]> {
    return of(this.dogData);
  }

  getById(searchId: string): Dog {
    let doggo: Dog = new Dog();
    doggo = this.dogData.filter(function (dog) {
      if (dog.id === searchId) return dog;
    })[0];
    return doggo;
  }

  updateFavs(myFavs: Dog[], newFav: Dog) {
    myFavs.push(newFav);
  }

  updateLikes(value: number, dogId: string) {
    value += 1;
    if (localStorage.dogId) {
      localStorage.dogId = Number(localStorage.dogId) + 1;
    } else {
      localStorage.dogId = 1;
    }
    console.log("total # of likes: ", Number(localStorage.dogId));
  }
}
