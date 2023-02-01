const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// route to creat a new post
router.post('/', withAuth, async (req, res) => {
    try{
    const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// route to edit a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const editData = await Post.update(
        {...req.body},
        {where: {
            id: req.params.id,
            user_id: req.session.user_id,
        },
        });

        if (!editData) {
            res.status(404).json({message: 'No post found with this id :/' });
        }
        res.status(200).json(editData);
    }   catch (err) {
        res.status(500).json
    }
})

// route to delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: "No post found with this id :/" });
        }

        res.status(200).json(postData);
    }   catch (err) {
        res.status(500).json
    }
});

module.exports = router;