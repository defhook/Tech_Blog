const router = require('express').Router();
const withAuth = require("../utils/auth"); 
const { User, Post, Comment } = require('../models');

// get all posts for dahsboard for the logged in user 
//router.get('/', withAuth,  (req, res) => {
    router.get('/',  (req, res) => {
    console.log('====================== DASHBOARD');
    console.log( req.session);
    Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ], 
        where: {
            user_id: req.session.user.id
        }
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('dashboard', { posts });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//new post created from dashboard 
router.get('/new', (req, res) => {
    if(req.session.loggedIn){
        res.redirect("/"); //take the logged in user to homepage page 
        return ;
    }
    res.render('login');
}); 

module.exports = router;
