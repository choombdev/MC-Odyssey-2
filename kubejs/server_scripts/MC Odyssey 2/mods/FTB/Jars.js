// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    const jar = event.recipes.ftbjarmod.jar;
    // Lava
    jar(Fluid.of("minecraft:lava", 1000), "16x #forge:cobblestone").time(3000).lowTemp();
    jar(Fluid.of("minecraft:lava", 1000), "16x #forge:cobblestone").time(300).highTemp();
    
    // Low Temp - Water
    jar('mekanism:dust_gold',['mekanism:dirty_dust_gold', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('mekanism:dust_copper', ['mekanism:dirty_dust_copper', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('mekanism:dust_iron', ['mekanism:dirty_dust_iron', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('mekanism:dust_lead', ['mekanism:dirty_dust_lead', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('mekanism:dust_osmium', ['mekanism:dirty_dust_osmium', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('mekanism:dust_tin', ['mekanism:dirty_dust_tin', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('mekanism:dust_uranium', ['mekanism:dirty_dust_uranium', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:zinc_dust', ['emendatusenigmatica:zinc_dirty_dust', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:silver_dust', ['emendatusenigmatica:silver_dirty_dust', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:aluminum_dust', ['emendatusenigmatica:aluminum_dirty_dust', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('2x silents_mechanisms:platinum_dust', ['silents_mechanisms:platinum_chunks', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:cobalt_dust', ['emendatusenigmatica:cobalt_dirty_dust', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:certus_quartz_dust',  ['emendatusenigmatica:certus_quartz_dirty_dust',  Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:charged_certus_quartz_ore', ['emendatusenigmatica:charged_certus_quartz_dirty_dust', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    jar('emendatusenigmatica:nickel_dust', ['emendatusenigmatica:nickel_dirty_dust', Fluid.of("minecraft:water", 500)]).time(100).lowTemp();
    // High Temp - Water
    jar('mekanism:dust_gold',['mekanism:dirty_dust_gold', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('mekanism:dust_copper', ['mekanism:dirty_dust_copper', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('mekanism:dust_iron', ['mekanism:dirty_dust_iron', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('mekanism:dust_lead', ['mekanism:dirty_dust_lead', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('mekanism:dust_osmium', ['mekanism:dirty_dust_osmium', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('mekanism:dust_tin', ['mekanism:dirty_dust_tin', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('mekanism:dust_uranium', ['mekanism:dirty_dust_uranium', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:zinc_dust', ['emendatusenigmatica:zinc_dirty_dust', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:silver_dust', ['emendatusenigmatica:silver_dirty_dust', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:aluminum_dust', ['emendatusenigmatica:aluminum_dirty_dust', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('2x silents_mechanisms:platinum_dust', ['silents_mechanisms:platinum_chunks', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:cobalt_dust', ['emendatusenigmatica:cobalt_dirty_dust', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:certus_quartz_dust',  ['emendatusenigmatica:certus_quartz_dirty_dust',  Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:charged_certus_quartz_ore', ['emendatusenigmatica:charged_certus_quartz_dirty_dust', Fluid.of("minecraft:water", 500)]).time(10).highTemp();
    jar('emendatusenigmatica:nickel_dust', ['emendatusenigmatica:nickel_dirty_dust', Fluid.of("minecraft:water", 500)]).time(10).highTemp();

})
