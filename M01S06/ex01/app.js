const car = {
  make: 'Audi',
  color: 'Black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  popTrunk: function () {
    this.openTrunk();

    setTimeout(() => {
      this.closeTrunk();
    }, 5000);
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (yourSetSpeed) {
    if (yourSetSpeed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }
    if (yourSetSpeed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }
    this.speed = yourSetSpeed;
  },
  autoDecelerate: function () {
    for (i = 5; i > 0; i--) {
      this.speed -= 1;
    }
  },
};

console.warn(
  'Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".',
);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(
  `Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".`,
);
// console.log(`Viteza noua este ${(car.speed -= 5)} km/h.`);
// const autoDecelerate = function () {
//   for (i = 5; i > 0; i--) {
//     car.speed -= 1;
//   }
//   console.log(car.speed);
// };
// console.log(autoDecelerate());
const numberOdd = () => {
  numOdd = [];
  for (i = 50; i <=100, i++) {
    numOdd.append(i);
  }
  console.log(numOdd)
}
