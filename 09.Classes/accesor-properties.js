class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  get diameter() {
    return this.radius * 2;
  }
  set diameter(value) {
    if (value < 0) {
      throw new Error('Diameter cannot be less than 0');
    }
    this.radius = value / 2;
  }
}
let circle = new Circle(2);
console.log(circle.area.toFixed(2)); // 12.57

circle.radius = 3;
console.log(circle.area.toFixed(2)); // 28.27

circle.area = 20;
console.log(circle.area);

console.log(Object.entries(circle));
