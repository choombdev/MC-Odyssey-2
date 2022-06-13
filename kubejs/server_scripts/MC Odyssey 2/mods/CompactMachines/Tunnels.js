
// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
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

