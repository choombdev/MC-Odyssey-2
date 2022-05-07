onEvent('recipes', event => {
    event.remove({id:"cgm:workbench"})
    event.shaped('cgm:workbench', [
        'OOO',
        'S S',
        'S S'
      ], {
        S: 'botania:manasteel_ingot',
        O: 'mekanism:block_refined_obsidian'
      
      })
})