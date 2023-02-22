const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Hair',
  },
  {
    category_name: 'Nails',
  },
  {
    category_name: 'Clothes',
  },
  {
    category_name: 'shoes',
  },
  {
    category_name: 'Jewelry',
  },
  {
    category_name: 'Makeup',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;