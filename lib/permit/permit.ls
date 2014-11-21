Debugger        = require '../util'      .Debugger

mixin           = require '../mixin'
permit-mixin    = require './mixin'

Observable      = mixin.Observable

Activation      = permit-mixin.Activation
Register        = permit-mixin.Register
Repo            = permit-mixin.Repo

module.exports = class Permit implements Register, Activation, Repo, Observable, Debugger
  # Registers a permit in the PermitRegistry by name
  # @name - String
  # @description -String

  (@name, @opts) ->
    @opts ||= {}
    @match-enabled = false

    @debugging    = @opts.debug
    @description  = @opts.description || 'no description'
    @_repo         = @opts.repo
    @_registry     = @opts.registry
    @validate!

    @activate! if @activate and @auto-activate
    @init!
    @

  validate: ->

  # applies static rules
  # pre-compiles static rules that match
  init: ->
    @debug 'permit init'
    @applier!.apply 'static' if @applier
    @

  # default match: always true
  match: (access-request) ->
    true

  # default empty rules
  rules: ->
    {}

  _not-implemented: (fun) ->
    throw Error "Not implemented: #{fun}"