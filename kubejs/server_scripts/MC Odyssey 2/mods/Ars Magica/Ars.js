// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Started Loading Ars - - -')
onEvent('recipes', event => {
    event.remove({output:'emendatusenigmatica:arcane_block'})
    event.shaped('ars_nouveau:mana_gem_block', [
        'SSS',
        'SSS',
        'SSS'
      ], {
        S: 'emendatusenigmatica:arcane_gem'
      })
})
console.info('- - - Finished Loading Ars - - -')