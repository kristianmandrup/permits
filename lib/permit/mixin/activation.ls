module.exports =
  auto-activate: true

  activate: ->
    @active = true
    @register! if @register

  deactivate: ->
    @active = false
    @unregister! if @unregister
