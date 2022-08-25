// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event =>{

  event.remove({id:'angelring:itemdiamondring'})
  event.shaped('angelring:itemdiamondring', [
    'BCB',
    'GRE',
    'NXN'
  ], {
    C: 'mysticalagriculture:soulium_gemstone',
    R: 'gobber2:gobber2_ring',
    B: 'minecraft:netherite_block',
    E: 'minecraft:elytra',
    G: 'bountifulbaubles:black_dragon_scale',
    X: 'xreliquary:witherless_rose',
    N: 'minecraft:nether_star'
  })

  event.remove({id:'angelring:leadstone_angel_ring'})
  event.shaped('angelring:leadstone_angel_ring', [
    'BCB',
    'GRG',
    'NXN'
  ], {
    C: 'mysticalagriculture:soulium_gemstone',
    R: 'angelring:itemdiamondring' ,
    B: 'emendatusenigmatica:lead_block',
    G: 'mekanismgenerators:reactor_glass',
    X: 'redstone_arsenal:flux_plating',
    N: 'minecraft:nether_star'
  })
  event.remove({id:'angelring:energetic_angel_ring'})
  event.shaped('angelring:energetic_angel_ring', [
    'BCB',
    'GRG',
    'NXN'
  ], {
    C: 'mysticalagriculture:soulium_gemstone',
    R: 'angelring:leadstone_angel_ring',
    B: 'emendatusenigmatica:electrum_block',
    G: 'thermal:lumium_glass',
    X: 'thermal:glowstone_bucket',
    N: 'minecraft:nether_star'
  })
  event.remove({id:'angelring:hardened_angel_ring'})
  event.shaped('angelring:hardened_angel_ring', [
    'BCB',
    'GRG',
    'NXN'
  ], {
    C: 'mysticalagriculture:soulium_gemstone',
    R: 'angelring:energetic_angel_ring', 
    B: 'emendatusenigmatica:invar_block',
    G: 'bigreactors:reinforced_reactorglass',
    X: 'mekanism:advanced_control_circuit',
    N: 'minecraft:nether_star'
  })
  event.remove({id:'angelring:reinforced_angel_ring'})
  event.shaped('angelring:reinforced_angel_ring', [
    'BCB',
    'GRG',
    'NXN'
  ], {
    C: 'mysticalagriculture:soulium_gemstone',
    R: 'angelring:hardened_angel_ring',
    B: 'emendatusenigmatica:signalum_block',
    G: 'thermal:obsidian_glass',
    X: 'mekanism:elite_control_circuit',
    N: 'minecraft:nether_star'
  })

  event.remove({id:'angelring:resonant_angel_ring'})
  event.shaped('angelring:resonant_angel_ring', [
    'BCB',
    'GRG',
    'NXN'
  ], {
    C: 'mysticalagriculture:soulium_gemstone',
    R: 'angelring:reinforced_angel_ring',
    B: 'emendatusenigmatica:enderium_block',
    G: 'thermal:enderium_glass',
    X: 'mekanism:ultimate_control_circuit',
    N: 'minecraft:nether_star'
  })
})
