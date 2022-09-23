// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
// Alkeshary Tome
onEvent('recipes', event => {
    event.remove({output: Item.of('xreliquary:alkahestry_tome')})
// Uncrafting Grinder
event.remove({output:'cyclic:uncrafter'})
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


// Chainmail

event.remove({id: 'iceandfire:chainmail_helmet'})
event.remove({id: 'iceandfire:chainmail_chestplate'})
event.remove({id: 'iceandfire:chainmail_leggings'})
event.remove({id: 'iceandfire:chainmail_boots'})

event.remove({id: 'mana-and-artifice:chainmail_helmet'})
event.remove({id: 'mana-and-artifice:chainmail_chestplate'})
event.remove({id: 'mana-and-artifice:chainmail_leggings'})
event.remove({id: 'mana-and-artifice:chainmail_boots'})

event.remove({id: 'minecolonies:chainmailhelmet'})
event.remove({id: 'minecolonies:chainmailchestplate'})
event.remove({id: 'minecolonies:chainmailleggings'})
event.remove({id: 'minecolonies:chainmailboots'})

// Useless Piston Recipe:
event.remove({id: 'minecolonies:piston'})


})


