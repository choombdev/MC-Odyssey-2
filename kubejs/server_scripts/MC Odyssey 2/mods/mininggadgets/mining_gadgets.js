// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading mining_gadgets - - -')

onEvent('recipes', event => {
    event.remove({output:'mininggadgets:mininggadget_simple'})
    event.remove({output:'mininggadgets:mininggadget_fancy'})
    event.remove({output:'mininggadgets:mininggadget'})
   
    event.shaped('mininggadgets:mininggadget_simple', [
      'CBI',
      'CGI',
      'CBI'
    ], {
      G: 'mininggadgets:upgrade_empty',
      B: 'mekanism:steam_bucket',
      I: 'emendatusenigmatica:invar_ingot',
      C: 'mekanism:basic_control_circuit'

    })
      event.shaped('mininggadgets:mininggadget_fancy', [
        'CBI',
        'CGI',
        'CBI'
      ], {
        G: 'mininggadgets:upgrade_empty',
        B: 'tconstruct:blazing_blood_bucket',
        I: 'emendatusenigmatica:signalum_ingot',
        C: 'mekanism:advanced_control_circuit'
  
      })
      event.shaped('mininggadgets:mininggadget', [
        'CBI',
        'CGI',
        'CBI'
      ], {
        G: 'mininggadgets:upgrade_empty',
        B: 'mekanismgenerators:fusion_fuel_bucket',
        I: 'emendatusenigmatica:enderium_ingot',
        C: 'mekanism:elite_control_circuit'
  
      })
    })

console.info('- - - Finished Loading mining_gadgets - - -')