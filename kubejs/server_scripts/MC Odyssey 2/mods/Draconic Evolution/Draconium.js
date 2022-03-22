// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

  event.recipes.createMechanicalCrafting('draconicevolution:draconium_dust', [
    'CCCCC',
    'CPIPC',
    'CPRPC',
    'CPIPC',
    'CCCCC'
  ], {
    C: 'powah:crystal_blazing',
    P: 'emendatusenigmatica:cobalt_dust',
    R: 'eidolon:pewter_ingot',
    I: 'minecraft:end_stone'
  })
  event.recipes.createMixing('draconicevolution:draconium_ingot', [
    'draconicevolution:draconium_dust',
    'draconicevolution:draconium_dust',
    'mysticalagradditions:insanium_gemstone',
    'mysticalagradditions:insanium_gemstone',
    'minecraft:end_crystal',
    'minecraft:end_crystal',
    'botania:gaia_ingot',
    'botania:gaia_ingot',
    'botania:gaia_ingot',
    'botania:gaia_ingot',
    'gobber2:gobber2_ingot_nether']).superheated()

    // Missing Awakened recipes
    event.shapeless('9x draconicevolution:awakened_draconium_ingot', ['draconicevolution:awakened_draconium_block'])
    event.shaped('draconicevolution:awakened_draconium_ingot', [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'draconicevolution:awakened_draconium_nugget'
    })

})

