// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Hammers - - -')
onEvent('recipes', event => {

const hammer = event.recipes.ftbsluice.hammer;
hammer("#forge:stone", ["minecraft:cobblestone"]);
hammer("#forge:cobblestone", ["minecraft:gravel"]);
hammer("minecraft:gravel", ["minecraft:sand"]);
hammer('minecraft:netherrack', ['ftbsluice:crushed_netherrack']);
hammer('minecraft:end_stone', ['ftbsluice:crushed_endstone']);
hammer('minecraft:sand', ['ftbsluice:dust']);

endstone = 'minecraft:end_stone'
crushedendstone = 'ftbsluice:crushed_endstone'
sand = 'minecraft:sand'
dust = 'ftbsluice:dust'
netherrack = 'minecraft:netherrack'
crushednetherrack = 'ftbsluice:crushed_netherrack'

event.recipes.thermal.pulverizer(crushednetherrack, netherrack)
event.recipes.thermal.pulverizer(crushedendstone, endstone)
event.recipes.thermal.pulverizer(dust, sand)
event.recipes.mekanismCrushing(crushednetherrack, netherrack)
event.recipes.mekanismCrushing(crushedendstone, endstone)
event.recipes.mekanismCrushing(dust, sand)
event.recipes.immersiveengineeringCrusher(crushednetherrack, netherrack)
event.recipes.immersiveengineeringCrusher(crushedendstone, endstone)
event.recipes.immersiveengineeringCrusher(dust, sand)
event.recipes.createCrushing(crushednetherrack, netherrack)
event.recipes.createCrushing(crushedendstone, endstone)
event.recipes.createCrushing(dust, sand)
})


console.info('- - - Finished Loading Hammers - - -')
