const mysql = require('../config/mysql')

module.exports = (app) => {

   let popularNews = [
      {
         "textContent": "lorem",
         "time": "2019-04-14 07:50:14"
      },{
         "textContent": "lorem",
         "time": "2019-04-14 07:50:14"
      },{
         "textContent": "lorem",
         "time": "2019-04-14 07:50:14"
      },{
         "textContent": "lorem",
         "time": "2019-04-14 07:50:14"
      }
   ]

   let editorsPicks = [
      {
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/1.jpg",
         "time": "2019-04-14 07:50:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/2.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/3.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/4.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/5.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/6.jpg",
         "time": "2019-04-14 07:20:14"
      },
   ]

   let latestnews = [
      {
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/1.jpg",
         "time": "2019-04-14 07:50:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/2.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/3.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/4.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/5.jpg",
         "time": "2019-04-14 07:20:14"
      },{
         "textContent": "Orci varius natoque penatibus et magnis dis parturient montes.",
         "imgSrc": "img/bg-img/6.jpg",
         "time": "2019-04-14 07:20:14"
      },
   ]

   let news = [
      {
      "picture": "img/bg-img/19.jpg",
      "category": "Fincance",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      "time": "2019-04-14 07:05:14"
   },{
      "picture": "img/bg-img/20.jpg",
      "category": "Politics",
      "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien.",
      "time": "2019-04-14 07:00:14"
   },{
      "picture": "img/bg-img/21.jpg",
      "category": "Health",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      "time": "2019-04-14 07:00:14"
   },{
      "picture": "img/bg-img/22.jpg",
      "category": "Finance",
      "textContent": "Augue semper congue sit amet ac sapien. Fusce consequat.",
      "time": "2019-04-14 07:00:14"
   },{
      "picture": "img/bg-img/23.jpg",
      "category": "Travel",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.",
      "time": "2019-04-14 07:00:14"
   },{
      "picture": "img/bg-img/24.jpg",
      "category": "Politics",
      "textContent": "Augue semper congue sit amet ac sapien. Fusce consequat.",
      "time": "2019-04-14 07:00:14"
   }]

   let comments = [
      {
         "textContent": "Facebook is offering facial recognition...",
         "commentersName": "Jamie Smith",
         "time": "2019-04-14 07:00:14"
      },{
         "textContent": "Facebook is offering facial recognition...",
         "commentersName": "Jamie Smith",
         "time": "2019-04-14 07:00:14"
      },{
         "textContent": "Facebook is offering facial recognition...",
         "commentersName": "Jamie Smith",
         "time": "2019-04-14 07:00:14"
      },{
         "textContent": "Facebook is offering facial recognition...",
         "commentersName": "Jamie Smith",
         "time": "2019-04-14 07:00:14"
      }
   ]

   let postCommments = [
      {
         "commentersName": "Christian Williams",
         "time": "2019-04-14 07:00:14",
         "textContent": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.",
         "imgSrc": "img/bg-img/30.jpg"
      },{
         "commentersName": "Henning",
         "time": "2019-04-14 07:00:14",
         "textContent": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.",
         "imgSrc": "img/bg-img/31.jpg"
      },{
         "commentersName": "Lars",
         "time": "2019-04-14 07:00:14",
         "textContent": "Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.",
         "imgSrc": "img/bg-img/29.jpg"
      }
   ]

   app.get('/', async (req, res, next) => {
      let db = await mysql.connect();

      let [recommendedPost] = await db.execute('SELECT articles.article_title, newscategories.categoryName, images.img_src FROM articles INNER JOIN images on articles.fk_img_id = images.img_id INNER JOIN newscategories on articles.fk_category_id = newscategories.category_id');

      
      res.render('home', {
         "latestnews": latestnews,
         "popularNews": popularNews,
         "recommendedPost": recommendedPost,
         "news": news,
         "comments": comments,
         "editorsPicks": editorsPicks
      });
   });
   app.get('/about', (req, res, next) => {
      res.render('about');
   });
   app.get('/catagories-post', (req, res, next) => {
      res.render('catagories-post',{
         "news": news,
         "popularNews": popularNews,
         "comments": comments
      });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
   app.get('/single-post',  (req, res, next) => {
      res.render('single-post', {
         "news": news,
         "popularNews": popularNews,
         "comments": comments,
         "postCommments": postCommments
      });
   });

   app.get('/test', async  (req, res, next) => {
      let db = await mysql.connect();
      let [latestnews] = await db.execute('SELECT articles.article_title, newscategories.categoryName, images.img_src FROM articles INNER JOIN images on articles.fk_img_id = images.img_id INNER JOIN newscategories on articles.fk_category_id = newscategories.category_id');

      res.send(latestnews)
   });
   app.get('/test2/:articleID', async  (req, res, next) => {
      let db = await mysql.connect();
      let [latestnews] = await db.execute('SELECT articles.article_title, articles.article_text, articles.article_postdate, articles.article_likes, newscategories.categoryName, images.img_src, AUTHORS.author_name FROM `articles` INNER JOIN images ON articles.fk_img_id = images.img_id INNER JOIN authors ON articles.fk_author_id = authors.author_id INNER JOIN newscategories ON articles.fk_category_id = newscategories.category_id WHERE articles.article_id = ?',[req.params.articleID]);

      res.render('single-post-test', {
         "latestnews": latestnews,
         "postCommments": postCommments,
         "popularNews": popularNews,
         "latestnews": latestnews,
         "news": news,
         "comments": comments,
      })
   });
};