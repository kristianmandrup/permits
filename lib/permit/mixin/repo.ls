module.exports =
  clean: ->
    @repo!.clean!
    @applier!.clean! if @applier

  can-rules: ->
    @repo!.can-rules!

  cannot-rules: ->
    @repo!.cannot-rules!

  repo: ->
    @_repo ||= new RuleRepo @name
