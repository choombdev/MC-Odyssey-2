// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading server/choomburgers - - -')
  

onEvent('recipes', event =>{

  event.recipes.mekanismCrushing('farmersdelight:minced_beef', 'minecraft:beef')
  event.recipes.mekanismCrushing('farmersdelight:bacon', 'minecraft:porkchop')

  event.shaped('kubejs:choomburgert1', [
    'SSS',
    'ABA',
    'SSS'
  ], {
    S: 'pamhc2foodcore:toastitem',
    A: 'rats:cheese',
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
    C: 'kubejs:choombium_ingot',
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


console.info('- - - Finished Loading server/choomburgers - - -')

