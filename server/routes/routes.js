module.exports = (app) => {

   

   let news = [{
      "picture": "img/bg-img/19.jpg",
      "category": "Fincance",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id."
   },{
      "picture": "img/bg-img/20.jpg",
      "category": "Politics",
      "textContent": "Sed a elit euismod augue semper congue sit amet ac sapien."
   },{
      "picture": "img/bg-img/21.jpg",
      "category": "Health",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id."
   },{
      "picture": "img/bg-img/22.jpg",
      "category": "Finance",
      "textContent": "Augue semper congue sit amet ac sapien. Fusce consequat."
   },{
      "picture": "img/bg-img/23.jpg",
      "category": "Travel",
      "textContent": "Pellentesque mattis arcu massa, nec fringilla turpis eleifend id."
   },{
      "picture": "img/bg-img/24.jpg",
      "category": "Politics",
      "textContent": "Augue semper congue sit amet ac sapien. Fusce consequat."
   }]

   app.get('/', (req, res, next) => {



      res.render('home');

   });
   app.get('/about', (req, res, next) => {
      res.render('about');
   });
   app.get('/catagories-post', (req, res, next) => {
      res.render('catagories-post',{
         "news": news
      });
   });
   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
   app.get('/single-post', (req, res, next) => {
      res.render('single-post');
   });

};