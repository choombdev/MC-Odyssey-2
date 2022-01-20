// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Started Loading Drippers - - -')

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
console.info('- - - Finished Loading Drippers - - -')