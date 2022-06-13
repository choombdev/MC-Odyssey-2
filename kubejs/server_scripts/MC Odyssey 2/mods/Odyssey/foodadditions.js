// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.


onEvent('recipes', event =>{

  event.shaped('kubejs:choomburittoc', [
    'SSD',
    'BCA',
    'BSS'
  ], {
    S: 'farmersdelight:wheat_dough',
    A: 'pamhc2foodcore:cheeseitem',
    B: 'pamhc2foodcore:groundchickenitem',
    C: 'pamhc2crops:lettuceitem',
    D: 'farmersdelight:tomato'

  })

  event.shaped('kubejs:choomburittob', [
    'SSD',
    'BCA',
    'BSS'
  ], {
    S: 'farmersdelight:wheat_dough',
    A: 'pamhc2foodcore:cheeseitem',
    B: 'pamhc2foodcore:groundbeefitem', 
    C: 'pamhc2crops:lettuceitem',
    D: 'farmersdelight:tomato'
  })

  event.shaped('kubejs:choomburittobe', [
    'SSA',
    'BCA',
    'ASS'
  ], {
    S: 'farmersdelight:wheat_dough',
    A: 'pamhc2crops:beanitem',
    B: 'farmersdelight:tomato',
    C: 'pamhc2crops:lettuceitem'
  })

  event.shaped('kubejs:nonepizza', [
    'BBS',
    'BBS',
    'BSS'
  ], {
    S: 'farmersdelight:wheat_dough',
    B: 'pamhc2foodcore:groundbeefitem'
  })

})
