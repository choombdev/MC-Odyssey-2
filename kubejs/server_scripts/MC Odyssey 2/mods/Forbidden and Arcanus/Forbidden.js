// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
event.remove({output:'forbidden_arcanus:eternal_stella'})
event.shaped('forbidden_arcanus:eternal_stella', [
        'CAC',
        'AXA',
        'CAC'
        ],{
            A: 'forbidden_arcanus:xpetrified_orb',
            X: 'forbidden_arcanus:stellarite_piece', 
            C: 'draconicevolution:draconium_core'
    })
})
