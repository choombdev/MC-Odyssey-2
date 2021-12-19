// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading creative - - -')
// Pre-req
onEvent('recipes', event => {
       event.remove({output:'extendedcrafting:black_iron_ingot'})
       event.shaped('extendedcrafting:black_iron_ingot', [
      'WCW',
      'CXC',
      'WCW'
    ], {
      W: 'emendatusenigmatica:enderium_ingot',
      C: 'quark:biotite',
      X: 'minecraft:iron_ingot'
    })
  })
// Creative in Normal Crafting Table
onEvent('recipes', event => {
      event.shaped('pipez:infinity_upgrade', [
        'YXY',
        'XAX',
        'YXY'
        ], {
        
        Y:'theabyss:unorithe_ingot',
        X:'pipez:ultimate_upgrade',
        A: 'xreliquary:witherless_rose'
      })
      event.shaped('mekanism:creative_chemical_tank', [
        ' X ',
        'XAX',
        ' X '
        ], {
        
        X: 'silents_mechanisms:empty_canister',
        A: 'mekanism:creative_fluid_tank'
      }) 
})
//Ancient Ingot Recipes
onEvent('recipes', event => {
event.recipes.createMechanicalCrafting('kubejs:ancientingot', [
  'ABXDA',
  'EXCXF',
  'AGXHA'
  ], {
  C: 'extendedcrafting:ultimate_singularity',
  X: 'envirocore:nanorite_boule',
  A: 'forbidden_arcanus:dark_nether_star_block',
  B: 'iceandfire:dragonsteel_fire_block',
  D: 'iceandfire:dragonsteel_ice_block',
  E: 'iceandfire:dragonsteel_lightning_block',
  F: 'emendatusenigmatica:enderium_block',
  G: 'twilightforest:fiery_block',
  H: 'mysticalagradditions:insanium_gemstone_block'
  
})
event.recipes.createMechanicalCrafting('kubejs:ancientarrow', [
  'DXD',
  'BAB',
  'CAC'
  ], {

  X: 'kubejs:ancientingot',
  A: 'forbidden_arcanus:dark_nether_star_block',
  B: 'iceandfire:dragonsteel_fire_block',
  C: 'gobber2:gobber2_ingot_end',
  D: 'minecraft:end_crystal'
  
})})

// All Creative Recipes:
onEvent('recipes', event => {
  // Creative Turbine Generator
  event.recipes.createMechanicalCrafting('bigreactors:basic_turbinecreativesteamgenerator', [
    'DABAD',
    'ECXCE',
    'DABAD'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'bigreactors:anglesite_crystal',
    B: 'bigreactors:benitoite_crystal',
    C: 'advgenerators:turbine_kit_tier5',
    D: 'bigreactors:blutonium_block',
    E: 'bigreactors:magentite_block'
    
  })
  event.recipes.createMechanicalCrafting('bigreactors:reinforced_turbinecreativesteamgenerator', [
    'AAAAA',
    'AAXAA',
    'AAAAA'
    ], {
  
    X: 'bigreactors:reinforced_turbinecreativesteamgenerator',
    A: 'bigreactors:reinforced_reactorcasing'
  })

  event.recipes.createMechanicalCrafting('refinedstorage:creative_controller', [
    'DABAD',
    'DCXCD',
    'DABAD'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'refinedstorage:controller',
    B: 'draconicevolution:awakened_core',
    C: 'appliedenergistics2:controller',
    D: 'extendedcrafting:ender_star'
    
  })

  event.recipes.createMechanicalCrafting('rats:rat_upgrade_creative', [
    'EDABADE',
    'EDCXCDE',
    'EDABADE'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'rats:rat_upgrade_beast_mount',
    B: 'rats:rat_upgrade_angel',
    C: 'rats:rat_upgrade_extreme_energy',
    D: 'rats:rat_upgrade_god',
    E: 'rats:cheese'
    
  })
  event.recipes.createMechanicalCrafting('rats:creative_cheese', [
    'AAAAA',
    'AAXAA',
    'AAAAA'
    ], {
  
    X: 'rats:rat_upgrade_creative',
    A: 'rats:cheese'
  })

  event.recipes.createMechanicalCrafting('iceandfire:creative_dragon_meal', [
    'AAAAA',
    'AAXAA',
    'AAAAA'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'iceandfire:dragon_meal'
  })

  event.recipes.createMechanicalCrafting('refinedstorage:creative_wireless_crafting_monitor', [
    'AAA',
    'AXA',
    'AAA'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'refinedstorage:wireless_crafting_monitor'
  })
  event.recipes.createMechanicalCrafting('refinedstorage:creative_wireless_grid', [
    'AAA',
    'AXA',
    'AAA'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'refinedstorage:wireless_grid'
  })
  event.recipes.createMechanicalCrafting('refinedstorage:creative_wireless_fluid_grid', [
    'AAA',
    'AXA',
    'AAA'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'refinedstorage:wireless_fluid_grid'
  })

  event.recipes.createMechanicalCrafting('refinedstorage:creative_portable_grid', [
    'AAA',
    'AXA',
    'AAA'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'refinedstorage:portable_grid'
  })

  event.recipes.createMechanicalCrafting('mekanism:creative_fluid_tank', [
    'EDABADE',
    'EDCXCDE',
    'EDABADE'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'mekanism:ultimate_fluid_tank',
    B: 'dimstorage:dimensional_tank',
    C: 'fluidtank:tank_silver',
    D: 'industrialforegoing:supreme_black_hole_tank',
    E: 'pedestals:coin/fluidtank',
    
  })

  event.recipes.createMechanicalCrafting('thermal:rf_coil_creative_augment', [
    'HEDABADEH',
    'FEDCXCDEF',
    'HEDABADEH'
    ], {
  
    X: 'kubejs:ancientingot',
    A: 'thermal:dynamo_stirling',
    B: 'thermal:dynamo_magmatic',
    C: 'solarflux:sp_de.chaotic',
    D: 'thermal:dynamo_lapidary',
    E: 'mekanismgenerators:gas_burning_generator',
    F: 'mekanismgenerators:advanced_solar_generator',
    H: 'mekanismgenerators:heat_generator'
    
  })
  event.recipes.createMechanicalCrafting('thermal:rf_coil_creative_augment', [
    'XXX',
    'XAX',
    'XXX'
    ], {
  
    X: 'minecraft:iron_ingot',
    A: 'thermal:machine_efficiency_creative_augment'
  })

  event.recipes.createMechanicalCrafting('thermal:machine_efficiency_creative_augment', [
    'XXX',
    'XAX',
    'XXX'
    ], {
  
    X: 'minecraft:iron_ingot',
    A: 'thermal:machine_efficiency_creative_augment'
  })

  event.recipes.createMechanicalCrafting(Item.of('ironjetpacks:creative_jetpack', '{Throttle:1.0d}'), [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'thermal:rf_coil_creative_augment',
    X:'draconicevolution:draconium_ingot',
    A: Item.of('ironjetpacks:emerald_jetpack', '{Throttle:1.0d}')
  })

  event.recipes.createMechanicalCrafting(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'), [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'thermal:rf_coil_creative_augment',
    X:'draconicevolution:draconium_ingot',
    A: 'mekanism:ultimate_energy_cube'
  })

  event.recipes.createMechanicalCrafting('exchangers:creative_exchanger', [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'thermal:rf_coil_creative_augment',
    X:'draconicevolution:draconium_ingot',
    A:'exchangers:ultimate_exchanger'
  })

  event.recipes.createMechanicalCrafting('storagedrawers:creative_vending_upgrade', [
    'YABXCAY',
    'YDXOXEY',
    'YACXFAY'
    ], {
      X: 'kubejs:ancientingot',
      A: Item.of('dankstorage:dank_7', '{inv:{}}'),
      B: 'ae2extras:16m_fluid_storage_cell',
      C: 'compactmachines:machine_maximum',
      D: 'extradisks:infinite_storage_block',
      E: 'extradisks:infinite_fluid_storage_block',
      F: 'ae2extras:16m_storage_cell',
      Y: 'industrialagriculture:bag_tier_six',
      O: 'mekanism:qio_drive_supermassive'
  })

  event.recipes.createMechanicalCrafting('appliedenergistics2:creative_storage_cell', [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'storagedrawers:creative_vending_upgrade',
    X:'draconicevolution:draconium_ingot',
    A:'appliedenergistics2:empty_storage_cell'
  })
  event.recipes.createMechanicalCrafting('refinedstorage:creative_storage_block', [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'storagedrawers:creative_vending_upgrade',
    X:'draconicevolution:draconium_ingot',
    A:'refinedstorage:1k_storage_block'
  })
  event.recipes.createMechanicalCrafting('refinedstorage:creative_fluid_storage_block', [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'mekanism:creative_fluid_tank',
    X:'draconicevolution:draconium_ingot',
    A:'refinedstorage:64k_fluid_storage_block'
  })
  event.recipes.createMechanicalCrafting('refinedstorage:creative_fluid_storage_block', [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'kubejs:ancientingot',
    X:'draconicevolution:draconium_ingot',
    A:'refinedstorage:64k_fluid_storage_block'
  })
  event.recipes.createMechanicalCrafting(Item.of('tconstruct:creative_slot', '{slot:"abilities"}'), [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'kubejs:ancientingot',
    X:'draconicevolution:draconium_ingot',
    A:'minecraft:nether_star'
  })
  event.recipes.createMechanicalCrafting(Item.of('tconstruct:creative_slot', '{slot:"upgrades"}'), [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'kubejs:ancientingot',
    X:'draconicevolution:draconium_ingot',
    A:'minecraft:anvil'
  })
  event.recipes.createMechanicalCrafting(Item.of('tconstruct:creative_slot', '{slot:"armor"}'), [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'kubejs:ancientingot',
    X:'draconicevolution:draconium_ingot',
    A:Item.of('minecraft:netherite_chestplate', '{Damage:0}')
  })
  event.recipes.createMechanicalCrafting(Item.of('tconstruct:creative_slot', '{slot:"souls"}'), [
    'XXXX',
    'XAYX',
    'XXXX'
    ], {
  
    Y:'kubejs:ancientingot',
    X:'draconicevolution:draconium_ingot',
    A:'minecraft:emerald'
  })

  event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
    'XXYYYXX',
    'XCWFZCX',
    'XXYYYXX',
    '    XCX',
    '    XCX',
    '    XCX',
    ], {
  
      W: 'exchangers:mekanism_exchanger_core_tier3',
      F: 'kubejs:ancientingot',
      Z: 'appliedenergistics2:fluix_pearl',
      C: 'create:shadow_steel',
      X: 'botania:manasteel_ingot',
      Y: 'botania:terrasteel_ingot'
  })
  event.recipes.createMechanicalCrafting(Item.of('ars_nouveau:creative_spell_book'), [
    'XZZX',
    'FAYF',
    'XZZX'
    ], {
  
    Y:'kubejs:ancientingot',
    X:'gobber2:gobber2_ingot_end',
    A:Item.of('ars_nouveau:archmage_spell_book'),
    F:'ars_nouveau:wixie_shards',
    Z:'botania:terrasteel_ingot'
  })

  event.recipes.createMechanicalCrafting('mowziesmobs:earth_talisman', [
    'XZZX',
    'FAYF',
    'XZZX'
    ], {
  
    Y: 'draconicevolution:wyvern_core',
    X: 'mysticalagradditions:dragon_egg_crux',
    A: 'mysticalagradditions:insanium_gemstone',
    F: 'forbidden_arcanus:dark_nether_star', 
    Z: 'mana-and-artifice:greater_mote_earth',
  })



  event.recipes.createMechanicalCrafting('create:creative_motor', [
    'BYB',
    'BAF',
    'BYB'
    ], {
  
    A: 'mekanism:creative_energy_cube',
    B: 'create:refined_radiance',
    Y: 'create:shadow_steel',
    F: 'create:flywheel'
  })

  event.recipes.createMechanicalCrafting('pneumaticcraft:creative_compressor', [
    'BYB',
    'FAF',
    'BYB'
    ], {
  
    A: 'kubejs:ancientingot',
    B: 'pneumaticcraft:huge_tank',
    Y: 'pneumaticcraft:vortex_tube',
    F: 'pneumaticcraft:advanced_air_compressor'
  })

  event.recipes.createMechanicalCrafting('mysticalagriculture:creative_soulium_dagger', [
    'BYB',
    'XAZ',
    'BYB'
    ], {
  
    A: 'kubejs:ancientingot',
    B: 'botania:elementium_block',
    X: Item.of('botania:terra_sword', '{Damage:0}'),
    Y: 'mysticaladaptations:insanium_sword',
    Z: Item.of('mysticalagriculture:hostile_soulium_dagger', '{Damage:0}'),
    F: 'pneumaticcraft:advanced_air_compressor'
  })


  event.recipes.createMechanicalCrafting('botania:creative_pool', [
    'BYB',
    'XAX',
    'BYB'
    ], {
  
    A: 'kubejs:ancientingot',
    B: 'botania:terrasteel_block',
    X: 'botania:black_lotus', 
    Y: 'botania:gaia_ingot'
  })
})

console.info('- - - Finished Loading creative - - -')

