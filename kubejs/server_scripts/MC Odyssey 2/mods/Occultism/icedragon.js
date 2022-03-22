// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
const ritice = [
// Ice Dragon
{
	ritual_type: 'occultism:summon',
	activation_item: 'iceandfire:summoning_crystal_ice',
	pentacle_id: 'occultism:summon_wild_afrit',
	duration: 60,
	entity_to_sacrifice: {
		tag: "occultism:humans",
		display_name: "ritual.occultism.sacrifice.humans"
	},
	entity_to_summon: 'iceandfire:ice_dragon',
	ritual_dummy: 'kubejs:icedragonsummon',
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

    ritice.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();
        event.custom(recipe).id(recipe.id);
    });


})
