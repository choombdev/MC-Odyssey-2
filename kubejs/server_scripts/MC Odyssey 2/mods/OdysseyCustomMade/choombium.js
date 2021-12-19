// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Choombium - - -')
  


onEvent('recipes', event =>{
  //Smithing
  event.smithing('kubejs:choombium_helmet', 'minecraft:netherite_helmet', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_chestplate', 'minecraft:netherite_chestplate', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_leggings', 'minecraft:netherite_leggings', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_boots', 'minecraft:netherite_boots', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_blade', 'minecraft:netherite_sword', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_pickaxe', 'minecraft:netherite_pickaxe', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_axe', 'minecraft:netherite_axe', 'kubejs:choombium_ingot') 
  event.smithing('kubejs:choombium_shovel', 'minecraft:netherite_shovel', 'kubejs:choombium_ingot') 

  //Smelting Ore to Ingot
  event.smelting('kubejs:choombium_ingot', 'kubejs:choombium_ore')
  event.shaped('kubejs:choombium_block', [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: 'kubejs:choombium_ingot'
  })

  event.shapeless('9x kubejs:choombium_ingot', ['kubejs:choombium_block'])

  event.recipes.mekanismCombining('kubejs:choombium_ingot', 'kubejs:choomburgert3', 'minecraft:netherite_ingot')
})

console.info('- - - Finished Loading Choombium - - -')

