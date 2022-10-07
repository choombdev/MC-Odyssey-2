// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// [, , , , , , ,  ,, ,  'emendatusenigmatica:enderium_ingot', 'mekanism:ultimate_control_circuit' 'mekanism:alloy_atomic'
    event.remove({id:"mekanism:controlcircuit/advanced"})
    event.remove({id:"mekanism:controlcircuit/elite"})
    event.remove({id:"mekanism:controlcircuit/ultimate"})
   
   
       event.shaped('mekanism:advanced_control_circuit', [
           'IGI',
           'ACA',
           'IGI'
           ],{
               C: 'mekanism:basic_control_circuit',
               A: 'mekanism:alloy_infused',
               I: 'emendatusenigmatica:invar_ingot',
               G: 'emendatusenigmatica:constantan_gear'
       })

       event.shaped('mekanism:elite_control_circuit', [
        'IGI',
        'ACA',
        'IGI'
        ],{
            C: 'mekanism:advanced_control_circuit',
            A: 'mekanism:alloy_reinforced',
            I: 'emendatusenigmatica:signalum_ingot',
            G: 'emendatusenigmatica:electrum_gear'
    })

    
    event.shaped('mekanism:ultimate_control_circuit', [
        'IGI',
        'ACA',
        'IGI'
        ],{
            C: 'mekanism:elite_control_circuit',
            A: 'mekanism:alloy_atomic',
            I: 'emendatusenigmatica:enderium_ingot',
            G: 'emendatusenigmatica:lumium_gear'
    })
   })
   