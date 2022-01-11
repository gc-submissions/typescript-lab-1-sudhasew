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

function calcAverageProductPrice(product: Product[]): number {
  if (product.length === 0) {
    return 0;
  }
  var i = 0,
    sum = 0,
    len = product.length;
  while (i < len) {
    sum = sum + product[i++].price;
    console.log(sum);
  }
  let average = sum / len;
  console.log("average is", average);
  return average;
}
calcAverageProductPrice(products);

export { Product, calcAverageProductPrice };
