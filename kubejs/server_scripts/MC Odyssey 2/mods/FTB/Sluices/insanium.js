// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading netherrack/sluices - -')

onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;
    sluice(["cloth"], 'mysticalagradditions:insanium_block', [
        ['tconstruct:debris_nugget',0.15]

    ]);

    sluice(["iron"], 'mysticalagradditions:insanium_block', [
        ['tconstruct:debris_nugget',0.25]

    ]);

    sluice(["gold"], 'mysticalagradditions:insanium_block', [
        ['tconstruct:debris_nugget',0.55]

    ]);

    sluice(["diamond"], 'mysticalagradditions:insanium_block', [
        ['tconstruct:debris_nugget',0.85]
    ]);


});


console.info('- - - Finished Loading netherrack/sluices - - -')