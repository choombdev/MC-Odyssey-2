
// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', event => {
event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:lava_gen"}'), [
  'SAS',
  'SBS',
  'AAA'
], {
  S: 'silents_mechanisms:heating_element',
  A: 'emendatusenigmatica:cast_iron_block',
  B: 'mekanism:basic_fluid_tank'
})

event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:flux"}'), [
  'SSS',
  'XBX',
  'AAA'
], {
  S: 'mekanism:block_refined_obsidian',
  A: 'cyclic:unbreakable_block',
  X: 'pneumaticcraft:compressed_iron_gear',
  B: 'industrialforegoing:machine_frame_simple'
})
})