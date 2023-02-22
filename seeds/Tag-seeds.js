const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'jazz music',
  },
  {
    tag_name: 'worship music',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
