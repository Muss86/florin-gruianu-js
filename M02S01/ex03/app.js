const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 10,
  topReverseSpeed: 10,
  areLightsOn: false,
  displaySpeed: function () {
    console.log(`Viteza curenta este ${this.speed}.`);
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;

    this.displaySpeed();
  },
  flashlights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 260;
audi.topReverseSpeed = -100;

console.log(audi);
