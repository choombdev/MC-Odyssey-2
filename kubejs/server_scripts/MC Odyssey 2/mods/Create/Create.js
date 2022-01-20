// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Started Loading Create - - -')
onEvent('recipes', event => {

    // Obsidian Dust
Powder = 'create:powdered_obsidian'
Obsidian =  'minecraft:obsidian'
event.recipes.mekanismCrushing(Powder, Obsidian)
event.recipes.createCrushing(Powder, Obsidian)
event.recipes.thermal.pulverizer(Powder, Obsidian)
event.recipes.immersiveengineeringCrusher(Powder, Obsidian)


})
console.info('- - - Finished Loading Create - - -')