// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Tooltips - - -')

onEvent('item.tooltip', tooltip => {
  tooltip.add(['kubejs:ancientarrow'], 'Attempting to stab yourself with your arrow returns strange effects')
  tooltip.add(['kubejs:choombium_ore'], 'This ore spawns in the End only in very rare quantities.')
})
console.info('- - - Finished Loading Tooltips - - -')
