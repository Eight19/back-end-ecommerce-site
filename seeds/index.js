const seedCategories = require('./categorySeeds');
const seedProducts = require('./product-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedTags = require('./tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');


  process.exit(0);
};

seedAll();




// const router = require('express').Router();
// //Models to seed//
// const Category = require('seeds./Category');
// const Product = require('seeds./Product');
// const ProductTag = require('seeds./ProductTag');
// const Tag = require('seeds./Tag');

// const sequelize = require('config/connection');
// const { Model } = require('sequelize/types');
// const { Category, Product, ProductTag, Tag } = require('../models');
// const categoryData = require('./categoryData.json');
// const productData = require('./productData.json');
// const productTagData = require('./productTagData.json');
// const tagData = require('./tagData.json');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('--------------');
//   await Category.bulkCreate(categoryData);
//   console.log('--------------');

//   await Product.bulkCreate(productData);
//   console.log('--------------');

//   await Tag.bulkCreate(tagData);
//   console.log('--------------');

//   await ProductTag.bulkCreate(productTagData);
//   console.log('--------------');

//   process.exit(0);
// };

// seedAll();
