class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(speed = 1) {
    this.speed += speed;

    return this;
  }

  decelerate(speed = 1) {
    this.speed -= speed;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;

    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

// audi.accelerate().accelerate().accelerate().accelerate();

console.warn(
  `Adu instanta masinii la viteza 55 apoi redu la 52, folosind chaining`,
);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

console.warn(
  `Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode.`,
);
const speedDisplay = document.createElement('p');
speedDisplay.textContent = `Instanta ${audi.make} are viteza ${audi.speed}.`;

document.body.append(speedDisplay);

console.warn(
  `-Modifica metodele accelerate si decelerate astfel incat sa primeasca un coeficient
  cu care sa mareasca sau sa reduca viteza si pastreaza conceptele de chaining.
  -Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4.
  -Afiseaza viteza noua in DOM.
  `,
);

audi.accelerate(12).decelerate(3).decelerate(4);

const movingCar = document.createElement('p');
movingCar.textContent = `${audi.make} accelereaza si incetineste ajungand la viteza ${audi.speed}`;

document.body.append(movingCar);

console.warn(
  `-Creeaza o metoda chainable noua, numita setSpeed() care sa seteze viteza la o anumita valoare
   (fara limite superioare sau inferioare pentru simplitate).
  -Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.
  -Afiseaza noua valoare in DOM.
  `,
);

audi.setSpeed(4);
audi.accelerate();

const setAudiSpeed = document.createElement('p');
setAudiSpeed.textContent = `${audi.make} o sa seteze viteza la 4 si o sa accelereze la 5`;

document.body.append(setAudiSpeed);
