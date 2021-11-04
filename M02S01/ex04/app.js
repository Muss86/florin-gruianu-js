class Car {
  areLightsOn = false;
  intervalId = null;

  constructor(
    xPos = 0,
    yPos = 0,
    color = 'black',
    colorWheelTire = 'black',
    colorWheelCap = 'white',
  ) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = color;
    this.colorWheelTire = colorWheelTire;
    this.colorWheelCap = colorWheelCap;
  }

  moveTo(x = 0, y = 0) {
    this.frame.style.left = `${x}px`;
    this.frame.style.top = `${y}px`;
  }

  changeColor(color = 'red') {
    this.carBody.style.backgroundColor = color;
    this.carTop.style.backgroundColor = color;
    this.wheelFront.style.backgroundColor = color;
    this.wheelBack.style.backgroundColor = color;
  }

  paintWheelTire() {
    this.wheelFront.style.backgroundColor = this.colorWheelTire;
    this.wheelBack.style.backgroundColor = this.colorWheelTire;
  }

  paintWheelCap() {
    this.wheelCapFront.style.backgroundColor = this.colorWheelCap;
    this.wheelCapBack.style.backgroundColor = this.colorWheelCap;
  }

  paintWheels() {
    this.paintWheelTire();
    this.paintWheelCap();
  }

  turnLightsOn() {
    this.areLightsOn = true;
    this.lightFront.classList.add('light--on');
    // this.lightBack.classList.add('light--on');
  }

  turnLightsOff() {
    this.areLightsOn = false;
    this.lightFront.classList.remove('light--on');
    // this.lightBack.classList.remove('light--on');
  }

  flashLigths() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  }

  engageBreak() {
    this.lightBack.classList.add('light--on');
  }

  disengageBreak() {
    this.lightBack.classList.remove('light--on');
  }

  toggleHazzards() {
    if (this.intervalId === null) {
      //start interval
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff();
          this.disengageBreak();
        } else {
          this.turnLightsOn();
          this.engageBreak();
        }
      }, 800);
    } else {
      //stop interval
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.turnLightsOff;
    }
  }

  render() {
    // div.frame
    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    // this.frame.style.left = `${this.xPos}px`;
    // this.frame.style.top = `${this.yPos}px`;
    this.moveTo(this.xPos, this.yPos);

    // div.car
    this.car = document.createElement('div');
    this.car.classList.add('car');
    // div.car__top
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // div.car__body
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // div.light.light--back
    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    // div.light.light--front
    this.lightFront = document.createElement('div');
    this.lightFront.classList.add(
      'light',
      'light--front',
      this.areLightsOn === true ? 'light--on' : 'a',
    );
    this.carBody.append(this.lightFront);

    // div.wheel.car__wheel--back
    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelBack.style.backgroundColor = this.color;
    this.carBody.append(this.wheelBack);

    // div.wheel.car__wheel--front
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelFront.style.backgroundColor = this.color;
    this.carBody.append(this.wheelFront);

    // div.wheel__cap
    this.wheelCapBack = document.createElement('div');
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.wheelCapBack);

    // div.wheel__cap
    this.wheelCapFront = document.createElement('div');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.wheelCapFront);

    // append car to frame
    this.frame.append(this.car);

    // real DOM v
    document.body.append(this.frame);
  }
}

const audi = new Car(250, 400, 'black', 'blue', 'red');
audi.render();

// no-op
