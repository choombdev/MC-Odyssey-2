// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Item Pipes
    event.remove({output:'refinedpipes:advanced_item_pipe'})
    event.remove({output:'refinedpipes:improved_item_pipe'})
    event.remove({output:'refinedpipes:basic_item_pipe'})
    event.shaped('refinedpipes:basic_item_pipe', [
      'AAA',
      'SSS',
      'AAA'
    ], {
      S: 'minecraft:glass',
      A: 'emendatusenigmatica:steel_ingot'
    })
      event.shaped('refinedpipes:improved_item_pipe', [
        'AAA',
        'SSS',
        'AAA'
      ], {
        S: 'minecraft:glass',
        A: 'emendatusenigmatica:invar_ingot'
      })
      event.shaped('refinedpipes:advanced_item_pipe', [
        'AAA',
        'SSS',
        'AAA'
      ], {
        S: 'minecraft:glass',
        A: 'emendatusenigmatica:signalum_ingot'
      })
// Energy Pipes
      event.remove({output:'refinedpipes:basic_energy_pipe'})
      event.remove({output:'refinedpipes:improved_energy_pipe'})
      event.remove({output:'refinedpipes:advanced_energy_pipe'})
      event.remove({output:'refinedpipes:elite_energy_pipe'})
      event.remove({output:'refinedpipes:ultimate_energy_pipe'})

      event.shaped('refinedpipes:basic_energy_pipe', [
        'AAA',
        'SFS',
        'AAA'
      ], {
        S: 'minecraft:glass',
        A: 'emendatusenigmatica:steel_ingot',
        F: 'minecraft:redstone_block'
      })
        event.shaped('refinedpipes:improved_energy_pipe', [
          'AAA',
          'SFS',
          'AAA'
        ], {
          S: 'minecraft:glass',
          A: 'emendatusenigmatica:invar_ingot',
          F: 'refinedpipes:basic_energy_pipe'
        })
        event.shaped('refinedpipes:advanced_energy_pipe', [
          'AAA',
          'SFS',
          'AAA'
        ], {
          S: 'minecraft:glass',
          A: 'emendatusenigmatica:electrum_ingot',
          F: 'refinedpipes:improved_energy_pipe'
        })
        event.shaped('refinedpipes:elite_energy_pipe', [
            'AAA',
            'SFS',
            'AAA'
          ], {
            S: 'minecraft:glass',
            A: 'emendatusenigmatica:signalum_ingot',
            F: 'refinedpipes:advanced_energy_pipe'
          })
        event.shaped('refinedpipes:ultimate_energy_pipe', [
            'AAA',
            'SFS',
            'AAA'
          ], {
            S: 'minecraft:glass',
            A: 'emendatusenigmatica:enderium_ingot',
            F: 'refinedpipes:elite_energy_pipe'
          })
// Fluid Pipes
event.remove({output:'refinedpipes:basic_fluid_pipe'})
event.remove({output:'refinedpipes:improved_fluid_pipe'})
event.remove({output:'refinedpipes:advanced_fluid_pipe'})
event.remove({output:'refinedpipes:elite_fluid_pipe'})
event.remove({output:'refinedpipes:ultimate_fluid_pipe'})

event.shaped('refinedpipes:basic_fluid_pipe', [
  'AAA',
  'SFS',
  'AAA'
], {
  S: 'minecraft:glass',
  A: 'emendatusenigmatica:steel_ingot',
  F: 'minecraft:bucket'
})
  event.shaped('refinedpipes:improved_fluid_pipe', [
    'AAA',
    'SFS',
    'AAA'
  ], {
    S: 'minecraft:glass',
    A: 'emendatusenigmatica:invar_ingot',
    F: 'refinedpipes:basic_fluid_pipe'
  })
  event.shaped('refinedpipes:advanced_fluid_pipe', [
    'AAA',
    'SFS',
    'AAA'
  ], {
    S: 'minecraft:glass',
    A: 'emendatusenigmatica:electrum_ingot',
    F: 'refinedpipes:improved_fluid_pipe'
  })
  event.shaped('refinedpipes:elite_fluid_pipe', [
      'AAA',
      'SFS',
      'AAA'
    ], {
      S: 'minecraft:glass',
      A: 'emendatusenigmatica:signalum_ingot',
      F: 'refinedpipes:advanced_fluid_pipe'
    })
  event.shaped('refinedpipes:ultimate_fluid_pipe', [
      'AAA',
      'SFS',
      'AAA'
    ], {
      S: 'minecraft:glass',
      A: 'emendatusenigmatica:enderium_ingot',
      F: 'refinedpipes:elite_fluid_pipe'
    })

    // Fluid Pipes
event.remove({output:'refinedpipes:basic_extractor_attachment'})
event.remove({output:'refinedpipes:improved_extractor_attachment'})
event.remove({output:'refinedpipes:advanced_extractor_attachment'})
event.remove({output:'refinedpipes:elite_extractor_attachment'})
event.remove({output:'refinedpipes:ultimate_extractor_attachment'})

event.shaped('refinedpipes:basic_extractor_attachment', [
  'AAA',
  'SFS',
  'AAA'
], {
  S: 'minecraft:glass',
  A: 'emendatusenigmatica:steel_ingot',
  F: 'minecraft:piston'
})
  event.shaped('refinedpipes:improved_extractor_attachment', [
    'AAA',
    'SFS',
    'AAA'
  ], {
    S: 'minecraft:glass',
    A: 'emendatusenigmatica:invar_ingot',
    F: 'refinedpipes:basic_extractor_attachment'
  })
  event.shaped('refinedpipes:advanced_extractor_attachment', [
    'AAA',
    'SFS',
    'AAA'
  ], {
    S: 'minecraft:glass',
    A: 'emendatusenigmatica:electrum_ingot',
    F: 'refinedpipes:improved_extractor_attachment'
  })
  event.shaped('refinedpipes:elite_extractor_attachment', [
      'AAA',
      'SFS',
      'AAA'
    ], {
      S: 'minecraft:glass',
      A: 'emendatusenigmatica:signalum_ingot',
      F: 'refinedpipes:advanced_extractor_attachment'
    })
  event.shaped('refinedpipes:ultimate_extractor_attachment', [
      'AAA',
      'SFS',
      'AAA'
    ], {
      S: 'minecraft:glass',
      A: 'emendatusenigmatica:enderium_ingot',
      F: 'refinedpipes:elite_extractor_attachment'
    })
    })
