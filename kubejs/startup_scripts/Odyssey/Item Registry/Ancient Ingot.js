// This script was made by Choomb for MC Odyssey 2, reusing it without explicit permission is not allowed.
onEvent('item.registry', event => {
    event.create('ancientingot').displayName('Ancient Ingot').maxStackSize(16).tooltip("An Ancient Ingot from a Meteor dropped ages ago, touching it causes it to violently vibrate")
})
onEvent('block.registry', event => {
    event.create('ancientblock').displayName('Ancient Block').maxStackSize(16).tooltip("A Compressed form of the Ancient Ingot, highly unstable.").material('obsidian').hardness(50)

  })

