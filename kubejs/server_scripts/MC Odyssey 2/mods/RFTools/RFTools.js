// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading RFTools - - -')

onEvent('recipes', event => {
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
console.info('- - - Finished Loading RFTools - - -')