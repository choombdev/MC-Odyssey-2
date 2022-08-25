
events.listen('recipes', function (e) {
  // Structure
    e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "essencegenerator",
    "controllerId": "mb_essence",
    "name": "Mob Essence Extractor",
      "layout": [
        [
          "))*))",
          ")))))",
          "+)))C",
          ")))))",
          "))-))"
        ],
        [
          ")...)",
          "/   .",
          "/   .",
          "/   .",
          ")...)"
        ],
        [
          ")...)",
          "/   .",
          "/   .",
          "/   .",
          ")...)"
        ],
        [
          ")...)",
          "/   .",
          "/   .",
          "/   .",
          ")...)"
        ],
        [
          ")))))",
          ")))))",
          "))0))",
          ")))))",
          ")))))"
        ]
      ],
      "legend": {
        "0": {
          "block": "quark:grate"
        },
        ")": {
          "block": "emendatusenigmatica:steel_block"
        },
        "*": {
          "block": "masterfulmachinery:mb_essence_items_port_items_input"
        },
        "+": {
          "block": "masterfulmachinery:mb_essence_energy_port_energy_input"
        },
        "-": {
          "block": "masterfulmachinery:mb_essence_fluids_port_fluids_output"
        },
        ".": {
          "block": "mekanismgenerators:reactor_glass"
        },
        "/": {
          "block": "create:mechanical_drill"
        }
      }
    })


// Function
function EssenceRecipe(time, energy, input1, qteOut) {
  e.custom(
    {
      "type": "masterfulmachinery:machine_process",
      "structureId": "essencegenerator", 
      "controllerId": "mb_essence",
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
            "count": 1}}],
  "outputs":[
    {
      "type": "masterfulmachinery:fluids",
    "data": {
      "fluid": "industrialforegoing:essence",
      "amount": qteOut
    }
  }
  ]
})}

// Recipes
EssenceRecipe(300, 50,'minecraft:gunpowder',20)
EssenceRecipe(400, 100,'xreliquary:catalyzing_gland', 150)
EssenceRecipe(350, 70,'xreliquary:zombie_heart',100)
EssenceRecipe(320, 60,'minecraft:ender_pearl',50)
EssenceRecipe(250, 40,'minecraft:rotten_flesh', 15)
EssenceRecipe(200, 30,'minecraft:string',10)
EssenceRecipe(300, 50,'minecraft:spider_eye',20)
EssenceRecipe(300, 50,'minecraft:bone',20)
EssenceRecipe(400, 100,'xreliquary:nebulous_heart', 160)
EssenceRecipe(400, 100,'xreliquary:molten_core', 160)
EssenceRecipe(700, 250,'xreliquary:withered_rib', 270)
EssenceRecipe(1000, 300,'xreliquary:eye_of_the_storm', 300)
EssenceRecipe(300, 50,'xreliquary:squid_beak',10)
EssenceRecipe(300, 50,'xreliquary:bat_wing',15)
EssenceRecipe(350, 70,'xreliquary:rib_bone',100)
EssenceRecipe(350, 70,'xreliquary:chelicerae', 100)
EssenceRecipe(350, 70,'xreliquary:slime_pearl', 100)
})


// Part Recipes
onEvent('recipes', event => {
  event.shaped("masterfulmachinery:mb_essence_items_port_items_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:item_input',
    D: 'minecraft:ender_eye'
  })


  event.shaped("masterfulmachinery:mb_essence_energy_port_energy_input", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'advgenerators:power_capacitor_tier2',
    D: 'minecraft:ender_eye'
  })

  event.shaped("masterfulmachinery:mb_essence_fluids_port_fluids_output", [
    'XXX',
    'XAD',
    'XXX'
    ], {
    
    X: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'industrialforegoing:common_black_hole_tank',
    D: 'minecraft:ender_eye'
})
event.shaped('masterfulmachinery:mb_essence_controller', [
  'XAX',
  'AOA',
  'XAX'
  ], {
  
  X: 'tconstruct:scorched_bricks', 
  A: 'mob_grinding_utils:saw', 
  O:  'industrialforegoing:simple_black_hole_tank'
})

})
