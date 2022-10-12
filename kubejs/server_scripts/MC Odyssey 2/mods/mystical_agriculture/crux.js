// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
  event.remove({output:'mysticalagradditions:nether_star_crux'})
  event.remove({output:'mysticalagradditions:dragon_egg_crux'})

  event.shaped('mysticalagradditions:nether_star_crux', [
    'ENE',
    'WFW',
    'ENE'
  ],{
    E: 'mysticalagradditions:insanium_block',
    N: 'forbidden_arcanus:dark_nether_star_block',
    F: 'xreliquary:witherless_rose',
    W: 'mysticalagradditions:withering_soul'
  })

  event.shaped('mysticalagradditions:dragon_egg_crux', [
    'ENE',
    'WFW',
    'ENE'
    ],{
      E: 'mysticalagradditions:insanium_block',
      N: 'iceandfire:dragonsteel_fire_ingot',
      F: 'gobber2:gobber2_block_end',
      W: 'mysticalagradditions:dragon_scale'})
})
