// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('player.tick', event => {
    if (event.player.getTicksExisted()%20==0){
    
        if (event.player.headArmorItem == 'kubejs:ancient_helmet') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:saturation 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:night_vision 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:water_breathing 30 10 true`)
        }

        if (event.player.chestArmorItem == 'kubejs:ancient_chestplate') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:resistance 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:fire_resistance 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:strength 30 10 true`)
        }
    
        if (event.player.legsArmorItem == 'kubejs:ancient_leggings') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:absorption 30 10 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:speed 30 3 true`)
        }
    
        if (event.player.feetArmorItem == 'kubejs:ancient_boots') {
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:jump_boost 30 3 true`)
            event.server.runCommandSilent(`effect give ${event.player.name} minecraft:conduit_power 30 13 true`)
        }
}
})