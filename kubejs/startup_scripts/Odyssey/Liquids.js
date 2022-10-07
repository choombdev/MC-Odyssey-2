// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed

onEvent('fluid.registry', event => {

  event.create('choombium_liquid')
  .textureStill('kubejs:block/choombium_liquid_still')
  .textureFlowing('kubejs:block/choombium_liquid_flow')
  .bucketColor(0x450101)
  .displayName('Choombium Liquid')

  event.create('super_fuel')
  .textureStill('kubejs:block/super_fuel_still')
  .textureFlowing('kubejs:block/super_fuel_flow')
  .bucketColor(0x915F6D)
  .displayName('Super Fuel')

  event.create('energized_draconium')
  .textureStill('kubejs:block/energized_draconium_still')
  .textureFlowing('kubejs:block/energized_draconium_flow')
  .bucketColor(0x5D3FD3)
  .displayName('Energized Draconium Liquid'); 


})