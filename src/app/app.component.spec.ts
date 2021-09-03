import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { Dog } from "./dog";
// import { Dog } from "./dogs.service";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Welcome to The Bulldog Shop!"
    );
  });

  it("should display the dogs", () => {
    expect(element.querySelector("#dogsDisplay")).not.toBeNull();
  });

  it("should add favorite to list of favorites", () => {
    let testDog = new Dog();
    component.updateFavs(testDog);
    expect(component.favorites.length).toEqual(1);
  });

});
