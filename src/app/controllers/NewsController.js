class NewsController {
    // GET /news
    index(req, res){
        res.render('news');
    }
    // GET /news/chitiet
    show(req, res){
        res.send('New thong tin')
    }
}
module.exports = new NewsController;