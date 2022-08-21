
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
  "ticks": 200,
  "inputs": [
      {
          "type": "masterfulmachinery:energy",
          "data":{
              "amount" : 5000
          }
      },
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": "botania:gaia_ingot",
              "count": 4
          }
      },
      {
        "type": "masterfulmachinery:items",
        "data":{
            "item": "minecraft:nether_star",
            "count": 5
        }
    },
    {
      "type": "masterfulmachinery:items",
      "data":{
          "item": "forbidden_arcanus:end_crystal_gem",
          "count": 10
      }
  }
  ],
  "outputs":[
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": "draconicevolution:draconium_ingot",
              "count": 1
          }
      }
  ]
})
})
