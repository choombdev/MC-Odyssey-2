// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.


onEvent('recipes', event => {

    event.shapeless('4x minecraft:cobblestone', ['#forge:cobblestone','#forge:cobblestone', '#forge:cobblestone',  '#forge:cobblestone'])
    event.shapeless('4x minecraft:stone', ['#forge:stone','#forge:stone','#forge:stone', '#forge:stone'])

    event.shapeless('appliedenergistics2:certus_quartz_crystal', ['emendatusenigmatica:certus_quartz_gem'])
    event.shapeless('emendatusenigmatica:certus_quartz_gem', ['appliedenergistics2:certus_quartz_crystal'])

    event.shapeless('appliedenergistics2:charged_certus_quartz_crystal', ['emendatusenigmatica:charged_certus_quartz_gem'])
    event.shapeless('emendatusenigmatica:charged_certus_quartz_gem', ['appliedenergistics2:charged_certus_quartz_crystal'])

    event.shapeless('emendatusenigmatica:iron_ore', ['minecraft:iron_ore'])
    event.shapeless('minecraft:iron_ore', [ 'emendatusenigmatica:iron_ore'])
    
    event.shapeless('refinedstorage:silicon', ['emendatusenigmatica:silicon_gem'])
    event.shapeless('appliedenergistics2:silicon', ['emendatusenigmatica:silicon_gem'])
    event.shapeless('emendatusenigmatica:silicon_gem',['appliedenergistics2:silicon'])
    event.shapeless('emendatusenigmatica:silicon_gem',['refinedstorage:silicon'])

})
