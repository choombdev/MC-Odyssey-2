
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "gaia",
    "controllerId": "mb_gaia",
    "name": "Gaia Realm Portal",
      "layout": [
        [
          "C   ",
          "*++*",
          ",--."
        ],
        [
          "    ",
          "/  /",
          "-00-"
        ],
        [
          "1  1",
          "/  /",
          "-00-"
        ],
        [
          "    ",
          "/  /",
          "-00-"
        ],
        [
          "    ",
          "*++*",
          "2--3"
        ]
      ],
      "legend": {
        "0": {
          "block": "iceandfire:dragonsteel_fire_block"
        },
        "1": {
          "block": "minecraft:dragon_wall_head"
        },
        "2": {
          "block": "eidolon:pewter_block"
        },
        "3": {
          "block": "masterfulmachinery:mb_gaia_energy_port_energy_input"
        },
        "*": {
          "block": "botania:gaia_spreader"
        },
        "+": {
          "block": "botania:elementium_block"
        },
        ",": {
          "block": "masterfulmachinery:mb_gaia_items_port_items_input"
        },
        "-": {
          "block": "eidolon:arcane_gold_block"
        },
        ".": {
          "block": "masterfulmachinery:mb_gaia_items_port_items_output"
        },
        "/": {
          "block": "botania:terrasteel_block"
        }
      }
    })
// Recipe

e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "gaia",
  "controllerId": "mb_gaia",
  "ticks": 600,
  "inputs": [
      {
          "type": "masterfulmachinery:energy",
          "data":{
              "amount" : 2500
          }
      },
      {
        "type": "masterfulmachinery:items" ,
        "data":{
            "item": 'gobber2:gobber2_glob_nether',
            "count": 6
        }
    },
    {
      "type": "masterfulmachinery:items",
      "data":{
          "item": 'botania:rosa_arcana',
          "count": 1
      }
  }
  ],
  "outputs":[
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": 'botania:life_essence',
              "count": 1
          }
      }
  ]
})
})

// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_gaia_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'botania:mana_pearl'
  })

  event.shaped("masterfulmachinery:mb_gaia_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'botania:mana_pearl'
  })

  event.shaped("masterfulmachinery:mb_gaia_items_port_items_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_output',
    D: 'botania:mana_pearl'
})
event.shaped('masterfulmachinery:mb_gaia_controller', [
  'XAX',
  'BOB',
  'XAX'
  ], {
  
  X: 'botania:gaia_ingot',
  A: 'botania:gaia_pylon', 
  B: 'exchangers:exchanger_core_tier3',
  O: 'draconicevolution:draconium_dust'
})

})

