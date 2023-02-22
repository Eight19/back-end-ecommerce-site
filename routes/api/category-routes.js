const router = require('express').Router();
const { models } = require('../../config/connection');
const { restart } = require('nodemon');
const { Category, Product } = require('./../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products//
  const categoryData = await Category.findAll({
    include: [
      {
        model: Product }],
  });
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products//
  Category.findByPk(req.params.id, {
    include: [
      {
        model: Product, }],
  }) .then((dbCategoryData) => {
    res.json(dbCategoryData);
  });
});

router.post('/', async (req, res) => {
  // create a new category//
  const categoryData = await Category.create(req.body);
  res.json(categoryData);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value//
  Category.update( {
    category_name: req.body.category_name,
  },
  {
    where: {
      id: req.params.id,
    },
  })
  .then((updateCategoryData) => {
    res.json(updateCategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
  });
});



router.delete("/:id", (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;



//   Category.findAll({
//     include: [
//       {
//         model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', ]
//       },
//     ],
//   })
//     .then((dbCategoryData) => res.json(dbCategoryData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products//
//   Category.findOne({
//     where: {
//       id: req.params.id,
//     },
//     include: [
//       {
//         model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
//       }
//     ],
//   })
//     .then((dbCategoryData) => {
//       if (!dbCategoryData) {
//         res.status(404).json({ message: 'No category found with this id' });
//         return;
//       }
//       res.json(dbCategoryData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });

// router.post('/', (req, res) => {
//   //New category created//
//   Category.create({
//     categoryName: req.body.categoryName,
//   })
//     .then((dbCategoryData) => res.json(dbCategoryData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });

// router.put('/:id', (req, res) => {
//   //Category updated by its `id` value//
//   Category.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbCategoryData) => {
//       if (!dbCategoryData) {
//         res.status(404).json({ message: 'No category found with this id' });
//         return;
//       }
//       res.json(dbCategoryData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });

// router.delete('/:id', (req, res) => {
//   //Category deleted by its `id` value//
//   Category.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbCategoryData) => {
//       if (!dbCategoryData) {
//         res.status(404).json({ message: 'No category found with this id' });
//         return;
//       }
//       res.json(dbCategoryData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   });

// module.exports = router;














// });

// router.post('/', (req, res) => {
//   // create a new category
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
// });

// module.exports = router;


