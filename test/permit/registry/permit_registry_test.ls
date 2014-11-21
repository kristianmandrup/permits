require '../../test_setup'

permit          = require '../../../'
PermitRegistry  = permit.registry.PermitRegistry
Permit          = permit.Permit
create-permit   = require '../../factories' .create-permit

class Repo
  (@debug) ->

  can-rules: ->
    {}

  cannot-rules: ->
    {}

create-registry = (debug = false) ->
  new PermitRegistry debug

create-repo = (debug = false) ->
  new Repo debug

describe 'PermitRegistry' ->
  permits = {}

  describe 'create instance' ->
    specify 'should not throw error' ->
      ( -> create-registry! ).should.not.throw

  context 'an instance' ->
    var reg
    before ->
      reg := create-registry!

    describe 'initial state' ->
      describe 'permits' ->
        specify 'should be empty' ->
          reg.permits.should.eql {}

      describe 'permit-count' ->
        specify 'should be 0' ->
          reg.permit-count!.should.eql 0

    describe 'create a permit' ->
      before ->
        permits.guest = create-permit.guest!
        permits.guest.registry := create-registry!

      describe 'permits' ->
        specify 'should have guest permit' ->
          reg.permits['guest books'].should.eql permits.guest

      describe 'permit-count' ->
        specify 'should be 1' ->
          reg.permit-count!.should.eql 1


    context 'guest permit' ->
      before ->
        permits.guest = create-permit.guest!
        permits.guest.registry := create-registry!

      describe 'clean-all' ->
        context 'cleaned permits' ->
          counters = {}
          repos = {}

          before-each ->
            reg.clean!
            permits.guest = create-permit.guest!
            permits.repo  = create-repo!

            counters.old  := reg.permit-count!
            permits.old   := reg.permits
            repos.old     := permits.guest.repo!

            permits.guest.debug-on!
            permits.guest._registry = reg

          specify 'old repo is a RuleRepo' ->
            repos.old.constructor.should.eql RuleRepo

          describe 'permit-counter' ->
            specify 'should be reset' ->
              reg.permit-count!.should.not.eql counters.old

          describe 'permits' ->
            specify 'should change' ->
              reg.permits.should.not.eql permits.old


