const router = require('express').Router();
const Link = require('../db/models/Link.js')

/* GET home page. */
router.get('/', async function (req, res, next) {
    const data = await Link.find({})
    res.render('index', { title: 'Express', data });
});

// add link
router.post('/submit-form', async (req, res) => {
    try {
        try {
            const newLink = new Link({
                long: req.body.urlInput,
                short: req.body.aliasInput
            });
            await Link.create(newLink);
            res.redirect('/');
            console.log(newLink);
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
});

const adminLayout = '../views/admin';
router.get('/admin', async (req, res) => {
    try {
        const locals = {
            title: "Admin",
            description: "Simple Blog created with NodeJs, Express & MongoDb."
        }

        res.render('admin/index', { locals, layout: adminLayout });
    } catch (error) {
        console.log(error);
    }
});


router.get('/dashboard', async (req, res) => {
    try {
        const locals = {
            title: 'Dashboard',
            description: 'Simple Blog created with NodeJs, Express & MongoDb.'
        }

        const data = await Post.find();
        res.render('admin/dashboard', {
            locals,
            data,
            layout: adminLayout
        });

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;
