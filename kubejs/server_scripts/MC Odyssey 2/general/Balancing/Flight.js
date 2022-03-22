// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
event.remove({output:'cyclic:chorus_spectral'})
event.remove({output:'cyclic:chorus_flight'})
event.remove({output:'angelring:itemring'})
event.remove({output:'inventorypets:pet_cloud'})
event.shaped('cyclic:chorus_spectral', [
    'CCC',
    'CAC',
    'CCC'
    ],{
     C: 'minecraft:chorus_fruit',
     A: 'cyclic:apple_ender'   
    }) 
event.shaped('cyclic:chorus_flight', [
    'INI',
    'NCN',
    'INI'
    ],{
     I: 'mekanism:ingot_refined_glowstone',
     N: 'cyclic:chorus_spectral',
     C: 'minecraft:nether_star'   
    }) 
event.shaped('angelring:itemring', [
    'ABC',
    'DXE',
    'FGH'
    ],{
     A: 'botania:gaia_ingot',
     B: 'mysticalagradditions:insanium_block',
     C: 'minecraft:dragon_head',
     D: Item.of('inventorypets:pet_cloud', '{Damage:0}'),
     E: 'astralsorcery:tree_beacon',
     F: 'twilightforest:snow_queen_trophy',
     G: 'tconstruct:manyullyn_block',
     H: 'gobber2:dragon_star',
     X: 'draconicevolution:dragon_heart'
    }) 
    event.shaped('inventorypets:pet_cloud', [
        'IBI',
        'NCN',
        'IBI'
        ],{
         I: 'minecraft:netherite_ingot',
         N: 'rats:dragon_wing',
         B:'mysticalagradditions:dragon_scale',
         C: 'gobber2:dragon_star'  
        }) 

})
