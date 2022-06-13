// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
  
  
  event.remove({output:['powersuits:swim_assist','powersuits:invisibility','powersuits:mob_repulsor','powersuits:aqua_affinity', 'powersuits:parachute', 'powersuits:flight_control','powersuits:shock_absorber','powersuits:jetpack','powersuits:jet_boots','powersuits:climb_assist','powersuits:silk_touch']})
  event.shaped('powersuits:flight_control', [
        ' S ',
        'AXA',
        ' B '
      ], {
        X: 'mekanism:alloy_atomic',
        A: 'cyclic:charm_wing' ,
        B: Item.of('inventorypets:pet_cloud'),
        S: 'numina:component_parachute'
      })

event.shaped('powersuits:parachute', [
        'S',
        'A',
        'B'
      ], {
        S: 'numina:component_parachute', 
        A: 'cyclic:charm_wing',
        B: 'createaddition:copper_wire'
      })
event.shaped('powersuits:shock_absorber', [
    'S',
    'S'
  ], {
    S: '#minecraft:logs'
  })

event.shaped('powersuits:jetpack', [
        'ABA',
        'AYA',
        'XXX'
  ], {
    A:'emendatusenigmatica:electrum_plate',
    Y:'mekanism:jetpack',
    B:'mekanism:alloy_atomic',
    X:'numina:component_ion_thruster'
  })
event.shaped('powersuits:jet_boots', [
    'A A',
    'AYA',
    'X X'
  ], {
    A: 'emendatusenigmatica:enderium_plate',
    Y: 'mekanism:alloy_reinforced',
    X: 'numina:component_ion_thruster'
  })

event.shaped('powersuits:climb_assist', [
        'BSB',
        'BAB',
        'BSB'
      ], {
        A: Item.of('immersiveengineering:skyhook'),
        S: 'mekanism:alloy_infused',
        B: 'numina:component_wiring'  
      })
event.shaped('powersuits:silk_touch', [
    'BSB',
    'BAB',
    'BSB'
  ], {
    S: 'tconstruct:silky_cloth', 
    A: 'mysticalagriculture:prosperity_gemstone',
    B: 'numina:component_wiring'  
  })
event.shaped('powersuits:aqua_affinity', [
    'BSB',
    'BAB'
  ], {
    S: 'mekanism:scuba_tank', 
    A: 'mekanism:scuba_mask',
    B: 'numina:component_wiring'  
  })
  event.shaped('powersuits:mob_repulsor', [
        'BXC',
        'BXC',
        'BXC'
      ], {
         X: 'mob_grinding_utils:fan', 
         C: 'essentials:multi_piston',
         B: 'numina:component_wiring'  
      })
event.shaped('powersuits:invisibility', [
    'BBB',
    'BXB',
    'BBB'
  ], {
    X: 'botania:invisibility_cloak',
    B: 'emendatusenigmatica:electrum_plate'
  })
event.shaped('powersuits:swim_assist', [
    'BAB',
    'BSB',
    'BAB'
  ], {
    S: 'cyclic:flippers',
    A: 'createaddition:gold_wire',
    B: 'numina:component_wiring'  

  })
})
