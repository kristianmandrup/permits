module.exports =
  _register: ->
    @debug 'register permit', @
    @registry!.register @

  _unregister: ->
    @registry!.unregister @

  registry: ->
    @_registry

