interface Product {
  name: string;
  price: number;
}
const products: Product[] = [
  {
    name: "Cookies",
    price: 10,
  },
  {
    name: "Pizza",
    price: 20,
  },
  {
    name: "Coke",
    price: 5,
  },
  {
    name: "Cake",
    price: 15,
  },
];
console.log(products);

function calcAverageProductPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }
  var i = 0,
    sum = 0,
    len = products.length;
  while (i < len) {
    sum = sum + products[i++].price;
    console.log(sum);
  }
  let average = sum / len;
  console.log("average is", average);
  return average;
}
calcAverageProductPrice(products);

export { Product, calcAverageProductPrice };
