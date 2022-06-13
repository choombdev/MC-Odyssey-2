// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Armor- - -')

onEvent('item.registry.armor_tiers', event => {
  event.add('ancientarmor', tier => {
    tier.slotProtections = [50, 200, 100, 50]
    tier.equipSound = 'minecraft:item.armor.netherite'
    tier.toughness = 100.0
    tier.knockbackResistance = 10.0
    tier.enchantmentValue = 50
  })
})


onEvent('item.registry', event => {
  event.create('ancient_helmet').displayName('Ancient Helmet').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").type('helmet').tier('ancientarmor')
  event.create('ancient_chestplate').displayName('Ancient Chestplate').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").type('chestplate').tier('ancientarmor')
  event.create('ancient_leggings').displayName('Ancient Leggings').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").type('leggings').tier('ancientarmor')
  event.create('ancient_boots').displayName('Ancient Boots').glow(true).tooltip("A set of Armor crafted from an Ancient Ingot from a Meteor dropped ages ago, touching it's tip sends a shiver through your spine").type('boots').tier('ancientarmor')

})
console.info('- - - Finished Loading Armor - - -')
