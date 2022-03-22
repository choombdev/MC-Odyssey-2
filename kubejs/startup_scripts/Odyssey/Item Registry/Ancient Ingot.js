// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Balancing- - -')

onEvent('item.registry', event => {
    event.create('ancientingot').displayName('Ancient Ingot').maxStackSize(16).tooltip("An Ancient Ingot from a Meteor dropped ages ago, touching it causes it to violently vibrate")
  })

console.info('- - - Finished Loading Balancing - - -')