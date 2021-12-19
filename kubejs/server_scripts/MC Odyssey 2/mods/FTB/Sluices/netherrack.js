// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading netherrack/sluices - -')

onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;
    sluice(["cloth"], 'ftbsluice:crushed_netherrack', [
        ['minecraft:quartz',0.5],
        ['minecraft:nether_brick',0.15],
        ['emendatusenigmatica:cobalt_dirty_dust',0.02]
    ]);

    sluice(["iron"], 'ftbsluice:crushed_netherrack', [
        ['minecraft:quartz',0.65],
        ['emendatusenigmatica:certus_quartz_dirty_dust',0.10],
        ['emendatusenigmatica:charged_certus_quartz_dirty_dust',0.05],
        ['minecraft:nether_brick',0.25],
        ['emendatusenigmatica:cobalt_dirty_dust',0.06]
    ]);

    sluice(["gold"], 'ftbsluice:crushed_netherrack', [
        ['minecraft:quartz',0.75],
        ['emendatusenigmatica:certus_quartz_dirty_dust',0.20],
        ['emendatusenigmatica:charged_certus_quartz_dirty_dust',0.10],
        ['minecraft:nether_brick',0.35],
        ['emendatusenigmatica:cobalt_dirty_dust',0.1]
    ]);

    sluice(["diamond"], 'ftbsluice:crushed_netherrack', [
        ['minecraft:quartz',0.85],
        ['emendatusenigmatica:certus_quartz_dirty_dust',0.40],
        ['emendatusenigmatica:charged_certus_quartz_dirty_dust',0.20],
        ['minecraft:nether_brick',0.65],
        ['emendatusenigmatica:cobalt_dirty_dust',0.2]
    ]);
});


console.info('- - - Finished Loading netherrack/sluices - - -')