var assert = require('assert')
  , invariant = require('./index')


assert.throws(function(){
  invariant('module')(false, 'Error')
}, function(err){
  return err.message === '[module] Invariant Violation: Error'
})

assert.throws(function(){
  invariant('awesome')(false, 'Error')
}, function(err){
  return err.message === '[awesome] Invariant Violation: Error'
})

var i = invariant('scoped')

assert.throws(function(){
  i(false, 'Error')
}, function(err){
  return err.message === '[scoped] Invariant Violation: Error'
})

assert.doesNotThrow(function(){
  i(true, 'Error')
})