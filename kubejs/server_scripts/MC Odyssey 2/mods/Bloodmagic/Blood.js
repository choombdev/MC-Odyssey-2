// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('recipes', event => {
event.recipes.createMixing(Fluid.of("bloodmagic:life_essence_fluid",100), [
    '32x eidolon:enchanted_ash',
    '12x tconstruct:blood_slime_ball' ,
    Fluid.of("industrialforegoing:essence", 2000)

  ]).superheated()

})