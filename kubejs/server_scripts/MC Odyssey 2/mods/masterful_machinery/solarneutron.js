// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed

events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "solaractivator",
    "controllerId": "mb_solaractivator",
    "name": "Simulated Sun Chamber",
      "layout": [
        [
          "C))E",
          "))))",
          "))))",
          "*))+"
        ],
        [
          "),,)",
          ",--,",
          ",--,",
          "),,)"
        ],
        [
          "),,)",
          ",--,",
          ",--,",
          "),,)"
        ],
        [
          "))))",
          ")..)",
          ")..)",
          "X)))"
        ],
        [
          "////",
          "/  /",
          "/  /",
          "////"
        ]
      ],
      "legend": {
        ")": {
          "block": "mekanism:steel_casing"
        },
        "*": {
          "block": "masterfulmachinery:mb_solaractivator_gas_port_mekanism_gas_input"
        },
        "+": {
          "block": "masterfulmachinery:mb_solaractivator_gas_port_mekanism_gas_output"
        },
        ",": {
          "block": "quark:blaze_lantern"
        },
        "-": {
          "block": "cyclic:tank"
        },
        ".": {
          "block": "forbidden_arcanus:arcane_glass"
        },
        "/": {
          "block": "mekanismgenerators:solar_generator"
        },
        "/": {
          "block": "mekanismgenerators:solar_generator"
        },
        "E": {
          "block": 'masterfulmachinery:mb_solaractivator_energy_port_energy_input'
        },
        "X": {
          "block": 'masterfulmachinery:mb_solaractivator_fluid_port_fluids_input'
        }
      }
    })

// Function
function NeuronGas(time, energy, fluidin, qtein, fluidout, qteOut) {
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
          "type": "masterfulmachinery:mekanism_gas",
          "consumeInstantly": false,
          "data":{
            "gas": fluidin,
            "amount": qtein
          }}],
  "outputs":[
    {
      "type": "masterfulmachinery:mekanism_gas",
    "data": {
      "gas": fluidout,
      "amount": qteOut
    }
  }
  ]
})}
function NeuronRecipe(time, energy, fluidin, qtein, fluidout, qteOut) {
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
          "type": "masterfulmachinery:fluids",
          "consumeInstantly": false,
          "data":{
            "fluid": fluidin,
            "amount": qtein
          }}],
  "outputs":[
    {
      "type": "masterfulmachinery:mekanism_gas",
    "data": {
      "gas": fluidout,
      "amount": qteOut
    }
  }
  ]
})}
// Recipes
NeuronGas(10, 500 ,'mekanism:lithium',10 , 'mekanismgenerators:tritium', 10)
NeuronRecipe(10, 750 ,'kubejs:energized_draconium', 50 , 'mekanism:polonium', 10)




// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_solaractivator_gas_port_mekanism_gas_input", [
    'XXX',
    'ADX',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'mekanism:basic_chemical_tank',
    D: 'mekanismgenerators:solar_generator'
  })


  event.shaped("masterfulmachinery:mb_solaractivator_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'mekanismgenerators:solar_generator'
  })

  event.shaped("masterfulmachinery:mb_solaractivator_gas_port_mekanism_gas_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'mekanism:elite_chemical_tank',
    D: 'mekanismgenerators:solar_generator'
})

event.shaped('masterfulmachinery:mb_solaractivator_fluid_port_fluids_input', [
  'XXX',
  'XAD',
  'XXX'
  ], {
  
  X: 'silents_mechanisms:redstone_alloy_ingot',
  A: 'industrialforegoing:pity_black_hole_unit',
  D: 'mekanismgenerators:solar_generator'
})
event.shaped('masterfulmachinery:mb_solaractivator_controller', [
  'XAX',
  'AOA',
  'XAX'
  ], {
  X: 'mekanism:solar_neutron_activator', 
  A: 'mekanism:hdpe_sheet',
  O: 'mekanism:ultimate_control_circuit'
})
})
})