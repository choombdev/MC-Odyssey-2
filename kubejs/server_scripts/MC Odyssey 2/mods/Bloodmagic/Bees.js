// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    event.recipes.bloodmagic.soulforge(Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }), ['minecraft:honeycomb_block','ars_nouveau:mythical_clay', 'botania:manasteel_block', 'cyclic:soulstone']).minimumDrain(60).drain(10)
    event.recipes.bloodmagic.soulforge(Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gobbee_bee' })  , [Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }), 'gobber2:gobber2_block', 'gobber2:gobber2_ingot_nether']).minimumDrain(60).drain(10)

})
