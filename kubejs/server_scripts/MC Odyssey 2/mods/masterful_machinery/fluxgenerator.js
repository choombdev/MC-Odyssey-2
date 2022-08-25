
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "fluxgenerator",
    "controllerId": "mb_flux",
    "name": "Flux Dust Generator",
    "layout": [
      [
        ")*)",
        ")+,",
        "),)"
      ],
      [
        "-.-",
        "/ C",
        "-,-"
      ],
      [
        "-.-",
        ", ,",
        "-,-"
      ],
      [
        ")))",
        ")0)",
        ")1)"
      ]
    ],
    "legend": {
      "0": {
        "block": "create:mechanical_press"
      },
      "1": {
        "block": "masterfulmachinery:mb_flux_energy_port_energy_input"
      },
      ")": {
        "block": 'fluxnetworks:flux_block'
      },
      "*": {
        "block": "masterfulmachinery:mb_flux_items_port_items_output"
      },
      "+": {
        "block": "minecraft:obsidian"
      },
      ",": {
        "block": "mekanism:block_refined_obsidian"
      },
      "-": {
        "block": "minecraft:stone_bricks"
      },
      ".": {
        "block": "minecraft:glass"
      },
      "/": {
        "block": "masterfulmachinery:mb_flux_items_port_items_input"
      }
    }
  })

// Recipe

e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "fluxgenerator",
  "controllerId": "mb_flux",
  "ticks": 50,
  "inputs": [
      {
          "type": "masterfulmachinery:energy",
          "data":{
              "amount" : 100
          }
      },
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": "minecraft:redstone",
              "count": 1
          }
      }
  ],
  "outputs":[
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": 'fluxnetworks:flux_dust',
              "count": 1
          }
      }
  ]
})
})


// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_flux_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'fluxnetworks:flux_dust'
  })


  event.shaped("masterfulmachinery:mb_flux_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'fluxnetworks:flux_dust'
  })

  event.shaped("masterfulmachinery:mb_flux_items_port_items_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_output',
    D: 'fluxnetworks:flux_dust'
  })

  event.shaped('masterfulmachinery:mb_flux_controller', [
    'XBX',
    'BOB',
    'XAX'
    ], {
    
    X: 'mekanism:block_refined_obsidian', 
    A: 'cyclic:anvil',
    B: 'mekanism:elite_control_circuit',
    O: 'fluxnetworks:flux_block'
  })
  })
    