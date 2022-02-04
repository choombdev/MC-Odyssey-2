// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading QualityOfLife- - -')


onEvent('recipes', event => {

// Akashic Tome
event.remove({id:'akashictome:tome'})
event.shapeless(Item.of('akashictome:tome', '{"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},resourcefulbees:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"resourcefulbees:fifty_shades_of_bees"}},astralsorcery:{id:"astralsorcery:tome",Count:1b},immersiveengineering:{id:"immersiveengineering:manual",Count:1b},mana-and-artifice:{id:"mana-and-artifice:guide_book",Count:1b},alexsmobs:{ForgeCaps:{"dungeons_libraries:built_in_enchantments":{BuiltInEnchantments:[]}},id:"alexsmobs:animal_dictionary",Count:1b},woot:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"woot:wootguide"}},elementalcraft:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"elementalcraft:element_book"}},silentgear:{id:"silentgear:guide_book",Count:1b},botania:{id:"botania:lexicon",Count:1b},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"thermal:guidebook"}},essentials:{id:"essentials:guide_book",Count:1b,tag:{"patchouli:book":"essentials:manual"}},storagenetwork:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"storagenetwork:network_book"}},integratedtunnels:{id:"integrateddynamics:on_the_dynamics_of_integration",Count:1b},powah:{id:"powah:book",Count:1b},pneumaticcraft:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"pneumaticcraft:book"}},simpleplanes:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"simpleplanes:planes_book"}},mahoutsukai:{id:"mahoutsukai:guidebook",Count:1b},occultism:{ForgeCaps:{"dungeons_libraries:built_in_enchantments":{BuiltInEnchantments:[]}},id:"occultism:dictionary_of_spirits",Count:1b},ars_nouveau:{id:"ars_nouveau:worn_notebook",Count:1b},bloodmagic:{ForgeCaps:{"dungeons_libraries:built_in_enchantments":{BuiltInEnchantments:[]}},id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"bloodmagic:guide"}},twilightforest:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"twilightforest:guide"}},supplementaries:{ForgeCaps:{"dungeons_libraries:built_in_enchantments":{BuiltInEnchantments:[]}},id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"supplementaries:supplementaries_guide"}},cyclic:{id:"patchouli:guide_book",Count:1b,tag:{"patchouli:book":"cyclic:cyclic_guide_book"}}}}'), ['3x minecraft:book'])

//Charging
event.recipes.mekanismEnriching('emendatusenigmatica:charged_certus_quartz_gem','emendatusenigmatica:certus_quartz_gem')
event.recipes.mekanismEnriching('appliedenergistics2:charged_certus_quartz_crystal', 'appliedenergistics2:certus_quartz_crystal')

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

  event.shapeless('3x progressivebosses:nether_star_shard', ['minecraft:nether_star'])

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