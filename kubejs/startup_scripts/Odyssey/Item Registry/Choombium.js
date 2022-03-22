// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Choombium- - -')

onEvent('block.registry', event => {
  event.create('choombium_block').material('iron').hardness(5).displayName('Choombium Block')
  event.create('choombium_ore').material('rock').hardness(3).displayName('Choombium Ore')

})


onEvent('item.registry.tool_tiers', event => {
  event.add('choombium_item', tier => {
    tier.uses = 5000
    tier.speed = 12
    tier.attackDamageBonus = 6
    tier.level = 5
    tier.enchantmentValue = 30
    tier.repairIngredient = 'kubejs:choombium_ingot'
  })
})

onEvent('item.registry.armor_tiers', event => {
  event.add('choombium', tier => {
    tier.durabilityMultiplier = 150
    tier.slotProtections = [8, 15, 10, 8]
    tier.enchantmentValue = 30
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'kubejs:choombium_ingot'
    tier.toughness = 6.0
    tier.knockbackResistance = 0.5
  })
})

onEvent('item.registry', event => {
  event.create('choombium_ingot').displayName('Choombium Ingot')

  event.create('choombium_blade').displayName('Choombium Blade').type('sword').tier('choombium_item')
  event.create('choombium_shovel').displayName('Choombium Shovel').type('shovel').tier('choombium_item')
  event.create('choombium_pickaxe').displayName('Choombium Pickaxe').type('pickaxe').tier('choombium_item')
  event.create('choombium_axe').displayName('Choombium Axe').type('axe').tier('choombium_item')

  event.create('choombium_helmet').displayName('Choombium Helmet').type('helmet').tier('choombium')
  event.create('choombium_chestplate').displayName('Choombium Chestplate').type('chestplate').tier('choombium')
  event.create('choombium_leggings').displayName('Choombium Leggings').type('leggings').tier('choombium')
  event.create('choombium_boots').displayName('Choombium Boots').type('boots').tier('choombium')
})




console.info('- - - Finished Loading Choombium - - -') 