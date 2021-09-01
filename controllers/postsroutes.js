const router = require('express').Router();
const { Posts, User } = require('../models');
const withAuth = require('../utils/authorization');

// new post form
router.get('/newfiles', withAuth, (req, res) => {
  console.log(req.session)
  res.render('newfiles', {
  
  });
});

// get single post 
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit post view
router.get('/:id/editpost/', withAuth, async (req, res) => {
  try {
    const postDataEdit = await Posts.findByPk(req.params.id);

    if (postDataEdit) {
      const post = postDataEdit.get({ plain: true });

      res.render('editpost', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});



module.exports = router;