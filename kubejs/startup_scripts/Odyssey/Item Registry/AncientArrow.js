// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('item.registry.tool_tiers', event => {
  event.add('creativetier', tier => {
    tier.speed = 6.0
    tier.attackDamageBonus = 1000.0
    tier.level = 5
  })
})

onEvent('item.registry', event => {
  event.create('ancientarrow').displayName('Ancient Arrow').maxStackSize(1).glow(true).tooltip("An Arrow crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").type('sword').tier('creativetier').attackDamage(1000)
})

onEvent('item.modification', event => {
  event.modify('kubejs:ancientarrow', item => {
    item.fireResistant = true
    item.maxDamage = 1000
  })
})
