const mongoose = require('mongoose');
const user = new mongoose.Schema(
{
username:String,
password:String,

});
USERMODEL=mongoose.model("User",user);
module.exports=mongoose.model("User",user);

var query =USERMODEL.find(null);
query.where('username', 'nassim');
query.limit(1);
query.exec(function(err,username) {
    if (err) {throw err;}
    var user;
    for (var i = 0, l = username.length; i < l; i++) {
        user = username[i];
        console.log('Pseudo : ' + user.username);
}}
);
