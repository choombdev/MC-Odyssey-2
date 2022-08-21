// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.


onEvent('recipes', event =>{

  event.recipes.mekanismCrushing('farmersdelight:minced_beef', 'minecraft:beef')
  event.recipes.mekanismCrushing('farmersdelight:bacon', 'minecraft:porkchop')

  event.shaped('kubejs:choomburgert1', [
    'SSS',
    'ABA',
    'SSS'
  ], {
    S: 'pamhc2foodcore:toastitem',
    A: 'pamhc2foodcore:cheeseitem',
    B: 'farmersdelight:beef_patty'
  })

  event.shapeless('kubejs:choomburgert2', ['kubejs:choomburgert1', 'kubejs:choomburgert1'])

  event.shaped('kubejs:choomburgert3', [
    'ABA',
    'YXZ',
    'ACA'
  ], {
    X: 'kubejs:choomburgert2',
    A: 'farmersdelight:cooked_bacon',
    B: 'pamhc2crops:lettuceitem',
    C: 'minecraft:netherite_ingot',
    Y: 'minecraft:brown_mushroom',
    Z: 'pamhc2foodcore:mayonaiseitem'
  })


  
  event.shaped('kubejs:choomburgert4', [
    'YYY',
    'YXY',
    'YYY'
  ], {
    X: 'kubejs:choomburgert3',
    Y: 'minecraft:nether_star'
  })

})

