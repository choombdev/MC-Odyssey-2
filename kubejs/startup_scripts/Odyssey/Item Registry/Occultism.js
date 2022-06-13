// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('item.registry', event => {
  Rituals = ['lightningdragonsummon','firedragonsummon','icedragonsummon'];
  Rituals.forEach((item) => {
      event.create(item).type('occultism:ritual_dummy').group('KubeJS').texture('occultism:item/ritual_dummy').displayName(`Summon Random Dragon`);
  });
})
