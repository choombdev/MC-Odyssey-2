// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {

    // Quartz
    quartzraw = '2x minecraft:quartz'
    quartsinputbrim = 'emendatusenigmatica:quartz_brimstone_ore'
    quartzinputblock = 'byg:raw_quartz_block'

    event.recipes.createCrushing(quartzraw, quartsinputbrim)
    event.recipes.thermal.pulverizer(quartzraw, quartzinputblock)
    event.recipes.immersiveengineeringCrusher(quartzraw, quartzinputblock)
    event.recipes.mekanismCrushing(quartzraw, quartzinputblock)

    // Zinc and Brass - Thermal Press
    event.recipes.thermal.press('emendatusenigmatica:zinc_plate', 'emendatusenigmatica:zinc_ingot')
    event.recipes.thermal.press('emendatusenigmatica:brass_plate', 'emendatusenigmatica:brass_ingot')
    event.recipes.thermal.press('emendatusenigmatica:steel_plate','emendatusenigmatica:steel_ingot')
    event.recipes.createPressing('emendatusenigmatica:steel_plate','emendatusenigmatica:steel_ingot')
    
    // Silver - Mekanism Crushing
    event.recipes.mekanismCrushing('emendatusenigmatica:silver_dust','emendatusenigmatica:silver_ingot')
    event.recipes.mekanismCrushing('2x emendatusenigmatica:silver_dust','emendatusenigmatica:silver_ore')
    
    // Platinum Processing
    PlatinumDust = 'silents_mechanisms:platinum_dust'
    PlatinumDustTwo = '2x silents_mechanisms:platinum_dust'
    PlatinumIngot = 'silents_mechanisms:platinum_ingot'
    PlatinumOre = 'silents_mechanisms:platinum_ore'

    event.recipes.createCrushing(PlatinumDust, PlatinumIngot)
    event.recipes.thermal.pulverizer(PlatinumDust, PlatinumIngot)
    event.recipes.immersiveengineeringCrusher(PlatinumDust, PlatinumIngot)
    event.recipes.mekanismCrushing(PlatinumDust, PlatinumIngot)

    event.recipes.createCrushing(PlatinumDustTwo, PlatinumOre)
    event.recipes.thermal.pulverizer(PlatinumDustTwo, PlatinumOre)
    event.recipes.immersiveengineeringCrusher(PlatinumDustTwo, PlatinumOre)
    event.recipes.mekanismCrushing(PlatinumDustTwo, PlatinumOre)

    // Iridium Processing
    IridiumDust = 'emendatusenigmatica:iridium_dust'
    IridiumDustTwo = '2x emendatusenigmatica:iridium_dust'
    IridiumIngot = 'emendatusenigmatica:iridium_ingot'
    IridiumPlate = 'emendatusenigmatica:iridium_plate'
    IridiumOre = 'emendatusenigmatica:iridium_ore'

    event.recipes.thermal.press(IridiumPlate, IridiumIngot)

    event.recipes.createCrushing(IridiumDust, IridiumIngot)
    event.recipes.thermal.pulverizer(IridiumDust, IridiumIngot)
    event.recipes.immersiveengineeringCrusher(IridiumDust, IridiumIngot)
    event.recipes.mekanismCrushing(IridiumDust, IridiumIngot)

    event.recipes.createCrushing(IridiumDustTwo, IridiumOre)
    event.recipes.thermal.pulverizer(IridiumDustTwo, IridiumOre)
    event.recipes.immersiveengineeringCrusher(IridiumDustTwo, IridiumOre)
    event.recipes.mekanismCrushing(IridiumDustTwo, IridiumOre)
    
    
    // Obsidian
    Powder = 'create:powdered_obsidian'
    Obsidian =  'minecraft:obsidian'
    event.recipes.mekanismCrushing(Powder, Obsidian)
    event.recipes.createCrushing(Powder, Obsidian)
    event.recipes.thermal.pulverizer(Powder, Obsidian)
    event.recipes.immersiveengineeringCrusher(Powder, Obsidian)
    
    // Sluice Crushed
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
    event.recipes.createCrushing(crushedendstone, endstone)
    event.recipes.createCrushing(dust, sand)

    // Diamond Plates
    event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_plate', 'minecraft:diamond', 'immersiveengineering:mold_plate')
    event.recipes.thermal.press('emendatusenigmatica:diamond_plate', 'minecraft:diamond')
    event.recipes.createPressing('emendatusenigmatica:diamond_plate', 'minecraft:diamond')
    })



