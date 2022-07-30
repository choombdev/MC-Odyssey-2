// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.

onEvent('item.registry', event => {
    event.create('choomburgert1').displayName('§6Choomburger').tooltip("§6A Simple Choomburger family recipe from Choomb §5[TIER 1]")
    event.create('choomburgert2').displayName('§6Double Choomburger').tooltip("§6Choomburger but with double the ingredients §5[TIER 2]")
    event.create('choomburgert3').displayName('§4Ultimate Choomburger').tooltip("§6Mushrooms, Bacon, Mayonnaise, cheese and a secret ingredient turn a choomburger from delicious to impossibly good §5[Tier 3]")
    event.create('choomburgert4').displayName('§4Empowered Choomburger').tooltip("§6This Choomburger could be edible but I wouldn't advice eating it (Unless you want to glow or something) §5[Tier 4]")
  })


  onEvent('item.modification', event => {
    event.modify('kubejs:choomburgert1', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.hunger(16);
        food.fastToEat(true);
        food.saturation(1.2);
      })
    })

    event.modify('kubejs:choomburgert2', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.fastToEat(true);
        food.hunger(20);
        food.saturation(1.5);
      })
    })

    event.modify('kubejs:choomburgert3', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.hunger(35);
        food.saturation(2.0);
        food.fastToEat(true);
      })
    })

    event.modify('kubejs:choomburgert4', item => {
      item.setFoodProperties((food) => {
        food.meat(true);
        food.hunger(45);
        food.saturation(2.5);
        food.fastToEat(true);
        food.effect("minecraft:speed", 200, 1, 1);

      })
    })
  })
