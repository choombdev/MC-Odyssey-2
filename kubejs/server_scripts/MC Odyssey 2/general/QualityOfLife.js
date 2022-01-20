// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading QualityOfLife- - -')


onEvent('recipes', event => {


// Totem of Undying
event.shaped('minecraft:totem_of_undying', [
  'SCS',
  'ABA',
  'SCS'
], {
  S: 'envirocore:litherite_crystal',
  A: 'tconstruct:rose_gold_block',
  B: 'minecraft:enchanted_golden_apple',
  C: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}')
})
  // Craftable Elytra
  event.shaped('minecraft:elytra', [
    'SSS',
    'ABA',
    'A A'
  ], {
    S: 'minecraft:netherite_ingot',
    A: 'rats:dragon_wing',
    B: 'minecraft:nether_star'
  })


  // Shard

  event.shapeless('3x progressivebosses:nether_star_fragment', ['minecraft:nether_star'])

  // Ender Scales
  
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['forbidden_arcanus:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['mysticalagradditions:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['tconstruct:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['quark:dragon_scale'])

  event.shaped('forbidden_arcanus:dragon_scale', [
    'SS ',
    'S  '
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('tconstruct:dragon_scale', [
    ' SS',
    '  S'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('mysticalagradditions:dragon_scale', [
    'SSS',
    'S S'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('quark:dragon_scale', [
    '  S',
    ' SS'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })

// Animal Feed
event.remove({id:'essentials:animal_feed'})
event.shapeless('essentials:animal_feed', ['2x minecraft:carrot', 'minecraft:wheat_seeds'])

// Cracked Stone
event.shapeless('minecraft:cracked_stone_bricks', ['minecraft:stone_bricks','#forge:pickaxes'])

// Wool Automation
event.shapeless('minecraft:white_wool',['#thermal:rockwool', 'minecraft:string'])
// Smelting Dusts
event.smelting('emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:certus_quartz_dust' )

// Ender Dust
event.shapeless('emendatusenigmatica:ender_dust',['appliedenergistics2:ender_dust'])
event.shapeless('appliedenergistics2:ender_dust',['emendatusenigmatica:ender_dust'])

// Lead Ingots
event.shapeless('emendatusenigmatica:lead_ingot', ['eidolon:lead_ingot'])
event.shapeless('eidolon:lead_ingot', ['emendatusenigmatica:lead_ingot'])

// Chains
event.remove({output:'forbidden_arcanus:iron_chain'})
event.shapeless('3x forbidden_arcanus:iron_chain', ['minecraft:chain'])
event.shapeless('minecraft:chain', ['3x forbidden_arcanus:iron_chain'])
event.shaped('3x forbidden_arcanus:iron_chain', [
  '  S',
  ' I ',
  'S  '
], {
  I: '#forge:ingots/iron',
  S: '#forge:nuggets/iron'
})


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