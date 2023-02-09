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