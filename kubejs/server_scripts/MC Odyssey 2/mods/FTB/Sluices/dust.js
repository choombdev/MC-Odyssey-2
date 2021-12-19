
    // This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
    console.info('- - - Loading dust/sluices - -')

    onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;
    
        sluice(["cloth"], "ftbsluice:dust", [
            ['minecraft:bone_meal', 0.2],
            ['forbidden_arcanus:arcane_crystal',0.001],
            ['emendatusenigmatica:arcane_gem',0.05]

    ]);
        sluice(["iron"], "ftbsluice:dust", [
            ['minecraft:bone_meal', 0.4],
            ['forbidden_arcanus:arcane_crystal',0.021],
            ['emendatusenigmatica:arcane_gem',0.15],
            ["mysticalagriculture:prosperity_shard", 0.12]
    
        ]);
    
        sluice(["gold"], "ftbsluice:dust", [
            ['minecraft:bone_meal', 0.6],
            ['forbidden_arcanus:arcane_crystal',0.11],
            ['emendatusenigmatica:arcane_gem',0.25],
            ["mysticalagriculture:prosperity_shard", 0.42]
    
        ]);
    
        sluice(["diamond"], "ftbsluice:dust", [
            ['minecraft:bone_meal', 0.7],
            ['forbidden_arcanus:arcane_crystal',0.41],
            ['emendatusenigmatica:arcane_gem',0.35],
            ["mysticalagriculture:prosperity_shard", 0.62]
    
        ]);
    });
    
    
    
    console.info('- - - Finished Loading dust/sluices - - -')