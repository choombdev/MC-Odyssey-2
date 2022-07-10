// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {

event.remove({output:'lightmanscurrency:coinmint'})

  event.remove({id:'lightmanscurrency:trading_core'})
  event.shaped('lightmanscurrency:trading_core', [
    'SQS',
    'RCR',
    'SQS'
  ], {
    S: 'emendatusenigmatica:steel_ingot',
    Q: 'minecraft:quartz',
    R: 'extendedcrafting:redstone_ingot',
    C: 'mekanism:advanced_control_circuit'


  
  })
  event.remove({id:'lightmanscurrency:terminal'})
  event.shaped('lightmanscurrency:terminal', [
    'SPS',
    'COC',
    'SPS'
  ], {
    S: 'emendatusenigmatica:steel_ingot',
    O: 'computercraft:computer_normal',
    C: 'lightmanscurrency:trading_core',
    P: 'refinedstorage:advanced_processor'

  
  })
  event.remove({id:'lightmanscurrency:paygate'})
  event.shaped('lightmanscurrency:paygate', [
    'SSS',
    'SOS',
    'SSS'
  ], {
    S: 'emendatusenigmatica:steel_ingot',
    O: 'minecraft:repeater'
  
  })
  event.remove({id:'lightmanscurrency:cash_register'})
  event.shaped('lightmanscurrency:cash_register', [
    'SOS',
    'SOS',
    'SOS'
  ], {
    S: 'emendatusenigmatica:steel_ingot',
    O: 'minecraft:dispenser'
    })
  event.remove({id:'lightmanscurrency:atm'})
  event.shaped('lightmanscurrency:atm', [
    'SGS',
    'TOT',
    'SGS'
  ], {
    S: 'emendatusenigmatica:steel_ingot',
    O: 'metalbarrels:netherite_barrel',
    G: 'minecraft:glass_pane',
    T: 'lightmanscurrency:trading_core'
  })
})

