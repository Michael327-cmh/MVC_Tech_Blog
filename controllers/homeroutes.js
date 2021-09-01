const router = require('express').Router();
const { Posts, User } = require('../models');
const withAuth = require('../utils/authorization');

router.get('/', async (req, res) => {
  try {
    //GET all Posts and JOIN with user data
    const postData = await Posts.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    //serialize data so the template can read it
    const posts = postData.map((Posts) => Posts.get({ plain: true }));

    //Pass serialized data
    res.render('homepage', /* req.session.username, */{
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/personal', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Posts }],
    });

    const user = userData.get({ plain: true });

    res.render('personal', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/personal');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/personal');
    return;
  }

  res.render('signup');
});

module.exports = router;
