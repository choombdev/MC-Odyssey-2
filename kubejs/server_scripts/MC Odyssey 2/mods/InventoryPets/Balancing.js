// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Illuminati Pet
event.remove({output:Item.of('inventorypets:pet_illuminati')})
event.recipes.createMechanicalCrafting(Item.of('inventorypets:pet_illuminati'), [
    '  X  ',
    ' XAX ',
    'XXXXX'
    ], {
  
    X: 'mysticalagradditions:dragon_egg_crux',
    A: 'kubejs:ancientingot'
  })
// Meta Pet
event.remove({output:Item.of('inventorypets:pet_meta')})
event.recipes.createMechanicalCrafting(Item.of('inventorypets:pet_meta'), [
    'XXX',
    'XAX',
    'XXX'
    ], {
  
    X: 'mysticalagradditions:dragon_egg_crux',
    A: 'kubejs:ancientingot'
  })
    })
