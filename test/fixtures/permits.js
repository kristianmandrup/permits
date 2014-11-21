// Generated by LiveScript 1.2.0
(function(){
  var permitFor;
  permitFor = require('../../').factory.permitFor;
  module.exports = {
    setup: {
      userPermit: function(){
        return permitFor('User', {
          match: function(access){
            return this.matching(access).user();
          },
          rules: function(){}
        });
      },
      invalidUser: function(){
        return permitFor('invalid User', {
          match: void 8,
          rules: function(){}
        });
      },
      invalidExUser: function(){
        return permitFor('User', {
          exMatch: void 8,
          rules: function(){}
        });
      },
      guestPermit: function(){
        return permitFor('Guest', {
          match: function(access){
            return this.matching(access).role('guest');
          },
          rules: function(){
            return this.ucan('read', 'Book');
          }
        });
      },
      adminPermit: function(){
        return permitFor('Admin', {
          match: function(access){
            return this.matching(access).role('guest');
          },
          rules: {
            admin: function(){
              return this.ucan('manage', 'all');
            }
          }
        });
      },
      bookPermit: function(){
        return permitFor('Book', {
          match: function(access){
            return this.matching(access).subjectClazz('Book');
          },
          rules: function(){
            return this.ucan('read', 'Book');
          }
        });
      },
      exUserPermit: function(){
        return permitFor('ex User', {
          exMatch: function(access){
            console.log('access', access);
            return this.matching(access).role('admin');
          },
          rules: function(){
            return this.ucan('read', 'Book');
          }
        });
      },
      complexUser: function(){
        return permitFor('complex User', {
          match: function(access){
            return this.matching(access).user({
              type: 'person'
            }).role('admin').subjectClazz('Book');
          },
          rules: function(){
            return this.ucan('read', 'Book');
          }
        });
      },
      complexUserReturnsMatcher: function(){
        return permitFor('ex User', {
          match: function(access){
            return this.matching(access).user({
              type: 'person'
            }).role('admin').subjectClazz('Book');
          },
          rules: function(){
            return this.ucan('read', 'Book');
          }
        });
      }
    }
  };
}).call(this);
