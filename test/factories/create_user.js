// Generated by LiveScript 1.2.0
(function(){
  var requires, User, createUser;
  requires = require('../../requires');
  User = requires.fix('user');
  createUser = {
    name: function(name){
      return new User({
        name: name,
        clazz: 'User'
      });
    },
    kris: function(){
      return this.name('kris');
    },
    javier: function(){
      return this.name('javier');
    },
    emily: function(){
      return this.name('emily');
    },
    role: function(role){
      return new User({
        name: 'kris',
        role: role
      });
    },
    guest: function(){
      return this.role('guest');
    },
    admin: function(){
      return this.role('admin');
    },
    auth: function(){
      return this.role('auth');
    },
    nameRole: function(name, role){
      return new User({
        name: name,
        role: role
      });
    }
  };
  module.exports = createUser;
}).call(this);