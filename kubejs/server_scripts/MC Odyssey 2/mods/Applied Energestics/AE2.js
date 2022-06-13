// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {


//Charging
event.recipes.mekanismEnriching('emendatusenigmatica:charged_certus_quartz_gem','emendatusenigmatica:certus_quartz_gem')
event.recipes.mekanismEnriching('appliedenergistics2:charged_certus_quartz_crystal', 'appliedenergistics2:certus_quartz_crystal')

//Charger Recipe

event.shaped('appliedenergistics2:charger', [
  'SCS',
  'S  ',
  'SCS'
], {
  C: 'emendatusenigmatica:fluix_gem',
  S: 'minecraft:iron_ingot'
})

// Charged Quartz
event.shaped('emendatusenigmatica:charged_certus_quartz_gem', [
  ' S ',
  ' C ',
  ' S '
], {
  C: 'emendatusenigmatica:certus_quartz_gem',
  S: 'redstone_arsenal:flux_nugget'
})

/// Smelting Dusts
event.smelting('emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:certus_quartz_dust' )

event.replaceInput({mod:"appliedenergistics2"}, 'appliedenergistics2:charged_certus_quartz_crystal', 'emendatusenigmatica:charged_certus_quartz_gem')

event.replaceInput({mod:"appliedenergistics2"}, 'appliedenergistics2:certus_quartz_crystal', 'emendatusenigmatica:certus_quartz_gem')
})



