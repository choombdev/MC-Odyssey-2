// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
// Seed Removal
event.remove({id:'mysticalagriculture:seed/infusion/draconium'})
event.remove({id:'mysticalagriculture:seed/infusion/awakened_draconium'})

// Draconic Core
event.remove({output:'draconicevolution:draconium_core'})
event.shaped('draconicevolution:draconium_core', [
    'INK',
    'ECE',
    'KNI'
    ],{
     I: 'botania:life_essence',
     N: 'extendedcrafting:nether_star_block',
     C: 'xreliquary:witherless_rose',
     K: 'mysticalagradditions:insanium_gemstone',
     E: 'forbidden_arcanus:dark_nether_star'  
    })
    
})

