// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
    // Mining Dimension
    event.remove({output: 'mining_dimension:teleporter'})   
    event.shaped('mining_dimension:teleporter', [
      'XXX',
      'XAX',
      'XXX'
    ], {
      A: 'minecraft:nether_star',
      X: 'compressium:cobblestone_2'

    })
// Quantum Quarry
    event.remove({output:'quantumquarryplus:quantum_quarry_plus'})
    event.shaped('quantumquarryplus:quantum_quarry_plus', [
        'ANA',
        'ESE',
        'ANA'
        ],{
         N: 'quantumquarryplus:endercell',
         E: 'minecraft:netherite_block',
         A: 'quantumquarryplus:quarry_framw',
         S: 'extendedcrafting:nether_star_block'
        }) 
// RF Tools Dimensions
event.remove({output:'rftoolsdim:dimension_builder'})
event.shaped('rftoolsdim:dimension_builder', [
'INI',
'ECE',
'INI'
],{
 I: 'mysticalagradditions:insanium_block',
 N: 'extendedcrafting:nether_star_block',
 C: 'draconicevolution:awakened_core',
 E: 'emendatusenigmatica:enderium_block' 
}) 
})