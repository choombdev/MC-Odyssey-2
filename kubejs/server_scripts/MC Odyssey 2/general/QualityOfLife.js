// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading QualityOfLife- - -')


onEvent('recipes', event => {


// Cracked Stone
event.shapeless('minecraft:cracked_stone_bricks', ['minecraft:stone_bricks','#forge:pickaxes'])

// Wool Automation
event.shapeless('minecraft:white_wool',['#thermal:rockwool', 'minecraft:string'])
// Smelting Dusts
event.smelting('emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:certus_quartz_dust' )


// Netherite Craftable
event.shapeless('minecraft:netherite_scrap', ['4x tconstruct:debris_nugget'])


// Tank to Empty
event.shapeless(Item.of('mekanism:creative_chemical_tank').ignoreNBT(), ['mekanism:creative_chemical_tank'])
event.shapeless(Item.of('mekanism:creative_fluid_tank').ignoreNBT(), ['mekanism:creative_fluid_tank'])

// Plates

  // Diamond
event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_plate', 'minecraft:diamond', 'immersiveengineering:mold_plate')
event.recipes.thermal.press('emendatusenigmatica:diamond_plate', 'minecraft:diamond')
event.recipes.createPressing('emendatusenigmatica:diamond_plate', 'minecraft:diamond')


// Easy Stick Recipe

event.shaped('16x minecraft:stick', [
    'S',
    'S'
  ], {
    S: '#minecraft:logs'
  })


// Easy Hopper Recipe

event.shaped('minecraft:hopper', [
    'SAS',
    'SAS',
    ' S '
  ], {
    S: 'minecraft:iron_ingot',
    A: '#minecraft:logs'
  })


// Iron Brick Recipe
event.shapeless('mysticalworld:iron_brick', ['4x minecraft:iron_nugget'])



})



console.info('- - - Finished Loading QualityOfLife - - -')