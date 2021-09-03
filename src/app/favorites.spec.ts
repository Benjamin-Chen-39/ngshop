import { Favorites } from './favorites';
import {Dog} from './dog';

describe('Favorites', () => {
  it('should create an instance', () => {
    expect(new Favorites()).toBeTruthy();
  });

  it('should add to the favorites list', ()=>{
    let myFavs = new Favorites;
    myFavs.add(new Dog);
    expect(myFavs.favoritesList.length).toEqual(1);
  });
});
