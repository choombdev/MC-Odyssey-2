// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading miningdimension - - -')

onEvent('recipes', event => {
    event.remove({output: 'mining_dimension:teleporter'})   
    event.shaped('mining_dimension:teleporter', [
      'XBX',
      'BAB',
      'XBX'
    ], {
      B: 'mininggadgets:upgrade_empty',
      A: 'minecraft:nether_star',
      X: 'compressium:cobblestone_5'
    })
  })
console.info('- - - Finished Loading miningdimension - - -')