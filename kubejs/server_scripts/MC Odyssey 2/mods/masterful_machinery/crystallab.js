
// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
events.listen('recipes', function (e) {
    // Structure
      e.custom({
      "type": "masterfulmachinery:machine_structure",
      "id": "crystallab",
      "controllerId": "mb_crystal",
      "name": "Rock Crystal Lab",
      "layout": [
        [
          "))))) ",
          "))))* ",
          "))))) ",
          ")))))C",
          "))))) ",
          ")))), ",
          "))-)) "
        ],
        [
          "  .   ",
          " ///  ",
          " /0/  ",
          ".     ",
          "  1   ",
          "  2   ",
          "  .   "
        ],
        [
          "33.   ",
          "3///  ",
          "3/0/  ",
          ".     ",
          "3     ",
          "3     ",
          "33.   "
        ],
        [
          "  .   ",
          " ///  ",
          " /0/  ",
          ".     ",
          "  4   ",
          "      ",
          "  .   "
        ],
        [
          "  .   ",
          " 5/5  ",
          " 545  ",
          ". 4   ",
          "  4   ",
          "      ",
          "  .   "
        ],
        [
          "  3   ",
          "  3   ",
          "  3   ",
          "333   ",
          "  3   ",
          "  3   ",
          "  3   "
        ]
      ],
      "legend": {
        ")": {
          "block": "quark:polished_marble"
        },
        "*": {
          "block": "masterfulmachinery:mb_crystal_items_port_items_output"
        },
        ",": {
          "block": "masterfulmachinery:mb_crystal_items_port_items_input"
        },
        "-": {
          "block": "masterfulmachinery:mb_crystal_energy_port_energy_input"
        },
        ".": {
          "block": "astralsorcery:infused_wood"
        },
        "/": {
          "block": "minecraft:iron_block"
        },
        "0": {
          "block": "create:fluid_tank"
        },
        "1": {
          "block": "astralsorcery:altar_discovery"
        },
        "2": {
          "block": "create:mechanical_arm"
        },
        "3": {
          "block": "astralsorcery:infused_wood_slab"
        },
        "4": {
          "block": "create:fluid_pipe"
        },
        "5": {
          "block": "astralsorcery:well"
        }
      }
    })  
  // Recipe
  
  e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "crystallab",
    "controllerId": "mb_crystal",
    "ticks": 150,
    "inputs": [
        {
            "type": "masterfulmachinery:energy",
            "data":{
                "amount" : 750
            }
        },
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": 'envirocore:litherite_crystal',
                "count": 1
            }
        }
    ],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": 'astralsorcery:rock_crystal',
                "count": 1
            }
        }
    ]
  })
  })
  
  
  // Part Recipes
  onEvent('recipes', event => {
    event.shaped("masterfulmachinery:mb_crystal_items_port_items_input", [
      'XXX',
      'XAD',
      'XXX'
      ], {
      
      X: 'silents_mechanisms:redstone_alloy_ingot',
      A: 'advgenerators:item_input',
      D: 'astralsorcery:aquamarine'
    })
  
  
    event.shaped("masterfulmachinery:mb_crystal_energy_port_energy_input", [
      'XXX',
      'XAD',
      'XXX'
      ], {
      
      X: 'silents_mechanisms:redstone_alloy_ingot',
      A: 'advgenerators:power_capacitor_tier2',
      D: 'astralsorcery:aquamarine'
    })
  
    event.shaped("masterfulmachinery:mb_crystal_items_port_items_output", [
      'XXX',
      'XAD',
      'XXX'
      ], {
      
      X: 'silents_mechanisms:redstone_alloy_ingot',
      A: 'advgenerators:item_output',
      D: 'astralsorcery:aquamarine'
    })
  
    event.shaped('masterfulmachinery:mb_crystal_controller', [
      'XBX',
      'BOB',
      'XBX'
      ], {
      
      X: 'minecraft:netherite_ingot', 
      B: 'astralsorcery:aquamarine',
      O: 'astralsorcery:glass_lens'
    })
    })
      
