var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String
});

UserSchema.methods.validPassword = function(password){
    return (password == this.password);
};

mongoose.model('User', UserSchema);
