const mysql = require('../config/mysql')

module.exports = (app) => {

    async function getCategories() {
        let db = await mysql.connect();
        let [categories] = await db.execute(`
           SELECT * 
           FROM newscategories
           ORDER BY category_id ASC`);
        db.end();
        return categories;
    }

    app.get('/admin/categories', async (req, res, next) => {
        let categories = await getCategories();

        res.render('admin_categories', {
            "categories": categories
        });
    });

    app.post("/admin/categories", async (req, res, next) =>{
        let categoryNameInput = req.body.categoryNameInput;

        errorMessage = []
        if(categoryNameInput == ''){
            errorMessage.push("Du har ikke skrevet noget i inputfelt")
        }

        if(errorMessage.length > 0){
            console.log('der er error')
            let categories = await getCategories();
            res.render('admin_categories', {
                "categories": categories
            });
        }else{
            let db = await mysql.connect();
            let result = await db.execute(`
                INSERT INTO newscategories 
                    (categoryName) 
                VALUES 
                    (?)`, [categoryNameInput]);
            db.end();
            let categories = await getCategories();
            res.render('admin_categories', {
                "categories": categories
            });
        }

    })

}