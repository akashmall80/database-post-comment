const User = require('../models/user');

module.exports.profile = function(req,res){
   //if cookies is there
   if(req.cookies.user_id)
   {
      //find the user
     User.findById(req.cookies.user_id).then((data)=>{
      //if user is there
      if(data)
      {
         return res.render('user',{
            title:'user profile',
            user:data
         })
      }
      return res.redirect('/users/sign-in');
     })
   }
   //if not
   else{
      return res.redirect('/users/sign-in');
   }
}

module.exports.signUp = function(req,res){
   return res.render('sign_up',{
      title:'sign_up'
   })
}

module.exports.signIn = function(req,res){
   return res.render('sign_in',{
      title:'sign_in'
   })
}

module.exports.create = function(req,res){
  
   if(req.body.password!=req.body.confirm_password)
   {
      console.log("pass confirm pass not same");
      return res.redirect('back')
   }

   //email is unique
   User.findOne({email:req.body.email}).then((data)=>{
      //if email is not there then create
     if(!data)
     {
        User.create(req.body).then((data)=>{
         console.log("user created");
         return res.redirect('/users/sign-in')
        })
        .catch((err)=>{
         console.log("error");
         return res.redirect('/users/sign-up')
        })
     }
   })
   .catch((err)=>{
      return res.redirect('/users/sign-up')
   })

}

module.exports.createSession = function(req,res){

   User.findOne({email:req.body.email}).then((data)=>{

      if(data.password != req.body.password)
      {
         console.log("password not match")
         return res.redirect("back");
      }

      res.cookie('user_id',data.id);
      return res.redirect('/users/profile');

   })
   .catch((err)=>{
      console.log('error in sign in')
      return res.redirect('back');
   })
   
}