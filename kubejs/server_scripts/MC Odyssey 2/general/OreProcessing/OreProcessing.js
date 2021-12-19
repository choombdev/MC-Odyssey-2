// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading OreProcessing - -')


onEvent('recipes', event => {

    // Quartz
    quartzraw = '2x minecraft:quartz'
    quartsinputbrim = 'emendatusenigmatica:quartz_brimstone_ore'
    quartzinputblock = 'byg:raw_quartz_block'

    event.recipes.createCrushing(quartzraw, quartsinputbrim)
    event.recipes.thermal.pulverizer(quartzraw, quartzinputblock)
    event.recipes.immersiveengineeringCrusher(quartzraw, quartzinputblock)
    event.recipes.mekanismCrushing(quartzraw, quartzinputblock)

    })



console.info('- - - Finished Loading OreProcessing - - -')