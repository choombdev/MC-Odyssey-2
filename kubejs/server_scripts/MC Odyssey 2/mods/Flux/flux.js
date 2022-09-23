// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event =>{

    event.remove({output:'redstone_arsenal:flux_ingot'})
    event.shaped('redstone_arsenal:flux_ingot', [
      'OPO',
      'PSP',
      'OPO'
    ], {
      S: 'createaddition:overcharged_alloy',
      O: 'emendatusenigmatica:electrum_ingot',
      P: 'mekanism:ingot_refined_glowstone'
    
    })

    event.remove({output:'redstone_arsenal:flux_dust'})
    event.shaped('redstone_arsenal:flux_dust', [
      'SOS',
      'OPO',
      'SOS'
    ], {
      S: 'emendatusenigmatica:electrum_dust',
      O: 'mekanism:dust_refined_obsidian',
      P: 'minecraft:fire_charge'
    
    })

    event.remove({output:'redstone_arsenal:flux_gem'})
    event.shaped('redstone_arsenal:flux_gem', [
      'PSO',
      'SQS',
      'PSO'
    ], {
        S: 'createaddition:overcharged_alloy',
        O: 'emendatusenigmatica:electrum_ingot',
        P: 'mekanism:ingot_refined_glowstone',
        Q: 'botania:mana_diamond'
    })
})