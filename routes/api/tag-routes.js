const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  //All tags found//
  //Associated Product data//
  const tagData = await Tag.findAll({
    include: [
      {
        model: Product }],
      });
      res.json(tagData);
    })
    router.get('/:id', (req, res) => {
      //Single tag by its `id`//
      //Includes Associated Product data//
      Tag.findByPk(req.params.id, {
        include: [{ model: Product }]
      }).then((tagData) => {
        res.json(tagData);
      })
    });

router.post('/', async (req, res) => {
  const tagData = await Tag.create(req.body);
  res.json(tagData);
});

router.put('/:id', async (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
    
  )
  })
    .then((updatedTag) => res.json(updatedTag))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
    
router.delete('/:id', async (req, res) => {
  //Single tag by its `id`//
  //Includes Associated Product data//
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(tagData);
});

module.exports = router;

    

// router.post('/', (req, res) => {
//   //New tag created//
//   Tag.create({
//     tag_name: req.body.tag_name,
//   })
//     .then((dbTagData) => res.json(dbTagData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     }
//     );
//     });

// router.put('/:id', (req, res) => {
//   //Tag's name updated by its `id` value//
//   Tag.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbTagData) => {
//       if (!dbTagData) {
//         res.status(404).json({ message: 'No tag found with this id' });
//         return;
//       }
//       res.json(dbTagData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//     });

// router.delete('/:id', (req, res) => {
//   //Tag deleted by its `id` value//
//   Tag.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbTagData) => {
//       if (!dbTagData) {
//         res.status(404).json({ message: 'No tag found with this id' });
//         return;
//       }
//       res.json(dbTagData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//     });

// module.exports = router;
