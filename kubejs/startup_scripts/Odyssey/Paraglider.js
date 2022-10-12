// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('item.modification', event => {
  event.modify('paragliders:paraglider', tier => {
    tier.Ingredient('minecraft:leather')
  })
})