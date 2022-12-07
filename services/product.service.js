const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(100), 10),
        image: faker.image.imageUrl(),
      });
    }
  }
  /* let create =()=>{

  } */
  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((item) => item.id === id);
  }
  /* let update=()=>{

  }
let delete=()=>{

} */
}

module.exports = ProductService;
