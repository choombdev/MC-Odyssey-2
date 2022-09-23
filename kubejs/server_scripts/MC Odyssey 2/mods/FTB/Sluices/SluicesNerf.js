onEvent("recipes", (event) => {
  // Oak Sluice
    event.remove({id:'ftbsluice:oak_sluice'})
    event.shaped('ftbsluice:oak_sluice', [
        '  B',
        'SSQ',
        'BBB'
      ], {
        S: 'immersiveengineering:stick_treated',
        B: 'botania:glimmering_livingwood',
        Q: 'immersiveengineering:treated_wood_horizontal'
      })
  // Iron Sluice
    event.remove({id:'ftbsluice:iron_sluice'})
    event.shaped('ftbsluice:iron_sluice', [
        'IPI',
        'PSP',
        'IPI'
      ], {
        S: 'ftbsluice:oak_sluice',
        P: 'emendatusenigmatica:steel_plate',
        I: 'emendatusenigmatica:cast_iron_plate'
      })
  // Iron Sluice
  event.remove({id:'ftbsluice:diamond_sluice'})
  event.shaped('ftbsluice:diamond_sluice', [
      'IPI',
      'PSP',
      'IPI'
    ], {
      S: 'ftbsluice:iron_sluice',
      P: 'botania:mana_diamond',
      I: 'emendatusenigmatica:diamond_plate'
    })
  // Cloth Mesh
    event.remove({id:'ftbsluice:cloth_mesh'})
    event.shaped('ftbsluice:cloth_mesh', [
        'IPI',
        'PPP',
        'IPI'
      ], {
        P: 'botania:mana_string',
        I: 'immersiveengineering:stick_treated'
      })
  



  // Blaze Head
  event.shaped('tconstruct:blaze_head', [
  'BFB',
  'GMG',
  'BFB'
  ],{
    B: 'botania:blaze_block',
    F: 'ars_nouveau:blaze_fiber',
    G: 'silentgear:blaze_gold_block',
    M: 'xreliquary:molten_core'
  })
  // Blaze Mesh
event.remove({id:'ftbsluice:blazing_mesh'})
event.shaped('ftbsluice:blazing_mesh', [
  'DBD',
  'BCB',
  'DBD'], {
    D: 'draconicevolution:awakened_core',
    B: 'tconstruct:blaze_head',
    C: 'create:blaze_cake'
  })
})