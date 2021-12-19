
// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Gobber - -')


onEvent('recipes', event => {


  event.remove({output: 'minecraft:nether_wart_block'})

  event.remove({output: 'gobber2:gobber2_ingot'})

event.shaped('gobber2:gobber2_ingot', [
    'ASA',
    'ZXZ',
    'ASA'
  ], {
    S: 'emendatusenigmatica:signalum_plate',
    A: 'emendatusenigmatica:diamond_plate',
    Z: 'emendatusenigmatica:iridium_plate',
    X: 'gobber2:gobber2_globette'
  })
})

console.info('- - - Finished Loading Gobber - - -')