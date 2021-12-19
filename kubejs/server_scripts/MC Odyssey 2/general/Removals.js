// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Removals- - -')

// Alkeshary Tome
onEvent('recipes', event => {
event.remove({output: Item.of('xreliquary:alkahestry_tome')})
// Jetpacks
event.remove({output:Item.of('ironjetpacks:wood_jetpack', '{Throttle:1.0d}')})
event.remove({output:Item.of('ironjetpacks:copper_jetpack', '{Throttle:1.0d}')})
event.remove({output:Item.of('ironjetpacks:stone_jetpack', '{Throttle:1.0d}')})
// Draconic
event.remove({output:'draconicevolution:end_draconium_ore'})
event.remove({output:'draconicevolution:overworld_draconium_ore'})
event.remove({output:'draconicevolution:nether_draconium_ore'})
event.remove({output:'draconicevolution:draconium_dust'})
event.remove({output:'draconicevolution:draconium_ingot'})
event.remove({id: 'jaopca:immersiveengineering.dust_to_material.draconium'})

// Draconium as Input
event.remove({input:'draconicevolution:end_draconium_ore'})
event.remove({input:'draconicevolution:overworld_draconium_ore'})
event.remove({input:'draconicevolution:nether_draconium_ore'})
event.remove({input:'draconicevolution:draconium_dust'})

// Coal
event.remove({output:'additional_lights:fire_for_standing_torch_s'})
event.remove({output:'additional_lights:fire_for_standing_torch_l'})

// Quartz Sand
event.remove({id: 'betternether:quartz_glass'})
event.smelting('betternether:quartz_glass', 'byg:quartzite_sand')

// Nether Quartz Block
event.remove({output: 'minecraft:nether_wart_block'})
event.shapeless('minecraft:nether_wart_block', ['9x minecraft:nether_wart'])
event.shapeless('9x minecraft:nether_wart', ['minecraft:nether_wart_block'])

})



console.info('- - - Finished Loading Removals - - -')