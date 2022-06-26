// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading WorldGenAdd- - -')

onEvent('worldgen.add', event => {
  event.addOre(ore => {
    ore.block = 'kubejs:choombium_ore'
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values =  ['minecraft:endstone']
    ore.biomes.blacklist = false
    ore.biomes.values = ['minecraft:the_end']
    ore.clusterMaxSize = 1 
    ore.clusterCount = 1
    ore.minHeight = 0 
    ore.maxHeight = 64 
    ore.squared = true 
    ore.chance = 10 
  })

  event.addOre(ore => {
    ore.block = 'minecraft:nether_quartz_ore'
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values =  ['minecraft:netherrack']
    ore.biomes.blacklist = false
    ore.biomes.values = ['minecraft:the_nether']
    ore.clusterMaxSize = 15 
    ore.clusterCount = 10
    ore.minHeight = 0 
    ore.maxHeight = 128 
    ore.squared = true 
    ore.chance = 25 
  })
  event.addOre(ore => {
    ore.block = 'astralsorcery:rock_crystal_ore'
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values =  ['minecraft:stone','minecraft:andesite','minecraft:diorite','minecraft:granite','minecraft:blackstone','create:limestone','quark:slate','quark:deepslate']
    ore.biomes.blacklist = true
    ore.biomes.values = ['minecraft:the_nether', "minecraft:the_end"]
    ore.clusterMaxSize = 1 
    ore.clusterCount = 5
    ore.minHeight = 0 
    ore.maxHeight = 128 
    ore.squared = true 
    ore.chance = 20 
  })

})

console.info('- - - Finished Loading WorldGenAdd - - -')
