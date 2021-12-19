// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading tinkersconstruct - - -')
onEvent('recipes', event => {

  // New Ingot Cast
    event.shaped('thermal:chiller_ingot_cast', [
      ' A ',
      'ASA',
      ' A '
    ], {
      S: 'tconstruct:seared_brick',
      A: 'emendatusenigmatica:bronze_plate'
    })
    event.shaped('tconstruct:ingot_cast', [
      ' A ',
      'ASA',
      ' A '
    ], {
      S: 'tconstruct:seared_brick',
      A: 'emendatusenigmatica:gold_plate'
    })
    })
console.info('- - - Finished Loading tinkersconstruct - - -')
