
events.listen('recipes', function (e) {

  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "mechanicalcrucible",
    "controllerId": "mb_lava",
    "name": "Mechanical Crucible",
      "layout": [
        [
          ")C)",
          ")))",
          "+),"
        ],
        [
          "   ",
          "-.-",
          ")))"
        ]
      ],
      "legend": {
        ")": {
          "block": "mekanism:superheating_element"
        },
        "+": {
          "block": "masterfulmachinery:mb_lava_energy_port_energy_input"
        },
        ",": {
          "block": "masterfulmachinery:mb_lava_items_port_items_input"
        },
        "-": {
          "block": "create:fluid_tank"
        },
        ".": {
          "block": "masterfulmachinery:mb_lava_fluids_port_fluids_output"
        }
      }
    })
// Parts

// Recipe

e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "mechanicalcrucible",
  "controllerId": "mb_lava",
  "ticks": 500,
  "inputs": [
      {
          "type": "masterfulmachinery:energy",
          "data":{
              "amount" : 150
          }
      },
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": "minecraft:cobblestone",
              "count": 64
          }
      }
  ],
  "outputs":[
    {
      "type": "masterfulmachinery:fluids",
    "data": {
      "fluid": "minecraft:lava",
      "amount": 500
    }
  }
  ]
})
})

// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_lava_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'minecraft:obsidian'
  })

  event.shaped("masterfulmachinery:mb_lava_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'minecraft:obsidian'
  })

  event.shaped("masterfulmachinery:mb_lava_fluids_port_fluids_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'industrialforegoing:common_black_hole_tank',
    D: 'minecraft:obsidian'
})
event.shaped('masterfulmachinery:mb_lava_controller', [
  'XBX',
  'BOB',
  'XAX'
  ], {
  
  X: 'minecraft:obsidian', 
  A: 'cyclic:anvil',
  B: 'minecraft:lava_bucket',
  O: 'mekanism:basic_control_circuit',
})


})
