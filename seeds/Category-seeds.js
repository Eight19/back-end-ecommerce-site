const { Category } = require('../models');

const categoryData = [
  {
    categoryName: 'Hair',
  },
  {
    categoryName: 'Nails',
  },
  {
    categoryName: 'Clothes',
  },
  {
    categoryName: 'shoes',
  },
  {
    categoryName: 'Jewelry',
  },
  {
    categoryName: 'Makeup',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;