import { Product } from "../src/products";

interface InventoryItem {
  product: Product[];
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: [
      {
        name: "motor",
        price: 10.0,
      },
    ],
    quantity: 10,
  },
  {
    product: [
      {
        name: "sensor",
        price: 12.5,
      },
    ],
    quantity: 4,
  },
  {
    product: [
      {
        name: "LED",
        price: 1.0,
      },
    ],
    quantity: 20,
  },
];
console.log(inventory);

function calcInventoryValue(inventory: InventoryItem[]): number {
  let total = 0;
  if (inventory.length === 0) {
    return 0;
  }
  for (let i = 0; i < inventory.length; i++) {
    //Each InventoryItem takes the product price times the quantity

    total += inventory[i].product[0].price * inventory[i].quantity;
    console.log(`${total}`);
  }
  return total;
}
calcInventoryValue(inventory);

export { InventoryItem, calcInventoryValue };
