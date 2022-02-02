import { callAtMidnight, timeJumpDays } from "../utils/utils.js";

export class Clock {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.lable = this.#createLableElement();
  }

  #createLableElement = () => {
    let lable = document.createElement("a");
    lable.innerText = `${timeJumpDays(
      this.start
    ).toDateString()} - ${timeJumpDays(this.end).toDateString()}`;

    callAtMidnight(() => {
      this.start += 1;
      this.end += 1;
      if (this.lable) {
        this.lable.innerText = `${timeJumpDays(
          this.start
        ).toDateString()} - ${timeJumpDays(this.end).toDateString()}`;
      }
    });

    return lable;
  };
}
