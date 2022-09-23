
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "blazinblood",
    "controllerId": "mb_blaze",
    "name": "Blazin Blood Extractor",
      "layout": [
        [
          ")))))",
          ")***)",
          ")***)",
          ")***)",
          ")+C,)"
        ],
        [
          ")))))",
          ")   )",
          ") - )",
          ")   )",
          ")))))"
        ],
        [
          ")))))",
          ")   )",
          ") - )",
          ")   )",
          ")))))"
        ],
        [
          ")))))",
          ")   )",
          ") - )",
          ")   )",
          ")))))"
        ],
        [
          ")))))",
          ")))))",
          ")).))",
          ")))))",
          ")))))"
        ]
      ],
      "legend": {
        ")": {
          "block": "tconstruct:seared_bricks"
        },
        "*": {
          "block": "mekanism:superheating_element"
        },
        "+": {
          "block": "masterfulmachinery:mb_blaze_items_port_items_input"
        },
        ",": {
          "block": "masterfulmachinery:mb_blaze_fluids_port_fluids_output"
        },
        "-": {
          "block": "advgenerators:heating_chamber"
        },
        ".": {
          "block": "masterfulmachinery:mb_blaze_energy_port_energy_input"
        }
      }
    })


// Function
function blazerecipe(time, energy, input1, qteOut) {
  e.custom(
    {
      "type": "masterfulmachinery:machine_process",
      "structureId": "blazinblood", 
      "controllerId": "mb_blaze",
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
            "count": 16}}],
  "outputs":[
    {
      "type": "masterfulmachinery:fluids",
    "data": {
      "fluid": 'tconstruct:blazing_blood',
      "amount": qteOut
    }
  }
  ]
})}
// Recipes
blazerecipe(500, 1000,'minecraft:blaze_rod', 100)

})


// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_blaze_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'minecraft:blaze_rod'
  })


  event.shaped("masterfulmachinery:mb_blaze_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'minecraft:blaze_rod'
  })

  event.shaped("masterfulmachinery:mb_blaze_fluids_port_fluids_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'industrialforegoing:common_black_hole_tank',
    D: 'minecraft:blaze_rod'
})
event.shaped('masterfulmachinery:mb_blaze_controller', [
  'XAX',
  'AOA',
  'XAX'
  ], {
  
  X: 'tconstruct:scorched_bricks', 
  A: 'mekanism:advanced_fluid_tank', 
  O: 'tconstruct:blazing_blood_bucket'
})

})
