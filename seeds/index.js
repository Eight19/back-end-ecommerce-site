//Models to seed//
const Category = require('models./Category');
const Product = require('models./Product');
const ProductTag = require('models./ProductTag');
const Tag = require('models./Tag');

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


