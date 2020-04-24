
let crypto=require('crypto');
var flash = require('connect-flash');
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hospital',
});

module.exports= {
login: function(req,res){
  res.render('login',{msg:req.flash('msg'),session:req.session});	
},
register: function(req,res){
  res.render('register',{msg:req.flash('msg'),session:req.session});	
},
feature: function(req,res){
 if(req.session && req.session.auth==true){
  res.render('feature',{msg:req.flash('msg'),session:req.session});	
}else{
  req.flash('msg', 'Please login first.');
  res.redirect('/home');
}
},
about: function(req,res){
    res.render('about',{msg:req.flash('msg'),session:req.session});	

},

contact: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('contact',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
appointment: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('appointment',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
staff: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('staff',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
pharmacy: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('pharmacy',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
account: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('account',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
tools: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('tools',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
patients: function(req,res){
 if(req.session && req.session.auth==true){
    res.render('patients',{msg:req.flash('msg'),session:req.session});	
  }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},
doctors: function(req,res){
   if(req.session && req.session.auth==true){
    res.render('doctors',{msg:req.flash('msg'),session:req.session});	
   }else{
    req.flash('msg', 'Please login first.');
    res.redirect('/login');
  }
},


signup: function(req,res){
  let request_data = req.body;
  request_data.password = crypto.createHash('sha1').update(request_data.password).digest('hex');
  let query ='insert into users values(" " ,"'+request_data.name+'","'+request_data.email+'","'+request_data.password+'","'+request_data.address+'"," "," ")';
  connection.query(query,(error,result) =>{
    if (error) throw error;
    req.flash('msg', 'Signup Successfully.');
    res.redirect('/login');
  });
},
login_user: function(req,res){
  req.body.password= crypto.createHash('sha1').update(req.body.password).digest('hex');
  let  queryString ='select * from users where email = "'+req.body.email+'" and password = "'+req.body.password+'"';
  connection.query(queryString, (error, result) => {
    if (error) throw error;
    if(result.length > 0){
      res.session = req.session;
      req.session.email = result[0].email;
      req.session.name = result[0].name;
      res.session.auth = true;
      req.flash('msg', 'Login Successfully.');
      res.redirect('/feature');
    }else{
      req.flash('msg', 'Invalid login details.')
      res.redirect('/login');
    }
  });
},
logout: function(req,res){
  req.session.auth = false;
  req.flash('msg', 'Logout Successfully.')
  res.redirect('/login');
},

contact_send: function(req,res){
  // console.log(req.body,"=====================requestdata"); return;
  let request_data = req.body;
  let query ='insert into contact values(" " ,"'+request_data.name+'","'+request_data.email+'","'+request_data.subject+'","'+request_data.phone+'","'+request_data.message+'","'+request_data.rating+'"," "," ")';
  connection.query(query,(error,result) =>{
    if (error) throw error;
    req.flash('msg', 'Feedback Send Successfully.')
    res.redirect('/contact');
  });
 
},
booking_send: function(req,res){
  let request_data = req.body;
  let query ='insert into appointment values(" " ,"'+request_data.username+'","'+request_data.doct_name+'","'+request_data.confederation+'","'+request_data.city+'","'+request_data.dob+'")';
  connection.query(query,(error,result) =>{
    if (error) throw error;
    req.flash('msg', 'Appointment Submit Successfully.')
   res.redirect('/appointment');
  });
 
},
}