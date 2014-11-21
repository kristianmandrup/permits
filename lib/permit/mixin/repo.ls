module.exports =
  clean: ->
    @repo!.clean!
    @applier!.clean!

  can-rules: ->
    @repo!.can-rules!

  cannot-rules: ->
    @repo!.cannot-rules!

  repo: ->
    @_repo ||= new RuleRepo @name
