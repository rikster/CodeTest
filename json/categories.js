//import * as data from './categoriesJson.json'
const data = require("./categoriesJson");

const superCategories = data.filter(
  category =>
    (category.content.component === "super_category") &
    (category.name !== "Shopping")
);

const categories = data.filter(
  category => category.content.component === "category"
);

const allCategories = superCategories.concat(categories);

console.log(allCategories);
console.log(allCategories.length);
