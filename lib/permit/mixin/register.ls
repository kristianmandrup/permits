module.exports =
  _register: ->
    @debug 'register permit', @
    @registry!.register @

  _unregister: ->
    @registry!.unregister @

  # get a named permit
  @get = (name) ->
    @@registry.get name

  registry: ->
    @@registry

