module.exports = function(express, app) {
  var router = express.Router();
  router.get('/',function(req,res,next){
    res.render('index',{titile:"chit-chat"});
  });
  router.get('/chatrooms',function(req,res,next){
    res.render('chatrooms',{title:'chatrooms'});
  });

  app.use('/',router);
}
