
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

// Craftable Globettes
event.shaped('gobber2:gobber2_globette',[
    'ZSZ',
    'ASA',
    'ZSZ'
  ], {
    S: 'botania:mana_diamond',
    A: 'create:chromatic_compound',
    Z: 'minecraft:netherite_ingot',
  })
  event.shaped('gobber2:gobber2_globette_nether',[
    'ZSZ',
    'ASA',
    'ZSZ'
  ], {
    S: 'progressivebosses:nether_star_fragment', 
    A: 'silentgear:blaze_gold_ingot',
    Z: 'create:chromatic_compound',
  })
  event.shaped('gobber2:gobber2_globette_end',[
    'ZSZ',
    'ASA',
    'ZSZ'
  ], {
    S: 'minecraft:end_crystal',
    A: 'mysticalagradditions:dragon_scale',
    Z: 'create:shadow_steel',
  })
})

console.info('- - - Finished Loading Gobber - - -')