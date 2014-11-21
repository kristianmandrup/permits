Move to matcher/permit mixin

```ls
  permit-matcher: (access-request) ->
    new PermitMatcher @, access-request, @debugging

  @enable-match = ->
    @match-enabled = true

  @disable-match = ->
    @match-enabled = false

  # See if this permit should apply (be used) for the given access request
  # By default @match-enabled is undefined which means false ie. disabled
  match: (access-request)->
    @permit-matcher(access-request).match! if @match-enabled

```

Move to Rule applier permit mixin

```ls
  applier: (ar) ->
    new PermitApplier @, ar, @debugging

  apply-rules: (access-request) ->
    @applier(access-request).apply 'dynamic'
```