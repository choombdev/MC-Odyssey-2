// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.


onEvent('recipes', event => {

  event.remove({id:"compressium:cobble_stone_1"})
  event.shapeless('compressium:cobblestone_1',  ['9x #forge:cobblestone'])

    event.shapeless('4x minecraft:cobblestone', ['#forge:cobblestone','#forge:cobblestone', '#forge:cobblestone',  '#forge:cobblestone'])
    event.shapeless('4x minecraft:stone', ['#forge:stone','#forge:stone','#forge:stone', '#forge:stone'])

    event.shapeless('appliedenergistics2:certus_quartz_crystal', ['emendatusenigmatica:certus_quartz_gem'])
    event.shapeless('emendatusenigmatica:certus_quartz_gem', ['appliedenergistics2:certus_quartz_crystal'])

    event.shapeless('appliedenergistics2:charged_certus_quartz_crystal', ['emendatusenigmatica:charged_certus_quartz_gem'])
    event.shapeless('emendatusenigmatica:charged_certus_quartz_gem', ['appliedenergistics2:charged_certus_quartz_crystal'])
    event.shapeless('emendatusenigmatica:fluix_gem', ['appliedenergistics2:fluix_crystal'])
    event.shapeless('appliedenergistics2:fluix_crystal', ['emendatusenigmatica:fluix_gem'])

    event.shapeless('emendatusenigmatica:iron_ore', ['minecraft:iron_ore'])
    event.shapeless('minecraft:iron_ore', [ 'emendatusenigmatica:iron_ore'])
    
    event.shapeless('refinedstorage:silicon', ['emendatusenigmatica:silicon_gem'])
    event.shapeless('appliedenergistics2:silicon', ['emendatusenigmatica:silicon_gem'])
    event.shapeless('emendatusenigmatica:silicon_gem',['appliedenergistics2:silicon'])
    event.shapeless('emendatusenigmatica:silicon_gem',['refinedstorage:silicon'])
    
    event.shapeless('emendatusenigmatica:ender_dust', ['appliedenergistics2:ender_dust'])
    event.shapeless('appliedenergistics2:ender_dust', ['emendatusenigmatica:ender_dust'])

    event.replaceOutput({},'emendatusenigmatica:enigmatic_hammer', 'immersiveengineering:hammer')
  // Ender Scale
  
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['forbidden_arcanus:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['mysticalagradditions:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['tconstruct:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['quark:dragon_scale'])
  event.shapeless('3x mysticalagriculture:dragon_egg_essence', ['bountifulbaubles:ender_dragon_scale'])

  event.shaped('bountifulbaubles:ender_dragon_scale', [
    '   ',
    'SSS',
    '   '
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })

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
    'SSS'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })
  event.shaped('quark:dragon_scale', [
    '  S',
    ' SS'
  ], {
    S: 'mysticalagriculture:dragon_egg_essence'
  })

})
