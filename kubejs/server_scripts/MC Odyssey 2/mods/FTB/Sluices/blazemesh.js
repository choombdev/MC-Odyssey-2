// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent("recipes", (event) => {
const sluice = event.recipes.ftbsluice.sluice;
    sluice(["blazing"], "#forge:gravel", [
    ['minecraft:diamond_block',0.4],
    ['minecraft:emerald_block',0.38],
    ['silents_mechanisms:platinum_ingot',0.3], 
    ['minecraft:gold_ingot',0.5],
    ['emendatusenigmatica:copper_ingot',0.7],
    ['minecraft:iron_ingot',0.6],
    ['emendatusenigmatica:lead_ingot',0.5], 
    ['emendatusenigmatica:osmium_ingot',0.55], 
    ['emendatusenigmatica:tin_ingot',0.6], 
    ['emendatusenigmatica:uranium_ingot',0.45], 
    ['emendatusenigmatica:zinc_ingot',0.5], 
    ['emendatusenigmatica:silver_ingot',0.5], 
    ['emendatusenigmatica:aluminum_ingot',0.5],
    ['emendatusenigmatica:nickel_ingot', 0.58]
    ]).fluid("minecraft:lava");
    
    sluice(["blazing"], "#forge:sand", [
        ['emendatusenigmatica:copper_ingot',0.7],
        ['minecraft:iron_ingot',0.6],
        ['emendatusenigmatica:lead_ingot',0.5], 
        ['emendatusenigmatica:osmium_ingot',0.55], 
        ['emendatusenigmatica:tin_ingot',0.6], 
        ['emendatusenigmatica:uranium_ingot',0.45], 
        ['minecraft:bone_block', 0.7],
        ['minecraft:clay', 0.5],
        ['minecraft:lapis_block', 0.65],
        ['minecraft:redstone_block', 0.7],
        ["thermal:apatite", 0.54],
        ['emendatusenigmatica:cinnabar_block', 0.44],
        ["thermal:niter", 0.44],
        ['emendatusenigmatica:sulfur_block', 0.44],
        ["mysticalagriculture:prosperity_block", 0.62]
    ]).fluid("minecraft:lava");


    sluice(["blazing"], "ftbsluice:dust", [
        ['minecraft:bone_block', 0.7],
        ['forbidden_arcanus:arcane_crystal_block',0.41],
        ['emendatusenigmatica:arcane_block',0.35],
        ["mysticalagriculture:prosperity_block", 0.62],
        ['mana-and-artifice:vinteum_ingot', 0.4],
        ['iceandfire:sapphire_block', 0.5],
        ['iceandfire:amythest_block', 0.2]
    
    ]).fluid("minecraft:lava");

    sluice(["blazing"], 'ftbsluice:crushed_endstone', [
        ['quark:biotite_block', 0.44],
        ['eidolon:pewter_ingot', 0.36],
        ['emendatusenigmatica:enderium_ingot',0.20]
    ]).fluid("minecraft:lava");


    sluice(["blazing"], 'botania:elementium_block',  [
        ['botania:gaia_ingot', 0.95],
        ['draconicevolution:draconium_dust', 0.01]
    ]).fluid("minecraft:lava");

});




