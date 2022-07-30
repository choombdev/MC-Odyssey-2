// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
// Illuminati Pet
event.remove({output:Item.of('inventorypets:pet_illuminati')})
// Meta Pet
event.remove({output:Item.of('inventorypets:pet_meta')})
event.remove({id:"inventorypets:meta_pet_youtuber"})
event.remove({id:"inventorypets:meta_pet_legend_25"})
event.remove({id:"inventorypets:meta_pet_legend_50"})
event.remove({id:"inventorypets:meta_pet_legend_75"})
event.remove({output:Item.of('inventorypets:pet_juggernaut')})

event.recipes.createMechanicalCrafting(Item.of('inventorypets:pet_meta'), [
    'XXX',
    'XAX',
    'XXX'
    ], {
  
    X: 'mysticalagradditions:dragon_egg_crux',
    A: 'xreliquary:witherless_rose'
  })

  event.recipes.createMechanicalCrafting(Item.of('inventorypets:pet_meta'), [
    'XBX',
    'BAB',
    'XBX'
    ], {
  
    X: 'mysticalagradditions:dragon_egg_crux',
    A: 'draconicevolution:draconium_core',
    B: Item.of('inventorypets:pet_juggernaut')
  })
    })
