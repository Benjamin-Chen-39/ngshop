import { TestBed } from "@angular/core/testing";
import { DogsService } from "./dogs.service";
import DOGS from "./dogdata.json";
import { Dog } from "./dog";

describe("DogsService", () => {
  let service: DogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should sucessfully contain a Dog array with data", () => {
    service.getAllDogs().subscribe((data) => {
      expect(data.length).toEqual(100);
    });
  });

  it("should return data by id", () => {
    const dataId = "4ziNJuYbfDius"; // from dogdata.json
    expect(service.getById(dataId)).toEqual((DOGS)[0]);
  });
});
