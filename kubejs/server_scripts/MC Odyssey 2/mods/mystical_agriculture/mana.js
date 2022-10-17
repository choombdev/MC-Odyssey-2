// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
      event.shaped('4x emendatusenigmatica:arcane_gem', [
        ' Q ',
        'QQQ',
        'Q Q'
      ], {
        Q: 'mysticalagriculture:mana_essence'
      }) 
      event.shaped('4x elementalcraft:inertcrystal', [
        ' Q ',
        'QQQ',
        '   '
      ], {
        Q: 'mysticalagriculture:mana_essence'
      }) 
      event.shaped('2x mana-and-artifice:vinteum_ingot', [
        'III',
        'QQQ',
        'III'
      ], {
        Q: 'mysticalagriculture:mana_essence', 
        I: 'mysticalagriculture:iron_essence'
      }) 
      event.shaped('4x mana-and-artifice:vinteum_dust', [
        '  ',
        'QQQ',
        'Q  '
      ], {
        Q: 'mysticalagriculture:mana_essence'
      }) 

      event.shaped('4x forbidden_arcanus:arcane_crystal', [
        '  Q',
        'QQQ',
        '   '
      ], {
        Q: 'mysticalagriculture:mana_essence'
      }) 
})
