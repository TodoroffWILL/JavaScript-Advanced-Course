class OnlineShop {
  constructor(wareHouseSpace) {
    this.wareHouseSpace = wareHouseSpace;

    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (this.wareHouseSpace < spaceRequired) {
      throw new Error('Not enough space in the warehouse.');
    }

    this.products.push({ product, quantity });
    this.wareHouseSpace -= spaceRequired;

    return `The ${product} has been successfully delivered in the warehouse.`;
  }
  quantityCheck(product, minimalQuantity) {
    const foundProduct = this.products.find((x) => x.product == product);
    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    if (minimalQuantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }
    if (minimalQuantity <= foundProduct.quantity) {
      return `You have enough from product ${product}.`;
    }
    let difference = Math.abs(minimalQuantity - foundProduct.quantity);
    foundProduct.quantity = minimalQuantity;
    return `You added ${difference} more from the ${foundProduct.product} products.`;
  }
  sellProduct(product) {
    const foundProduct = this.products.find((x) => x.product == product);
    if (!foundProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }
    foundProduct.quantity -= 1;
    let quantity = product.quantity;
    this.sales.push({ product, quantity });
    return `The ${foundProduct.product} has been successfully sold.`;
  }
  revision() {
    if (this.sales.length === 0) {
      throw new Error('There are no sales today!');
    }
    let result = `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`;
    this.products.forEach(
      (x) => (result += `${x.product} - ${x.quantity} more left\n`)
    );
    return result.trim();
  }
}

const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
