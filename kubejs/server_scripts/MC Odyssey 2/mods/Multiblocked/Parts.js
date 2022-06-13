// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

  onEvent('recipes', event =>{
    event.shaped('mbd:fluxgen', [
      'SXS',
      'ABA',
      'SXS'
    ], {
      X: 'fluxnetworks:flux_block',
      A: 'mekanism:enriched_refined_obsidian' ,
      B: 'mekanism:steel_casing',
      S: 'emendatusenigmatica:steel_ingot'
    })
    event.shaped('mbd:lavagen', [
      'SXS ',
      'ABA',
      'SXS'
    ], {
      X: 'mekanism:basic_thermodynamic_conductor',
      A: 'mekanism:resistive_heater' ,
      B: 'minecraft:lava_bucket',
      S: 'emendatusenigmatica:steel_ingot'
    })
    event.shaped('mbd:energy', [
      'ASA',
      'XXX',
      'ASA'
    ], {
      X: 'mekanism:energy_tablet',
      A: 'emendatusenigmatica:signalum_ingot',
      S: 'emendatusenigmatica:steel_ingot'
    })
    event.shaped('mbd:cookeria', [
      ' B ',
      'XXX',
      'SAS'
    ], {
      X: 'minecraft:grindstone',
      A: 'farmersdelight:stove' ,
      B: 'cookingforblockheads:crafting_book',
      S: 'emendatusenigmatica:steel_ingot'
    })

    event.recipes.createMechanicalCrafting('mbd:draconium', [
      'AEFEA',
      'EFHFE',
      'AEFEA'
      ], {
      A: 'forbidden_arcanus:dark_nether_star_block',
      E: 'iceandfire:dragonsteel_lightning_block',
      F: 'emendatusenigmatica:enderium_block',
      H: 'mysticalagradditions:insanium_gemstone_block'
      
    })
})

