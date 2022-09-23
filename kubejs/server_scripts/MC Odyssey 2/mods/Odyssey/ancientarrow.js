  onEvent("item.right_click", (event) => {
       if (event.item.id == 'kubejs:ancientarrow') {
        event.player.potionEffects.add("minecraft:strength", 600,10);
        event.player.potionEffects.add("minecraft:speed", 600,5);
        event.player.potionEffects.add("minecraft:resistance", 600,10);
        event.player.potionEffects.add("minecraft:haste", 600,10);


         event.player.tell(`You feel a surge of energy go through your body, the arrow has accepted you.`);
         event.player.addItemCooldown(event.item.id, 6000);
       }
  });
