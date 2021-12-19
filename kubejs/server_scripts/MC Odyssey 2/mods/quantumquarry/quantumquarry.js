// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading quantumquarry - -')

onEvent('recipes', event => {
    event.remove({output:'quantumquarryplus:quantum_quarry_plus'})
    event.shaped('quantumquarryplus:quantum_quarry_plus', [
        'ANA',
        'ESE',
        'ANA'
        ],{
         N: 'quantumquarryplus:endercell',
         E: 'minecraft:netherite_block',
         A: 'quantumquarryplus:quarry_framw',
         S: 'extendedcrafting:nether_star_block'
        }) 
        })
console.info('- - - Finished Loading quantumquarry - - -')