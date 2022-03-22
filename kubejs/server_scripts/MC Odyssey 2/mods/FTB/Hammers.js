// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {

const hammer = event.recipes.ftbsluice.hammer;
hammer("#forge:stone", ["minecraft:cobblestone"]);
hammer("#forge:cobblestone", ["minecraft:gravel"]);
hammer("minecraft:gravel", ["minecraft:sand"]);
hammer('minecraft:netherrack', ['ftbsluice:crushed_netherrack']);
hammer('minecraft:end_stone', ['ftbsluice:crushed_endstone']);
hammer('minecraft:sand', ['ftbsluice:dust']);

})


