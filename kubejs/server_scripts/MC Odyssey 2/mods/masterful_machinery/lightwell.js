
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "lightwellmachine",
    "controllerId": "mb_well",
    "name": "Simulated Moon Chamber",
      "layout": [
        [
          ")*))",
          "C)))",
          "+)))",
          "),))"
        ],
        [
          ")--)",
          ")..-",
          ")..-",
          ")--)"
        ],
        [
          "))))",
          ")//)",
          ")//)",
          "))))"
        ]
      ],
      "legend": {
        ")": {
          "block": "mekanism:steel_casing"
        },
        "*": {
          "block": "masterfulmachinery:mb_well_energy_port_energy_input"
        },
        "+": {
          "block": "masterfulmachinery:mb_well_items_port_items_input"
        },
        ",": {
          "block": "masterfulmachinery:mb_well_fluids_port_fluids_output"
        },
        "-": {
          "block": "astralsorcery:black_marble_arch"
        },
        ".": {
          "block": "cyclic:tank"
        },
        "/": {
          "block": "cyclic:dark_glass"
        }
      }
    })



// Function
function WellRecipe(time, energy, itemin, qtein, fluidout, qteOut) {
  e.custom(
    {
      "type": "masterfulmachinery:machine_process",
      "structureId": "solaractivator", 
      "controllerId": "mb_solaractivator",
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
            "item": itemin,
            "count": qtein
          }}],
  "outputs":[
    {
      "type": "masterfulmachinery:fluids",
    "data": {
      "fluid": fluidout,
      "amount": qteOut
    }
  }
  ]
})}

// Recipes
WellRecipe(600, 5000 ,'astralsorcery:aquamarine', 1 , 'astralsorcery:liquid_starlight', 1000)
})


// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_well_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'astralsorcery:aquamarine'
  })


  event.shaped("masterfulmachinery:mb_well_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'astralsorcery:aquamarine'
  })

  event.shaped("masterfulmachinery:mb_well_fluids_port_fluids_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'industrialforegoing:common_black_hole_tank',
    D: 'astralsorcery:aquamarine'
})
event.shaped('masterfulmachinery:mb_well_controller', [
  'XAX',
  'AOA',
  'XAX'
  ], {
  
  X: 'astralsorcery:well', 
  A: 'industrialforegoing:simple_black_hole_tank', 
  O: 'xreliquary:crimson_cloth'
})

})
