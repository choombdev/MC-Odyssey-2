
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "draconiumportal",
    "controllerId": "mb_draconium",
    "name": "Draconium Portal",
    "layout": [
    [
      ")4  C)",
      "*),,)-",
      ").//.)"
    ],
    [
      ")    )",
      "01  1)",
      ")/22/)"
    ],
    [
      ")    )",
      "0,  ,0",
      ")/22/)"
    ],
    [
      ")    )",
      "01  10",
      ")/22/)"
    ],
    [
      ")    )",
      "01,,10",
      ")/22/)"
    ],
    [
      "))))))",
      ")3003)",
      ").//.)"
    ]
  ],
  "legend": {
    "0": {
      "block": "botania:elementium_block"
    },
    "1": {
      "block": "emendatusenigmatica:enderium_block"
    },
    "2": {
      "block": "twilightforest:carminite_block"
    },
    "3": {
      "block": "minecraft:beacon"
    },
    "4": {
        "block": "masterfulmachinery:mb_draconium_items_port_items_input"
    },
    ")": {
      "block": "minecraft:netherite_block"
    },
    "*": {
      "block": "masterfulmachinery:mb_draconium_items_port_items_output"
    },
    ",": {
      "block": "emendatusenigmatica:cobalt_block"
    },
    "-": {
      "block": "masterfulmachinery:mb_draconium_energy_port_energy_input"
    },
    ".": {
      "block": "mekanism:teleporter"
    },
    "/": {
      "block": "mekanism:teleporter_frame"
    }
  }
})

// Recipe

e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "draconiumportal",
  "controllerId": "mb_draconium",
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
