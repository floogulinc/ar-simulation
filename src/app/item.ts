export interface DisplayItem {
  name: string;
  imgSrc: string;
  active: boolean;
  x: number;
  y: number;
  scale: number;
  offset: number;
  displayed: boolean;
  displayState: string;
}

export class DisplaySpecies implements DisplayItem {
  name = '';
  imgSrc = '';
  active = true;
  x = 0;
  y = 0;
  scale = 100;
  offset = this.scale / 2;  // Used in CSS positioning
  displayed = true;
  displayState = 'normal';
  screenRatio = 16 / 9;
  initialX = 0;
  initialY = 0;

  constructor(name: string, imgSrc: string, x: number, y: number, scale: number, active: boolean, componentWidth: number) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.x = x * componentWidth;
    this.y = y * componentWidth / this.screenRatio;
    this.active = active;
    this.scale = scale;
    this.offset = scale / 2;
    this.initialX = x;
    this.initialY = y;
  }

  moveTo(x: number, y: number, componentWidth: number) {
    if (this.displayState === 'normal') {
      this.displayState = 'normal_';
    } else {
      this.displayState = 'normal';
    }

    this.initialX = x;
    this.initialY = y;
    this.x = x * componentWidth;
    this.y = y * componentWidth / this.screenRatio;
  }

  resize(scale: number) {
    this.scale = scale;
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  show() {
    this.displayed = true;
  }

  hide() {
    this.displayed = false;
  }

  getX() {
    return this.initialX;
  }

  getY() {
    return this.initialY;
  }
}
