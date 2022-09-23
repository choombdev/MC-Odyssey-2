
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "solaractivator",
    "controllerId": "mb_solaractivator",
    "name": "Simulated Sun Chamber",
      "layout": [
        [
          "C)) ",
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
          "))))"
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
          "block": "masterfulmachinery:mb_solaractivator_fluids_port_mekanism_gas_input"
        },
        "+": {
          "block": "masterfulmachinery:mb_solaractivator_fluids_port_mekanism_gas_output"
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
        }
      }
    })

// Function
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

// Recipes
NeuronRecipe(10, 500 ,'mekanism:lithium',10 , 'mekanismgenerators:tritium', 10)
NeuronRecipe(50, 95 ,'mekanism:nuclear_waste',10 , 'mekanism:polonium', 1)



// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_solaractivator_fluids_port_mekanism_gas_input", [
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

  event.shaped("masterfulmachinery:mb_solaractivator_fluids_port_mekanism_gas_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'mekanism:basic_chemical_tank',
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