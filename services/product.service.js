const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  async find() {
    return this.products;
  }
  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) throw boom.notFound('product not found');
    return product;
  }
  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index < 0) throw boom.notFound('product not found');
    if (changes.id) throw boom.notAcceptable('You cannot update the id');
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index < 0) throw boom.notFound('product not Found');
    this.products.splice(index, 1);
    return { message: 'delete', id };
  }
}

module.exports = ProductService;
