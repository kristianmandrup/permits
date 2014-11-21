# Modular Design

Permit authorize has grown too big to manage as a single module.
It currently consists of several parts that would make sense as separate modules which could
be plugged in to create the authorization framework you like, with the complexity/size and feature
completeness that makes sense for each individual project. It should not be required to use the full library
with all the extensions such as permits, permit matching, JSON rules loading etc.

For many simple scenarios, it makes sense to use only the `RuleApplier` & `Registry`, perhaps using
`Ability` as a thin wrapper, much like the classical/simple Rails CanCan API.
This should also make it possible (even easy) to roll your own auth library using these building blocks...

For other more advanced scenarios, it makes sense to add more "bells & whistles" such as permits,
permit containers, rule loading and so on...

## The modules

These are some of the candidates:

- request-matcher
  - access-request
    - matcher
    - fingerprint
    - util

- allow-permission
  - allower
  - filter

- permits
  - permit-dsl (factory)
  - permit-registry
  ...

- permit-rules
  - rule-loader (from permit/rule/loader)
  - rule-cache
  ...

- permit-authorize (core)