import { Component, Input, OnInit } from "@angular/core";
import { DogsService } from "../dogs.service";

@Component({
  selector: "app-like-counter",
  templateUrl: "./like-counter.component.html",
  styleUrls: ["./like-counter.component.css"],
})
export class LikeCounterComponent implements OnInit {
  value: number = 0;
  @Input() dogId: string;

  likeCounter() {
    this.dogService.updateLikes(this.value, this.dogId);
  }

  constructor(private dogService: DogsService) {}

  ngOnInit(): void {
  }
}
