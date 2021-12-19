// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Emendatus Enigmatica - -')

onEvent('item.tags', event => {
    event.add('forge:ores',['emendatusenigmatica:coal_ore', 'emendatusenigmatica:iron_ore', 'emendatusenigmatica:emerald_ore', 'emendatusenigmatica:lapis_ore', 'emendatusenigmatica:redstone_ore', 'emendatusenigmatica:quartz_ore', 'emendatusenigmatica:copper_ore', 'emendatusenigmatica:diamond_ore', 'emendatusenigmatica:gold_ore', 'emendatusenigmatica:zinc_ore', 'emendatusenigmatica:cobalt_ore', 'emendatusenigmatica:tin_ore', 'emendatusenigmatica:osmium_ore', 'emendatusenigmatica:uranium_ore', 'emendatusenigmatica:nickel_ore', 'emendatusenigmatica:lead_ore', 'emendatusenigmatica:silver_ore', 'emendatusenigmatica:aluminum_ore', 'emendatusenigmatica:certus_quartz_ore', 'emendatusenigmatica:charged_certus_quartz_ore', 'emendatusenigmatica:fluorite_ore', 'emendatusenigmatica:bitumen_ore', 'emendatusenigmatica:cinnabar_ore', 'emendatusenigmatica:apatite_ore', 'emendatusenigmatica:sulfur_ore', 'emendatusenigmatica:potassium_nitrate_ore', 'emendatusenigmatica:arcane_ore'])
    event.add('appliedenergistics2:crystals/certus',['emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:charged_certus_quartz_gem'])
    event.add('appliedenergistics2:crystals/certus_quartz',['emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:charged_certus_quartz_gem'])
    event.add('appliedenergistics2:crystals/quartz',['emendatusenigmatica:certus_quartz_gem', 'emendatusenigmatica:charged_certus_quartz_gem'])
})
console.info('- - - Finished Loading Emendatus Enigmatica - - -')