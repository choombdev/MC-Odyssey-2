// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed

  onEvent('fluid.tags', event => {
    event.add('minecraft:water', 'kubejs:choombium_liquid')
    event.add('minecraft:water', 'kubejs:flowing_choombium_liquid')
  
    event.add('minecraft:lava', 'kubejs:super_fuel')
    event.add('minecraft:lava', 'kubejs:flowing_super_fuel')
  
    event.add('minecraft:lava', 'kubejs:energized_draconium')
    event.add('minecraft:lava', 'kubejs:flowing_energized_draconium')
  })

  onEvent('recipes', event => {
    // Creating Choombium Liquid
    event.recipes.createMixing(Fluid.of("kubejs:choombium_liquid", 500), [
    "kubejs:choomburgert2"
    ]).superheated();

    // Creating Super Fuel
  event.recipes.createMixing(Fluid.of("kubejs:super_fuel", 50), 
    [
      Fluid.of("mekanismgenerators:fusion_fuel", 200),
      Fluid.of("mekanism:superheated_sodium", 300), 
      Fluid.of("kubejs:choombium_liquid", 500)
    ]
    ).superheated()
    
    // Creating Energized Draconium
    event.recipes.createMixing(Fluid.of("kubejs:energized_draconium", 50), [
      Fluid.of("kubejs:super_fuel", 500),
      "draconicevolution:draconium_dust",
      "draconicevolution:draconium_dust",
      "draconicevolution:draconium_dust",
      "draconicevolution:draconium_dust"
    ]).superheated()
  })