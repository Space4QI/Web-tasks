class Inventory {
    constructor() {
      this.items = {};
    }
  
    updateInventory(currentInventory, newOrders) {
      for (let i = 0; i < currentInventory.length; i += 2) {
        const product = currentInventory[i];
        const quantity = parseInt(currentInventory[i + 1]);
  
        if (this.items[product]) {
          this.items[product] += quantity;
        } else {
          this.items[product] = quantity;
        }
      }
  
      for (let i = 0; i < newOrders.length; i += 2) {
        const product = newOrders[i];
        const quantity = parseInt(newOrders[i + 1]);
  
        if (this.items[product]) {
          this.items[product] += quantity;
        } else {
          this.items[product] = quantity;
        }
      }
    }
  
    printInventory() {
      for (let product in this.items) {
        console.log(`${product} -> ${this.items[product]}`);
      }
    }
  }
  
  const currentInventory = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
  ];
  
  const newOrders = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
  ];
  
  const storeInventory = new Inventory();
  storeInventory.updateInventory(currentInventory, newOrders);
  storeInventory.printInventory();
  