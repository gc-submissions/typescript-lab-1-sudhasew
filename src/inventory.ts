import { Product } from "../src/products";

interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];
console.log(inventory);

function calcInventoryValue(inventory: InventoryItem[]) {
  let totalValue = 0;
  if (inventory.length === 0) {
    return 0;
  }
  for (let i = 0; i < inventory.length; i++) {
    //Each InventoryItem takes the product price times the quantity

    totalValue += inventory[i].product.price * inventory[i].quantity;
    console.log(`${totalValue}`);
  }
  return totalValue;
}
calcInventoryValue(inventory);

export { InventoryItem, calcInventoryValue };
