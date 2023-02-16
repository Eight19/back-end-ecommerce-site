//Models to seed//
const Category = require('seeds./Category');
const Product = require('seeds./Product');
const ProductTag = require('seeds./ProductTag');
const Tag = require('seeds./Tag');

const sequelize = require('config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await Category.bulkCreate(categoryData);
  console.log('--------------');

  await Product.bulkCreate(productData);
  console.log('--------------');

  await Tag.bulkCreate(tagData);
  console.log('--------------');

  await ProductTag.bulkCreate(productTagData);
  console.log('--------------');

  process.exit(0);
};

seedAll();

//Categories have many Products//
Category.hasMany(Product);

//Categories have many Tags through Products//
Category.hasMany(Tag, { through: ProductTag });

//Products belongsTo Category//
Product.belongsTo(Category);

//Products belongToMany Tags (through ProductTag)//
Product.belongsToMany(Tag, {  through: ProductTag });

//Tags belongToMany Products (through ProductTag)//
Tag.belongsToMany(Product, { through: ProductTag });


//Tags belong to many Categories through Products//
Tag.belongsTo(Category, { through: ProductTag });

module.exports = { Category, Product, ProductTag, Tag };


