// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {

  // Witherless Rose Ingredients

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
    event.recipes.mekanismCombining('xreliquary:rib_bone', '64x minecraft:bone', 'mysticalagradditions:insanium_gemstone')
    event.recipes.mekanismCombining('xreliquary:slime_pearl', '16x industrialforegoing:pink_slime', 'mysticalagradditions:insanium_gemstone')
    event.recipes.mekanismCombining('xreliquary:catalyzing_gland', '64x mekanismadditions:obsidian_tnt', 'mysticalagradditions:insanium_gemstone')
    event.recipes.mekanismCombining('xreliquary:eye_of_the_storm', 'cyclic:lightning_scepter', 'mysticalagradditions:insanium_gemstone')
  })
  
  