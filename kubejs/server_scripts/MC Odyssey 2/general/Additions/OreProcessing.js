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

 

    // Missing Plates
    
    // Plate Iron
        event.shapeless('emendatusenigmatica:cast_iron_plate', ['immersiveengineering:hammer', 'emendatusenigmatica:cast_iron_ingot']).damageItem(0)
        event.recipes.createPressing('emendatusenigmatica:cast_iron_plate', 'emendatusenigmatica:cast_iron_ingot')
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:cast_iron_plate', 'emendatusenigmatica:cast_iron_ingot', 'immersiveengineering:mold_plate')
    // Diamond Plates
       event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:diamond_plate', 'minecraft:diamond', 'immersiveengineering:mold_plate')
       event.recipes.thermal.press('emendatusenigmatica:diamond_plate', 'minecraft:diamond')
       event.recipes.createPressing('emendatusenigmatica:diamond_plate', 'minecraft:diamond')
    // Iridium
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:iridium_plate', 'emendatusenigmatica:iridium_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:iridium_plate', 'emendatusenigmatica:iridium_ingot')
    // Signalum
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:signalum_plate', 'emendatusenigmatica:signalum_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:signalum_plate', 'emendatusenigmatica:signalum_ingot')
        event.shapeless('emendatusenigmatica:signalum_ingot', ['immersiveengineering:hammer', 'emendatusenigmatica:signalum_ingot']).damageItem(0)
    // Lumium
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:lumium_plate', 'emendatusenigmatica:lumium_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:lumium_plate', 'emendatusenigmatica:lumium_ingot')
        event.shapeless('emendatusenigmatica:lumium_ingot', ['immersiveengineering:hammer', 'emendatusenigmatica:lumium_ingot']).damageItem(0)
    // Aluminum
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:aluminum_plate', 'emendatusenigmatica:aluminum_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:aluminum_plate', 'emendatusenigmatica:aluminum_ingot')
        event.recipes.thermal.press('emendatusenigmatica:aluminum_plate', 'emendatusenigmatica:aluminum_ingot')
    // Silver
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:silver_plate', 'emendatusenigmatica:silver_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:silver_plate', 'emendatusenigmatica:silver_ingot')
    // Lead
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:lead_plate', 'emendatusenigmatica:lead_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:lead_plate', 'emendatusenigmatica:lead_ingot')
    // Nickel
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:nickel_plate', 'emendatusenigmatica:nickel_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:nickel_plate', 'emendatusenigmatica:nickel_ingot')
    // Uranium
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:uranium_plate', 'emendatusenigmatica:uranium_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:uranium_plate', 'emendatusenigmatica:uranium_ingot')
    // Osmium
        event.shapeless('emendatusenigmatica:osmium_ingot', ['immersiveengineering:hammer', 'emendatusenigmatica:osmium_ingot']).damageItem(0)
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:osmium_plate', 'emendatusenigmatica:osmium_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:osmium_plate', 'emendatusenigmatica:osmium_ingot')
    // Tin
        event.shapeless('emendatusenigmatica:tin_ingot', ['immersiveengineering:hammer', 'emendatusenigmatica:tin_ingot']).damageItem(0)
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:tin_plate', 'emendatusenigmatica:tin_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:tin_plate', 'emendatusenigmatica:tin_ingot')
    // Cobalt
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:cobalt_plate', 'emendatusenigmatica:cobalt_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:cobalt_plate', 'emendatusenigmatica:cobalt_ingot')
    // Bronze
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:bronze_plate', 'emendatusenigmatica:bronze_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:bronze_plate', 'emendatusenigmatica:bronze_ingot')
    // Constantan
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:constantan_plate', 'emendatusenigmatica:constantan_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:constantan_plate', 'emendatusenigmatica:constantan_ingot')
    // Electrum
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:electrum_plate', 'emendatusenigmatica:electrum_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:electrum_plate', 'emendatusenigmatica:electrum_ingot')
    // Invar
        event.shapeless('emendatusenigmatica:invar_ingot', ['immersiveengineering:hammer', 'emendatusenigmatica:invar_ingot']).damageItem(0)
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:invar_plate', 'emendatusenigmatica:invar_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:invar_plate', 'emendatusenigmatica:invar_ingot')
    // Enderium
        event.shapeless('emendatusenigmatica:enderium_ingot', ['immersiveengineering:hammer', 'emendatusenigmatica:enderium_ingot']).damageItem(0)
        event.recipes.immersiveengineeringMetalPress('emendatusenigmatica:enderium_plate', 'emendatusenigmatica:enderium_ingot', 'immersiveengineering:mold_plate')
        event.recipes.createPressing('emendatusenigmatica:enderium_plate', 'emendatusenigmatica:enderium_ingot')

    })



