// This script was made by Choomb / YahiaTGF for MC Odyssey 2, reusing it without explicit permission is not allowed.
console.info('- - - Loading Choomburgers- - -')

onEvent('item.registry', event => {
    event.create('nonepizza').displayName('§6None Pizza with Left Beef').tooltip("§5The title says it all")
    event.create('choomburittob').displayName('§6Beef Choomburito').tooltip("§6The Delights of a Choomburger in Tortilla.")
    event.create('choomburittoc').displayName('§6Chicken Choomburito').tooltip("§6A Choomburrito but with Chicken, yum yum.")
    event.create('choomburittobe').displayName('§6Bean Choomburito').tooltip("§6Choomburrito for the vegan odyssers")
  })


  onEvent('item.modification', event => {
    event.modify('kubejs:nonepizza', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.hunger(25);
        food.fastToEat(false);
        food.saturation(2.0);
      })
    })
    event.modify('kubejs:choomburittobe', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.fastToEat(true);
        food.hunger(20);
        food.saturation(1.7);
      })
    })

    event.modify('kubejs:choomburittoc', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.fastToEat(true);
        food.hunger(20);
        food.saturation(1.5);
      })
    })

    event.modify('kubejs:choomburittob', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.hunger(30);
        food.saturation(2.0);
        food.fastToEat(true);
      })
    })
    })

console.info('- - - Finished Loading Choomburgers - - -')