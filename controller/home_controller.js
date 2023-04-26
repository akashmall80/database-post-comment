//res.render home is the file title is the variable with value Home

module.exports.home = function(req,res){
   console.log(req.cookies)
   return res.render('home',{
    title:'Home'
   })
}