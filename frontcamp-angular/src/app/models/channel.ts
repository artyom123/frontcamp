export class Channel {
  protected hidden: boolean;

  constructor(public value, public title) {}

  public setHidden(): void {
    this.hidden = true;
  }

  public setVisible(): void {
      this.hidden = false;
  }
}
