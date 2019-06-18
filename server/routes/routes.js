const mysql = require('../config/mysql')

module.exports = (app) => {

   async function getCategories() {
      let db = await mysql.connect();
      let [categories] = await db.execute(`
         SELECT category_id, categoryName 
         FROM newscategories
         ORDER BY categoryName ASC`);
      db.end();
      return categories;
   }

   let editorsPicks = [{
      "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
      "imgSrc": "/img/bg-img/1.jpg",
      "time": "2019-04-14 07:50:14"
   }, {
      "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
      "imgSrc": "/img/bg-img/2.jpg",
      "time": "2019-04-14 07:20:14"
   }, {
      "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
      "imgSrc": "/img/bg-img/3.jpg",
      "time": "2019-04-14 07:20:14"
   }, {
      "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
      "imgSrc": "/img/bg-img/4.jpg",
      "time": "2019-04-14 07:20:14"
   }, {
      "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
      "imgSrc": "/img/bg-img/5.jpg",
      "time": "2019-04-14 07:20:14"
   }, {
      "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
      "imgSrc": "/img/bg-img/6.jpg",
      "time": "2019-04-14 07:20:14"
   }, ]

   let news = [{
      "picture": "/img/bg-img/19.jpg",
      "category": "Fincance",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      "time": "2019-04-14 07:05:14"
   }, {
      "picture": "/img/bg-img/20.jpg",
      "category": "Politics",
      "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
      "time": "2019-04-14 07:00:14"
   }, {
      "picture": "/img/bg-img/21.jpg",
      "category": "Health",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      "time": "2019-04-14 07:00:14"
   }, {
      "picture": "/img/bg-img/22.jpg",
      "category": "Finance",
      "textContent": "Augue semper congue sit amet ac sapien. Fusce consequat.",
      "time": "2019-04-14 07:00:14"
   }, {
      "picture": "/img/bg-img/23.jpg",
      "category": "Travel",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      "time": "2019-04-14 07:00:14"
   }, {
      "picture": "/img/bg-img/24.jpg",
      "category": "Politics",
      "textContent": "Augue semper congue sit amet ac sapien. Fusce consequat.",
      "time": "2019-04-14 07:00:14"
   }]

   let comments = [{
      "textContent": "Facebook is offering facial recognition...",
      "commentersName": "Jamie Smith",
      "time": "2019-04-14 07:00:14"
   }, {
      "textContent": "Facebook is offering facial recognition...",
      "commentersName": "Jamie Smith",
      "time": "2019-04-14 07:00:14"
   }, {
      "textContent": "Facebook is offering facial recognition...",
      "commentersName": "Jamie Smith",
      "time": "2019-04-14 07:00:14"
   }, {
      "textContent": "Facebook is offering facial recognition...",
      "commentersName": "Jamie Smith",
      "time": "2019-04-14 07:00:14"
   }]

   let postCommments = [{
      "commentersName": "Christian Williams",
      "time": "2019-04-14 07:00:14",
      "textContent": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.",
      "imgSrc": "/img/bg-img/30.jpg"
   }, {
      "commentersName": "Henning",
      "time": "2019-04-14 07:00:14",
      "textContent": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.",
      "imgSrc": "/img/bg-img/31.jpg"
   }, {
      "commentersName": "Lars",
      "time": "2019-04-14 07:00:14",
      "textContent": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.",
      "imgSrc": "/img/bg-img/29.jpg"
   }]

   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();
      let [headerCategories] = await db.execute('SELECT * FROM `newscategories`');

      let [recommendedPost] = await db.execute('SELECT articles.article_title, newscategories.categoryName, images.img_src FROM articles INNER JOIN images on articles.fk_img_id = images.img_id INNER JOIN newscategories on articles.fk_category_id = newscategories.category_id');

      let [latestnews] = await db.execute(`SELECT newscategories.category_id, newscategories.categoryName, articles.article_id, articles.article_title, articleImage.img_src, articles.article_postdate
      FROM newscategories
      INNER JOIN articles ON fk_category_id = newscategories.category_id
      INNER JOIN images as articleImage ON articles.fk_img_id = articleImage.img_id
      WHERE articles.article_id = (
         SELECT articles.article_id
         FROM articles
         WHERE 	articles.fk_category_id = newscategories.category_id
         ORDER BY articles.article_postdate DESC
         limit 1)
      ORDER by articles.article_postdate desc`)

      let [popularNews] = await db.execute(`SELECT article_title, article_postdate, article_likes, article_id
      FROM articles
      ORDER BY article_likes desc
      limit 4`)

      res.render('home', {
         "latestnews": latestnews,
         "headerCategories": headerCategories,
         "popularNews": popularNews,
         "recommendedPost": recommendedPost,
         "news": news,
         "comments": comments,
         "editorsPicks": editorsPicks
      });
   });
   app.get('/about', async (req, res, next) => {

      let db = await mysql.connect();

      let [headerCategories] = await db.execute('SELECT * FROM `newscategories`');

      let [popularNews] = await db.execute(`SELECT article_title, article_postdate, article_likes, article_id
      FROM articles
      ORDER BY article_likes desc
      limit 4`)

      res.render('about', {
         "headerCategories": headerCategories,
         "popularNews": popularNews
      });
   });
   app.get('/catagories-post/:categoryID', async (req, res, next) => {
      let db = await mysql.connect();

      let [popularNews] = await db.execute(`SELECT article_title, article_postdate, article_likes, article_id
      FROM articles
      ORDER BY article_likes desc
      limit 4`)

      let [headerCategories] = await db.execute('SELECT * FROM `newscategories`');

      let [shownCategory] = await db.execute(`SELECT article_title, articleImage.img_src, articles.article_postdate, articles.article_likes,authors.author_name, newscategories.categoryName, article_summary, article_id
      FROM articles
      INNER JOIN images as articleImage ON articles.fk_img_id = articleImage.img_id
      INNER JOIN authors ON articles.fk_author_id = authors.author_id
      INNER JOIN newscategories ON articles.fk_category_id = newscategories.category_id
      where fk_category_id = ?`, [req.params.categoryID])

      let [latestnews] = await db.execute(`SELECT newscategories.category_id, newscategories.categoryName, articles.article_id, articles.article_title, articleImage.img_src, articles.article_postdate
      FROM newscategories
      INNER JOIN articles ON fk_category_id = newscategories.category_id
      INNER JOIN images as articleImage ON articles.fk_img_id = articleImage.img_id
      WHERE articles.article_id = (
         SELECT articles.article_id
         FROM articles
         WHERE 	articles.fk_category_id = newscategories.category_id
         ORDER BY articles.article_postdate DESC
         limit 1)
      ORDER by articles.article_postdate desc`)

      res.render('catagories-post', {
         "headerCategories": headerCategories,
         "shownCategory": shownCategory,
         "latestnews": latestnews,
         "news": news,
         "popularNews": popularNews,
         "comments": comments
      });
   });
   app.get('/contact', async (req, res, next) => {
      let db = await mysql.connect();

      let [headerCategories] = await db.execute('SELECT * FROM `newscategories`');

      res.render('contact', {
         "headerCategories": headerCategories
      });
   });

   app.post('/contact', async (req, res, next) => {
      let name = req.body.name;
      let email = req.body.email;
      let subject = req.body.subject;
      let message = req.body.message;
      let contactDate = new Date();

      let categories = await getCategories();
      
      let return_message = [];
      if (name == undefined || name == '') {
         return_message.push('Navn mangler');
      }
      if (email == undefined || email == '') {
         return_message.push('Email mangler')
      }
      if (subject == undefined || subject == '') {
         return_message.push('Emne mangler');
      }
      if (message == undefined || message == '') {
         return_message.push('Beskedteksten mangler');
      }
      
         
         if (return_message.length > 0) {
            let categories = await getCategories();
            res.render('contact', {
               'headerCategories': categories,
               'return_message': return_message.join(', '),
               'values': req.body
            });

         } else {
            console.log("error check")
            let db = await mysql.connect();
            let result = await db.execute(`
               INSERT INTO messages 
                  (message_name, message_email, message_subject, message_text, message_date) 
               VALUES 
                  (?,?,?,?,?)`, [name, email, subject, message, contactDate]);
            db.end();

            if (result[0].affectedRows > 0) {
               return_message.push('Tak for din besked, vi vender tilbage hurtigst muligt');
            } else {
               return_message.push('Din besked blev ikke modtaget.... ');
            }

            let categories = await getCategories(); // denne har jeg ikke forklaret endnu! 
            res.render('contact', {
               'headerCategories': categories,
               'return_message': return_message.join(', '),
               'values': req.body
            });
         

      }


   });

   app.get('/single-post/:articleID', async (req, res, next) => {

      let db = await mysql.connect();

      let [headerCategories] = await db.execute('SELECT * FROM `newscategories`');

      let [articlePost] = await db.execute(`SELECT articles.article_title, articles.article_text, articles.article_postdate, articles.article_likes, newscategories.categoryName, articleImage.img_src as articleImage, authors.author_name, authors.author_about, authorImage.img_src as authorImage FROM articles 

      INNER JOIN images as articleImage ON articles.fk_img_id = articleImage.img_id 
      INNER JOIN authors ON articles.fk_author_id = authors.author_id 
      INNER JOIN newscategories ON articles.fk_category_id = newscategories.category_id
      INNER JOIN images as authorImage ON authors.fk_img_id = authorImage.img_id
      
      WHERE articles.article_id = ?`, [req.params.articleID]);

      let [latestnews] = await db.execute(`SELECT newscategories.category_id, newscategories.categoryName, articles.article_id, articles.article_title, articleImage.img_src, articles.article_postdate
      FROM newscategories
      INNER JOIN articles ON fk_category_id = newscategories.category_id
      INNER JOIN images as articleImage ON articles.fk_img_id = articleImage.img_id
      WHERE articles.article_id = (
         SELECT articles.article_id
         FROM articles
         WHERE 	articles.fk_category_id = newscategories.category_id
         ORDER BY articles.article_postdate DESC
         limit 1)
      ORDER by articles.article_postdate desc`)

      let [popularNews] = await db.execute(`SELECT article_title, article_postdate, article_likes, article_id
      FROM articles
      ORDER BY article_likes desc
      limit 4`)

      res.render('single-post', {
         "articlePost": articlePost[0],
         "postCommments": postCommments,
         "popularNews": popularNews,
         "latestnews": latestnews,
         "news": news,
         "comments": comments,
         "headerCategories": headerCategories
      });
   });

   app.get('/test/', async (req, res, next) => {
      let db = await mysql.connect();
      let [shownCategory] = await db.execute(`SELECT article_title, article_postdate, article_likes
      FROM articles
      ORDER BY article_likes desc
      limit 4`)

      res.send(shownCategory)
   });
};