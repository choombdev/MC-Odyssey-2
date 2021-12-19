
// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading CompactMachines - -')


onEvent('recipes', event => {

event.shaped(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'), [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'compactmachines:wall',
    A:  'minecraft:hopper'
  })

  event.shaped(Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:redstone_in"}}'), [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'compactmachines:wall',
    A: 'minecraft:repeater'
  })
})

console.info('- - - Finished Loading CompactMachines - - -')