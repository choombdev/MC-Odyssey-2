// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('jei.hide.items', event => {
  // alkahestry_tome
  event.hide('xreliquary:alkahestry_tome')
  
  // Jetpacks
  event.hide(Item.of('ironjetpacks:wood_jetpack', '{Throttle:1.0d}'))
  event.hide(Item.of('ironjetpacks:copper_jetpack', '{Throttle:1.0d}'))
  event.hide(Item.of('ironjetpacks:stone_jetpack', '{Throttle:1.0d}'))
  
  // Chisel and Bits
  event.hide(Item.of('chiselsandbits:block_bit').ignoreNBT())
  // Facades
  event.hide(Item.of('appliedenergistics2:facade').ignoreNBT())
  
  // Tinker Tools
  event.hide(Item.of('#tconstruct:modifiable').ignoreNBT())
  
  // Draconium
  event.hide('draconicevolution:end_draconium_ore')
  event.hide('jaopca:bloodmagic_fragments.draconium')
  event.hide('jaopca:create_crushed_ores.draconium')
  event.hide('jaopca:silents_mechanisms_chunks.draconium')
  event.hide('draconicevolution:overworld_draconium_ore')
  event.hide('draconicevolution:nether_draconium_ore')
  
  // Silent 
  event.hide(Item.of('silents_mechanisms:canister').ignoreNBT())
  event.hide(Item.of('silentgems:soul_gem').ignoreNBT())

  // Fluid Container
  event.hide(Item.of('ftblibrary:fluid_container').ignoreNBT())

  // Mekanism Tanks
  event.hide(Item.of('mekanism:creative_chemical_tank').ignoreNBT())
  event.hide(Item.of('mekanism:creative_fluid_tank').ignoreNBT())

  // Mob Charm Fragment
  event.hide(Item.of('xreliquary:mob_charm_fragment').ignoreNBT())
  event.hide(Item.of('xreliquary:mob_charm_belt').ignoreNBT())

  // Spawn Eggs
  event.hide('/_spawn_egg$/')

  // Draconium
  event.hide('mysticalagriculture:awakened_draconium_seeds')
  event.hide('mysticalagriculture:draconium_seeds')
  event.hide('mysticalagriculture:draconium_essence')
  event.hide('mysticalagriculture:awakened_draconium_essence')
  
  // StructureAdventures
  event.hide({mod:'structuresadventures'})

  const RemoveItems = []

  AllMaterials.forEach((material) => {
    RemoveItems.push(
        'occultism:' + material + '_ingot',
        'occultism:' + material + '_ore',
        'occultism:' + material + '_dust',
        'occultism:' + material + '_nugget',
        'occultism:' + material + '_block',
        'immersiveengineering:ingot_' + material,
        'immersiveengineering:dust_' + material,
        'immersiveengineering:nugget_' + material,
        'immersiveengineering:stick_' + material,
        'mekanism:nugget_' + material,
        'mekanism:dust_' + material,
        'mekanism:ingot_' + material,
        'mekanism:block_' + material,
        'eidolon:ingot_' + material,
        'eidolon:nugget_' + material,
        'eidolon:block_' + material,
        'thermal:' + material + '_block'
    )});

      
  RemoveItems.forEach((item) => {
    if (!Item.of(item).isEmpty()) {
      event.hide(item)}});
});
onEvent('jei.add.items', event => {
  event.add(Item.of('mekanism:creative_chemical_tank'))
  event.add(Item.of('mekanism:creative_fluid_tank'))
  event.add(Item.of('xreliquary:mob_charm_belt'))
  event.add(Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'))

  // Spawn Eggs
  event.add('minecraft:cow_spawn_egg')
  event.add('minecraft:chicken_spawn_egg')
  event.add('minecraft:sheep_spawn_egg')
  event.add('minecraft:mooshroom_spawn_egg')
  event.add('minecraft:horse_spawn_egg')
  event.add('minecraft:bat_spawn_egg')
  event.add('minecraft:pig_spawn_egg')
  event.add('minecraft:slime_spawn_egg')
  event.add('minecraft:zombie_spawn_egg')
  event.add('minecraft:wither_skeleton_spawn_egg')
  event.add('minecraft:skeleton_spawn_egg')
  event.add('minecraft:piglin_spawn_egg')
  event.add('minecraft:creeper_spawn_egg')
  event.add('minecraft:spider_spawn_egg')
  event.add('minecraft:blaze_spawn_egg')
})


