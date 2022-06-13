// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
	event.recipes.ftbdripperDrip({
		inputBlock: 'ftbsluice:dust',
		outputBlock: 'minecraft:netherrack',
		chance: 0.3,
		fluid: 'minecraft:lava'
	})
	event.recipes.ftbdripperDrip({
		inputBlock: 'minecraft:stone',
		outputBlock: 'minecraft:andesite',
		chance: 0.3,
		fluid: 'minecraft:water'
	})
})