class WineSelection {
  constructor(space) {
    this.space = Number(space);
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space <= 0) {
      throw new Error('Not enough space in the cellar.');
    }
    this.wines.push({ wineName, wineType, price, paid: false });
    this.space--;
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }
  payWineBottle(wineName, price) {
    const foundWine = this.wines.find((x) => x.wineName === wineName);
    if (!foundWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (foundWine.paid == true) {
      throw new Error(`${wineName} has already been paid.`);
    }
    foundWine.paid = true;
    this.bill += price;
    return `You bought a ${wineName} for a ${price}$.`;
  }
  openBottle(wineName) {
    const foundWineIndex = this.wines.findIndex((x) => x.wineName === wineName);
    if (foundWineIndex === -1) {
      throw new Error("The wine, you're looking for, is not found.");
    }
    let wineCheck = this.wines[foundWineIndex];
    if (!wineCheck.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    this.wines.splice(foundWineIndex, 1);
    return `You drank a bottle of ${wineName}.`;
  }
  cellarRevision(wineType) {
    if (!wineType) {
      let result = `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;
      this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .forEach((x) => {
          result += `${x.wineName} > ${x.wineType} - ${
            x.paid == true ? 'Has Paid' : 'Not Paid'
          }.\n`;
        });
      return result.trim();
    } else {
      const findWine = this.wines.filter((x) => x.wineType === wineType);
      if (findWine.length === 0) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      } else {
        let result = '';
        findWine.forEach(
          (x) =>
            (result += `${x.wineName} > ${x.wineType} - ${
              x.paid == true ? 'Has Paid' : 'Not Paid'
            }.`)
        );
        return result;
      }
    }
  }
}

const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
