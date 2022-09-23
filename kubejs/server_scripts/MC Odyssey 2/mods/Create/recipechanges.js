// This script was made by choombdev for Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    // Remove the recipe for Netherrack Crushing in Create
    event.remove({id:"create:kjs_13ebmow2l68rxnxj4fuvibkyy"})
    // Adding recipe for Marble Creation through Polishing
    event.recipes.createSandpaperPolishing('astralsorcery:marble_raw', ['minecraft:diorite'])
})
