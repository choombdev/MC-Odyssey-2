// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
  // Create
  event.recipes.createMixing('mysticalagriculture:gaia_spirit_essence', [
    'botania:gaia_pylon',
    'botania:gaia_pylon',
    'mysticalagriculture:soulium_gemstone_block',
    'mysticalagriculture:soulium_gemstone_block',
    'xreliquary:witherless_rose'
  ]).superheated()

})
