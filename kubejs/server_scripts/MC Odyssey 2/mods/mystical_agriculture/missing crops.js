// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('recipes', e => {
    let seeds = ['choombium', 'gaia_spirit']
    function botanyPotsCrops(seed) {
      let recipe = {
        type: 'botanypots:crop',
        seed: { item: `mysticalagriculture:${seed}_seeds`},
        categories: ['dirt'],
        growthTicks: 1200,
        display: { block: `mysticalagriculture:${seed}`},
        results: [
          { chance: 0.7, output: { item: `mysticalagriculture:${seed}_essence` }, minRolls: 1, maxRolls: 1 },
          { chance: 0.05, output: { item: `mysticalagriculture:${seed}_seeds` }, minRolls: 1, maxRolls: 1 },
          { chance: 0.1, output: { item: `mysticalagriculture:fertilized_essence` }, minRolls: 1, maxRolls: 1 }
        ]
      }
      e.custom(recipe)
    }
    seeds.forEach(seed => botanyPotsCrops(seed))
  })