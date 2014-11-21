Debugger        = require '../util'      .Debugger

mixin           = require '../mixin'
permit-mixin    = require './mixin'

Observable      = mixin.Observable

Activation      = permit-mixin.Activation
Registry        = permit-mixin.Registry
Repo            = permit-mixin.Repo

module.exports = class Permit implements Activation, Observable, Registry, Repo, Debugger
  # Registers a permit in the PermitRegistry by name
  # @name - String
  # @description -String

  (@name, @description = '', @debugging) ->
    @match-enabled      = false
    @activate! if @activate and @auto-activate
    @_register!
    @init!
    @

  # applies static rules
  # pre-compiles static rules that match
  init: ->
    @debug 'permit init'
    @applier!.apply 'static'
    @

  # default match: always true
  match: (access-request) ->
    true

  # default empty rules
  rules: ->
    {}

