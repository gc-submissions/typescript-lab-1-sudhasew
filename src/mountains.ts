interface Mountain {
  name: string;
  height: number;
}
const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];
console.log(mountains);

function findNameOfTallestMountain(mountains: Mountain[]) {
  if (mountains.length === 0) {
    return "";
  }
  let tallestMountain: number = 0;
  let tallestMountainName: string = "";
  for (let i = 0; i < mountains.length; i++) {
    if (mountains[i].height > tallestMountain) {
      tallestMountain = mountains[i].height;
      tallestMountainName = mountains[i].name;
    }
  }
  console.log("tallestMountain", tallestMountain);
  console.log("tallestMountainName", tallestMountainName);
}
findNameOfTallestMountain(mountains);

export { Mountain, findNameOfTallestMountain };
