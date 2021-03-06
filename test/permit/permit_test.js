// Generated by LiveScript 1.2.0
(function(){
  var requires, Permit, RuleRepo, RuleApplier, PermitMatcher, permitFor, Book;
  requires = require('../../../requires');
  requires.test('test_setup');
  Permit = requires.lib('permit').Permit;
  RuleRepo = requires.rule('repo').RuleRepo;
  RuleApplier = requires.permit('rule').PermitRuleApplier;
  PermitMatcher = requires.permit('matcher').PermitMatcher;
  permitFor = requires.permit('factory').permitFor;
  Book = requires.fix('book');
  describe('Permit', function(){
    var permits;
    permits = {};
    before(function(){
      return permits.hello = new Permit('hello');
    });
    xdescribe('clean', function(){});
    describe('matcher', function(){
      var accessRequest;
      before(function(){
        return accessRequest = {};
      });
      specify('can NOT create matcher without access request', function(){
        return function(){
          return permits.hello.matcher();
        }.should['throw'];
      });
      return specify('create matcher with access request', function(){
        return permits.hello.matcher(accessRequest).constructor.should.eql(PermitMatcher);
      });
    });
    describe('rule-applier', function(){
      var accessRequest;
      before(function(){
        accessRequest = {};
        return permits.hello.rules = function(){};
      });
      specify('has a rule-applier', function(){
        return permits.hello.ruleApplier().constructor.should.eql(RuleApplier);
      });
      return describe('constructed with access request', function(){
        specify('has a rule-applier ', function(){
          return permits.hello.ruleApplier(accessRequest).constructor.should.eql(RuleApplier);
        });
        return specify('and rule-applier has access request', function(){
          return permits.hello.ruleApplier(accessRequest).accessRequest.should.eql(accessRequest);
        });
      });
    });
    return describe('matches', function(){
      var book, readBookRequest, publishBookRequest, makeRequest;
      makeRequest = function(action){
        return {
          user: {},
          action: action,
          subject: book
        };
      };
      before(function(){
        book = new Book('a book');
        readBookRequest = makeRequest('read');
        publishBookRequest = makeRequest('publish');
        return permits.hello.match = function(access){
          return this.matching(access).matchOn({
            action: 'read'
          });
        };
      });
      specify('will match request to read a book', function(){
        return permits.hello.matches(readBookRequest).should.be['true'];
      });
      specify('will NOT match request to publish a book', function(){
        return permits.hello.matches(publishBookRequest).should.be['false'];
      });
      return describe('matches-on', function(){
        context('roles and actions', function(){
          before(function(){
            return permits.onMulti = permitFor('on-multi', {
              matchesOn: {
                roles: ['editor', 'publisher'],
                actions: ['edit', 'write', 'publish']
              }
            });
          });
          return specify('match', function(){
            return permits.onMulti.matches(publishBookRequest).should.be['true'];
          });
        });
        return context('role and action', function(){
          before(function(){
            return permits.onSingle = permitFor('on-single', {
              matchesOn: {
                action: 'publish',
                role: 'publisher'
              }
            });
          });
          return specify('match', function(){
            return permits.onSingle.matches(publishBookRequest).should.be['true'];
          });
        });
      });
    });
  });
}).call(this);
