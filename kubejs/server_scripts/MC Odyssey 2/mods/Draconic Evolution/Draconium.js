// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading custom_machinery - - -')

onEvent('recipes', event => {

  event.recipes.createMechanicalCrafting('draconicevolution:draconium_dust', [
    'CCCCC',
    'CPIPC',
    'CPRPC'
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
    'envirocore:kyronite_crystal',
    'envirocore:kyronite_crystal',
    'botania:terrasteel_ingot',
    'botania:terrasteel_ingot',
    'botania:terrasteel_ingot',
    'botania:terrasteel_ingot',
    'minecraft:netherite_ingot']).superheated()

    // Missing Awakened recipes
    event.shapeless('draconicevolution:awakened_draconium_block', ['draconicevolution:awakened_draconium_ingot'])
    event.shaped('draconicevolution:awakened_draconium_ingot', [
      'SSS',
      'SSS',
      'SSS'
    ], {
      S: 'draconicevolution:awakened_draconium_nugget'
    })

})

console.info('- - - Finished Loading custom_machinery - - -')

