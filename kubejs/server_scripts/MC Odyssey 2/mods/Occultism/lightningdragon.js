// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
const ritlight = [
	{
		ritual_type: 'occultism:summon',
		activation_item: 'iceandfire:summoning_crystal_lightning',
		pentacle_id: 'occultism:summon_wild_afrit',
		duration: 60,
		entity_to_sacrifice: {
			tag: "occultism:humans",
			display_name: "ritual.occultism.sacrifice.humans"
		},
		entity_to_summon: 'iceandfire:lightning_dragon',
		ritual_dummy: 'kubejs:lightningdragonsummon',
		ingredients: [
			'botania:dragonstone',
			'xreliquary:ender_staff',
			'forbidden_arcanus:dark_nether_star',
			'xreliquary:witherless_rose',
			'dragonseeker:legendary_dragonseeker'
		],
		result: 'occultism:jei_dummy/none'}
] 

onEvent('recipes', (event) => {

    ritlight.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();
        event.custom(recipe).id(recipe.id);
    });


})
