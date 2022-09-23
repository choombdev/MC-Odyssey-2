// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
    // Removing recipes
    event.remove({id:"mysticalagriculture:essence/quark/marble"})
    event.remove({id:"mysticalagriculture:essence/astralsorcery/marble"})
    event.remove({id:"mysticalagriculture:essence/chisel/marble"})

    // Adding Recipe for Marble to Essence and vise versa.
    event.shapeless('6x mysticalagriculture:marble_essence', ['astralsorcery:marble_raw'])
    event.shapeless('6x mysticalagriculture:marble_essence', ['quark:marble'])
    event.shapeless('6x mysticalagriculture:marble_essence', ['chisel:marble/raw'])

    event.shaped('chisel:marble/raw', [
        'QQQ',
        '   ',
        'QQQ'
      ], {
        Q: 'mysticalagriculture:marble_essence'
      }) 
      event.shaped('quark:marble', [
        'Q Q',
        'Q Q',
        'Q Q'
      ], {
        Q: 'mysticalagriculture:marble_essence'
      }) 
      event.shaped('astralsorcery:marble_raw', [
        ' Q ',
        'QQQ',
        'Q Q'
      ], {
        Q: 'mysticalagriculture:marble_essence'
      }) 
})
