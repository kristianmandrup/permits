// Generated by LiveScript 1.2.0
(function(){
  var PermitContainer, expect;
  require('../../test_setup');
  PermitContainer = require('../../../').permit.container.PermitContainer;
  expect = require('chai').expect;
  describe('PermitContainer', function(){
    var permits, containers;
    permits = {};
    containers = {};
    before(function(){});
    describe('create container', function(){
      context('no name', function(){
        return specify('must have a name', function(){
          return expect(function(){
            return new PermitContainer;
          }).to['throw'];
        });
      });
      context('has name', function(){
        return specify('fine - description is optional', function(){
          expect(function(){
            return new PermitContainer('xyz');
          }).to.not['throw'];
          return new PermitContainer('xyz').name.should.eql('xyz');
        });
      });
      return context('has name and description', function(){
        return specify('.description set', function(){
          return new PermitContainer('xyz', 'my desc').description.should.eql('my desc');
        });
      });
    });
    return context('named container', function(){
      var permit, container, pname, cname, createContainer;
      createContainer = function(name, desc){
        return new PermitContainer(name, desc);
      };
      before(function(){
        pname = 'my permit';
        cname = 'my container';
        permit = {
          name: pname
        };
        return container = createContainer(cname, 'my desc');
      });
      describe('add', function(){
        return specify('adds permit to repo key for name of permit', function(){
          return container.add(permit).repo[pname].should.eql(permit);
        });
      });
      describe('remove', function(){
        specify('removes existing key', function(){
          var res;
          container.add(permit);
          res = container.remove(pname);
          return expect(res.repo[pname]).to.eql(void 8);
        });
        return specify('removes non-existing key fails', function(){
          container.add(permit);
          expect(function(){
            return container.remove('blip');
          }).to['throw'];
          return expect(container.repo[pname]).to.not.eql(void 8);
        });
      });
      describe('activate', function(){
        beforeEach(function(){
          return container.activate();
        });
        specify('activates container', function(){
          return expect(container.active).to.be['true'];
        });
        return specify('adds itself to active containers', function(){
          return PermitContainer.activeContainers[cname].should.equal(container);
        });
      });
      describe('deactivate', function(){
        beforeEach(function(){
          return container.deactivate();
        });
        specify('activates container', function(){
          return expect(container.active).to.be['false'];
        });
        return specify('adds itself to active containers', function(){
          return expect(PermitContainer.activeContainers[cname]).to.eql(void 8);
        });
      });
      return context('activated 2 containers', function(){
        beforeEach(function(){
          container.activate();
          return createContainer('x', 'y').activate();
        });
        describe('active-containers-permits', function(){
          return specify('returns list w 2 elems', function(){
            return expect(PermitContainer.activeContainersList().length).to.equal(2);
          });
        });
        return describe('has-any', function(){
          return specify('yes', function(){
            return expect(PermitContainer.hasAny()).to.be['true'];
          });
        });
      });
    });
  });
}).call(this);