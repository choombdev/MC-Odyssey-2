// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
    event.remove({id:'omni_card:prototype_core'})
    event.shaped('omni_card:prototype_core', [
        'SBS',
        'B B',
        'SBS'
      ], {
        S: 'integrateddynamics:crystalized_menril_chunk',
        B: 'botania:quartz_red'
      })
})

