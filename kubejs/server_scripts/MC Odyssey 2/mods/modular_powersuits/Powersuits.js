// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Modular Powersuits- - -')
onEvent('recipes', event => {
    // Removals
event.remove({output:'powersuits:powerarmor_head'})
event.remove({output:'powersuits:powerarmor_torso'})
event.remove({output:'powersuits:powerarmor_legs'})
event.remove({output:'powersuits:powerarmor_feet'})
event.remove({output:'powersuits:powerfist'})

    event.shaped('powersuits:powerarmor_head', [
        'III',
        'IAI',
        ' C '
        ],{
         I: 'mysticalagradditions:insanium_ingot',
         A: Item.of('gobber2:gobber2_helmet_nether', '{Damage:0}'),
         C: 'mekanism:supercharged_coil'
        })
    event.shaped('powersuits:powerarmor_torso', [
        'ICI',
        'IAI',
        'III'
        ],{
            I: 'mysticalagradditions:insanium_ingot',
            A: Item.of('gobber2:gobber2_chestplate_nether', '{Damage:0}'),
            C: 'mekanism:supercharged_coil'
        }) 
    event.shaped('powersuits:powerarmor_legs', [
        'III',
        'IAI',
        'ICI'
        ],{
            I: 'mysticalagradditions:insanium_ingot',
            A: Item.of('gobber2:gobber2_leggings_nether', '{Damage:0}'),
            C: 'mekanism:supercharged_coil'
        }) 
    event.shaped('powersuits:powerarmor_feet', [
        ' C ',
        'III',
        'IAI'
        ],{
            I: 'mysticalagradditions:insanium_ingot',
            A: Item.of('gobber2:gobber2_boots_nether', '{Damage:0}'),
            C: 'mekanism:supercharged_coil'
        }) 
    event.shaped('powersuits:powerfist', [
        'III',
        'CAC',
        'III'
        ],{
            I: 'mysticalagradditions:insanium_ingot',
            A: Item.of('gobber2:gobber2_paxel_nether', '{Damage:0}'),
            C: 'mekanism:supercharged_coil'
        }) 
    
        })
console.info('- - - Finished Loading Powersuits - - -')