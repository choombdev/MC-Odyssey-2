
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

// Recipe

e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "mechanicalcrucible",
  "controllerId": "mb_lava",
  "ticks": 60,
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