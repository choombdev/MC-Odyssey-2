// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Mystical Agriculture- - -')

onEvent('recipes', event => {
    // Draconium
event.remove({output:'draconicevolution:draconium_dust'})
event.remove({output:'draconicevolution:awakened_draconium_dust'})
event.remove({output:'draconicevolution:draconium_ingot'})
event.remove({output:'draconicevolution:awakened_draconium_ingot'})
    // Altar
    event.remove({output:'mysticalagriculture:infusion_altar'})
    event.shaped('mysticalagriculture:infusion_altar', [
        'ANA',
        'ESE',
        'SSS'
        ],{
         N: '#forge:ingots/steel',
         E: 'minecraft:prismarine_crystals',
         A: 'minecraft:air',
         S: 'minecraft:end_stone'
        }) 
        


    // Deepslate

    event.shaped('32x quark:deepslate', [
        'AAA',
        'B B',
        'AAA'
        ],{
            A: 'mysticalagriculture:stone_essence',
            B: 'mysticalagriculture:coal_essence'
    })

    // Enderium
    
    event.shaped('4x emendatusenigmatica:enderium_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:enderium_essence'
    })
    // Iridium
    event.shaped('4x emendatusenigmatica:iridium_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:iridium_essence'
    })
    // Nickel
    event.shaped('4x emendatusenigmatica:nickel_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:nickel_essence'
    })
    // Aluminum
    event.shaped('4x emendatusenigmatica:aluminum_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:aluminum_essence'
    })

    // Zinc
    event.shaped('4x emendatusenigmatica:zinc_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:zinc_essence'
    })

    // Brass
    event.shaped('4x emendatusenigmatica:brass_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:brass_essence'
    })

    // Invar
    event.shaped('4x emendatusenigmatica:invar_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:invar_essence'
    })

    // Uranium
    event.shaped('4x emendatusenigmatica:uranium_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:uranium_essence'
    })

    // Signalum
    event.shaped('4x emendatusenigmatica:signalum_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:signalum_essence'
    })

    // Lumium
    event.shaped('4x emendatusenigmatica:lumium_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:lumium_essence'
    })

    // Platinum
    event.shaped('4x silents_mechanisms:platinum_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:platinum_essence'
    })
    // lead
    event.shaped('4x emendatusenigmatica:lead_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:lead_essence'
    })
    // constantan
    event.shaped('4x emendatusenigmatica:constantan_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:constantan_essence'
    })

    // electrum
    event.shaped('4x emendatusenigmatica:electrum_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:electrum_essence'
    })
        // Silicon
    event.shaped('4x emendatusenigmatica:silicon_gem', [
        '   ',
        'AA ',
        'AA '
        ],{
            A: 'mysticalagriculture:silicon_essence'
    })
    // Dry Rubber
    event.shaped('4x industrialforegoing:dryrubber', [
        '   ',
        'AA ',
        'AA '
        ],{
            A: 'mysticalagriculture:rubber_essence'
    })

    // Graphite Ingot
    event.shaped('4x bigreactors:graphite_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:graphite_essence'
    })
    // Ruby
    event.shaped('4x emendatusenigmatica:ruby_gem', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:ruby_essence'
    })
    // Sapphire
    event.shaped('4x emendatusenigmatica:sapphire_gem', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:sapphire_essence'
    })
    // Choombium Ingot
    event.shaped('4x kubejs:choombium_ingot', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:choombium_essence'
    })
    // Apatite
    event.shaped('4x emendatusenigmatica:apatite_shard', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:apatite_essence'
    })
    // Saltpeter
    event.shaped('4x thermal:niter_dust', [
        'AAA',
        'A A',
        'AAA'
        ],{
            A: 'mysticalagriculture:saltpeter_essence'
    })
    event.shaped('2x bloodmagic:saltpeter', [
        'AAA',
        '   ',
        'AAA'
        ],{
            A: 'mysticalagriculture:saltpeter_essence'
    })
})

console.info('- - - Finished Loading Mystical Agriculture - - -')