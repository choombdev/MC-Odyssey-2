onEvent('item.tags', event => {
    event.get('curios:curio').add('kubejs:medalliont1');
    event.get('curios:curio').add('kubejs:medalliont2');
    event.get('curios:curio').add('kubejs:medalliont3');
    event.get('curios:curio').add('kubejs:medalliont4');
    event.get('curios:curio').add('kubejs:medalliont5');
    event.get('curios:curio').add('kubejs:medalliont6');
    event.get('curios:curio').add('kubejs:medalliont7');


  });
  onEvent("item.right_click", (event) => {
    if (event.item.id == 'kubejs:medalliont1') {
     event.player.potionEffects.add("minecraft:strength", 600);
      event.player.tell(`You are embued with the Power of the Bounty Hunter`);
      event.player.addItemCooldown(event.item.id, 6000);
    }

    if (event.item.id == 'kubejs:medalliont2') {
        event.player.potionEffects.add("minecraft:strength", 600,1);
         event.player.tell(`You are embued with the Power of the Bounty Hunter`);
         event.player.addItemCooldown(event.item.id, 6000);
       }

       if (event.item.id == 'kubejs:medalliont3') {
        event.player.potionEffects.add("minecraft:strength", 600,2);
        event.player.potionEffects.add("minecraft:speed", 600);
         event.player.tell(`You are embued with the Power of the Bounty Hunter`);
         event.player.addItemCooldown(event.item.id, 6000);
       }

       if (event.item.id == 'kubejs:medalliont4') {
        event.player.potionEffects.add("minecraft:strength", 600,3);
        event.player.potionEffects.add("minecraft:speed", 600,2);

         event.player.tell(`You are embued with the Power of the Bounty Hunter`);
         event.player.addItemCooldown(event.item.id, 6000);
       }
       if (event.item.id == 'kubejs:medalliont5') {
        event.player.potionEffects.add("minecraft:strength", 600,3);
        event.player.potionEffects.add("minecraft:speed", 600,2);
        event.player.potionEffects.add("minecraft:resistance", 600,1);

         event.player.tell(`You are embued with the Power of the Bounty Hunter`);
         event.player.addItemCooldown(event.item.id, 6000);
       }

       if (event.item.id == 'kubejs:medalliont6') {
        event.player.potionEffects.add("minecraft:strength", 600,4);
        event.player.potionEffects.add("minecraft:speed", 600,3);
        event.player.potionEffects.add("minecraft:resistance", 600,2);

         event.player.tell(`You are embued with the Power of the Bounty Hunter`);
         event.player.addItemCooldown(event.item.id, 6000);
       }
       if (event.item.id == 'kubejs:medalliont7') {
        event.player.potionEffects.add("minecraft:strength", 600,4);
        event.player.potionEffects.add("minecraft:speed", 600,3);
        event.player.potionEffects.add("minecraft:resistance", 600,4);

         event.player.tell(`You are embued with the Power of the Bounty Hunter`);
         event.player.addItemCooldown(event.item.id, 6000);
       }
  });
