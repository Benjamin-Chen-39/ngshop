import { Dog } from "./dog";
export class Favorites {
  public favoritesList: Dog[] = [];

  add(newFav: Dog) {
    this.favoritesList.push(newFav);
  }
}
