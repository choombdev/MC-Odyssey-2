
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "choombiumgenerator",
    "controllerId": "mb_choombium",
    "name": "Choombium Manufacturer",
      "layout": [
        [
          ")   )",
          " *** ",
          " **+ ",
          " *** ",
          " ,*C ",
          " *** ",
          " **- ",
          " *** ",
          ")   )"
        ],
        [
          ")   )",
          " *** ",
          " *.* ",
          " *.* ",
          " *.* ",
          " *.* ",
          " *.* ",
          " *** ",
          ")   )"
        ],
        [
          ")   )",
          " *** ",
          " * * ",
          " * * ",
          " * * ",
          " * * ",
          " * * ",
          " *** ",
          ")   )"
        ],
        [
          ")   )",
          " *** ",
          " */* ",
          " *0* ",
          " */* ",
          " *0* ",
          " */* ",
          " *** ",
          ")   )"
        ],
        [
          ")))))",
          ")   )",
          ")   )",
          ") 0 )",
          ")   )",
          ") 0 )",
          ")   )",
          ")   )",
          ")))))"
        ]
      ],
      "legend": {
        "0": {
          "block": "immersiveengineering:fluid_pump"
        },
        ")": {
          "block": "minecraft:white_concrete"
        },
        "*": {
          "block": "minecraft:red_concrete"
        },
        "+": {
          "block": "masterfulmachinery:mb_choombium_items_port_items_output"
        },
        ",": {
          "block": "masterfulmachinery:mb_choombium_energy_port_energy_input"
        },
        "-": {
          "block": "masterfulmachinery:mb_choombium_items_port_items_input"
        },
        ".": {
          "block": "mob_grinding_utils:entity_conveyor"
        },
        "/": {
          "block": "minecraft:dropper"
        }
      }
    })
// Recipe
// [ , ]
e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "choombiumgenerator",
  "controllerId": "mb_choombium",
  "ticks": 500,
  "inputs": [
      {
          "type": "masterfulmachinery:energy",
          "data":{
              "amount" : 1500
          }
      },
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": 'kubejs:choomburgert2',
              "count": 1
          }},
          {
            "type": "masterfulmachinery:items",
            "data":{
                "item": 'emendatusenigmatica:signalum_ingot',
                "count": 1
            }
      }
  ],
  "outputs":[
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": 'kubejs:choombium_ingot',
              "count": 1
          }
      }
  ]
})
})


// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_choombium_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'minecraft:beef'
  })


  event.shaped("masterfulmachinery:mb_choombium_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'minecraft:beef'
  })

  event.shaped("masterfulmachinery:mb_choombium_items_port_items_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_output',
    D: 'minecraft:beef'
  })

  event.shaped('masterfulmachinery:mb_choombium_controller', [
    'XBX',
    'BOB',
    'XAX'
    ], {
    
    X: 'mekanism:block_refined_obsidian', 
    A: 'tconstruct:tinker_station',
    B: 'minecraft:netherite_ingot',
    O: 'kubejs:choombium_ingot'
  })
  })
    