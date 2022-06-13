// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;
    sluice(["cloth"], 'ftbsluice:crushed_endstone', [
        ['quark:biotite', 0.04],
        ['eidolon:pewter_blend', 0.06],
        ['emendatusenigmatica:enderium_dust',0.01]
    ]);

    sluice(["iron"], 'ftbsluice:crushed_endstone', [
        ['quark:biotite', 0.14],
        ['eidolon:pewter_blend', 0.16],
        ['emendatusenigmatica:enderium_dust',0.09]
    ]);

    sluice(["gold"], 'ftbsluice:crushed_endstone', [
        ['quark:biotite', 0.24],
        ['eidolon:pewter_blend', 0.20],
        ['emendatusenigmatica:enderium_dust',0.15]
    ]);

    sluice(["diamond"], 'ftbsluice:crushed_endstone', [
        ['quark:biotite', 0.44],
        ['eidolon:pewter_blend', 0.36],
        ['emendatusenigmatica:enderium_dust',0.20]
    ]);
});

