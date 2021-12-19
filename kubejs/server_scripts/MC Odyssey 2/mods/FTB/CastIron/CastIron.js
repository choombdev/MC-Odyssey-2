// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading CastIron - - -')
onEvent('recipes', event => {

    event.remove({output: 'ftbjarmod:cast_iron_ingot'})
    event.campfireCooking('emendatusenigmatica:cast_iron_ingot','minecraft:iron_ingot')

})


console.info('- - - Finished Loading CastIron - - -')
