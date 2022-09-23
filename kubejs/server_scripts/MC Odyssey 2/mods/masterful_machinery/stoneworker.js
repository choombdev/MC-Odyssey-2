
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "stoneworker",
    "controllerId": "mb_stoneworker",
    "name": "Industrial Stone Worker",
      "layout": [
        [
          "))))) ",
          ")   ) ",
          ")   * ",
          ")   ) ",
          "))+))C"
        ],
        [
          ",   , ",
          "      ",
          "  -   ",
          "      ",
          ",   , "
        ],
        [
          ")   ) ",
          "      ",
          "  .   ",
          "      ",
          ")   ) "
        ],
        [
          "///// ",
          "/000/ ",
          "/010/ ",
          "/000/ ",
          "///// "
        ],
        [
          "      ",
          "  2   ",
          " 212  ",
          "  2   ",
          "      "
        ],
        [
          "      ",
          "      ",
          "  3   ",
          "      ",
          "      "
        ],
        [
          "      ",
          "      ",
          "      ",
          "      ",
          "      "
        ]
      ],
      "legend": {
        "0": {
          "block": "minecraft:smooth_stone"
        },
        "1": {
          "block": "cyclic:battery"
        },
        "2": {
          "block": "thermal:dynamo_stirling"
        },
        "3": {
          "block": "masterfulmachinery:mb_stoneworker_energy_port_energy_input"
        },
        ")": {
          "block": "minecraft:stone_bricks"
        },
        "*": {
          "block": "masterfulmachinery:mb_stoneworker_items_port_items_output"
        },
        "+": {
          "block": "masterfulmachinery:mb_stoneworker_items_port_items_input"
        },
        ",": {
          "block": "minecraft:chiseled_stone_bricks"
        },
        "-": {
          "block": "minecraft:cauldron"
        },
        ".": {
          "block": "minecraft:oak_fence"
        },
        "/": {
          "block": "minecraft:smooth_stone_slab"
        }
      }
})
// Function
function StoneworkerRecipe(time, energy, input1, input2, input3, output1 , qteOut) {
  e.custom(
    {
      "type": "masterfulmachinery:machine_process",
      "structureId": "stoneworker", 
      "controllerId": "mb_stoneworker",
      "ticks": time,
      "inputs": [
          {
            "type": "masterfulmachinery:energy",
              "data": {
                "amount": energy
              }},
          {
          "type": "masterfulmachinery:items",
          "consumeInstantly": false,
          "data":{
            "item": input1,
            "count": 1}},
            {
              "type": "masterfulmachinery:items",
              "consumeInstantly": false,
              "data":{
                "item": input2,
                "count": 1}},
                {
                  "type": "masterfulmachinery:items",
                  "consumeInstantly": false,
                  "data":{
                    "item": input3,
                    "count": 1}}
          ],
  "outputs":[
    {
      "type": "masterfulmachinery:items",
    "data": {
      "item": output1,
      "count": qteOut
    }
  }
  ]
})}
// Recipes
StoneworkerRecipe(150, 150, 'minecraft:coal', 'minecraft:stone', 'minecraft:white_dye','astralsorcery:marble_raw', 5)
StoneworkerRecipe(100, 100, 'emendatusenigmatica:bitumen_gem', 'minecraft:stone', 'minecraft:white_dye', 'astralsorcery:marble_raw', 2)
StoneworkerRecipe(200, 300, 'minecraft:coal', 'minecraft:stone', 'minecraft:black_dye', 'minecraft:blackstone', 3)
StoneworkerRecipe(150, 250, 'emendatusenigmatica:bitumen_gem', 'minecraft:stone', 'minecraft:black_dye', 'minecraft:blackstone', 1)

// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_stoneworker_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: '#forge:tools/diamond'
  })


  event.shaped("masterfulmachinery:mb_stoneworker_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: '#forge:tools/diamond'
  })

  event.shaped("masterfulmachinery:mb_stoneworker_items_port_items_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_output',
    D: '#forge:tools/diamond'
  })
  event.shaped('masterfulmachinery:mb_stoneworker_controller', [
    'XBX',
    'BOB',
    'XAX'
    ], {
    
    X: 'minecraft:obsidian', 
    A: 'thermal:drill_head',
    B: 'emendatusenigmatica:emerald_plate',
    O: 'cyclic:miner'
  })
  })
})