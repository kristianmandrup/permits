// Generated by LiveScript 1.2.0
(function(){
  var requires, Permit, PermitRegistry, Book, permitClazz, createPermit, createUser, AdminPermit, GuestPermit, expect;
  requires = require('../../../../requires');
  requires.test('test_setup');
  Permit = requires.lib('permit').Permit;
  PermitRegistry = requires.permit('registry').PermitRegistry;
  Book = requires.fix('book');
  permitClazz = requires.fix('permit-class');
  createPermit = requires.fac('create-permit');
  createUser = requires.fac('create-user');
  AdminPermit = permitClazz.AdminPermit;
  GuestPermit = permitClazz.GuestPermit;
  expect = require('chai').expect;
  describe('Permit', function(){
    var book, applier, requests, permits, users;
    requests = {
      admin: {},
      kris: {}
    };
    permits = {};
    users = {};
    before(function(){
      book = new Book('a book');
      requests.admin.readBook = {
        user: {
          role: 'admin'
        },
        action: 'read',
        subject: book,
        ctx: {
          area: 'visitor'
        }
      };
      users.kris = createUser.kris();
      return requests.kris.readPaper = {
        user: users.kris,
        action: 'read',
        subject: 'paper',
        ctx: {
          area: 'visitor'
        }
      };
    });
    return describe('Rules application', function(){
      return describe('static rules application', function(){
        beforeEach(function(){
          var applier;
          Permit.registry.clean();
          permits.guest = createPermit.guest();
          permits.guest.debugOn();
          applier = permits.guest.applier();
          applier.debugOn();
          permits.guest.init();
          applier.apply('static', true);
          return console.log(permits.guest.repo().canRules());
        });
        return specify('registers a read-any rule (using default)', function(){
          return expect(permits.guest.canRules()['read']).to.eql(['*']);
        });
      });
    });
  });
}).call(this);
