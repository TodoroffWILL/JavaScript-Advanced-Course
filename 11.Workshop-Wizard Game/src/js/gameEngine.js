function start(state, game) {
  game.createWizard(state.wizard);
  window.requestAnimationFrame((timestamp) => gameLoop(state, game, timestamp));
}

function gameLoop(state, game, timestamp) {
  const { wizard } = state;
  const { wizardElement } = game;

  if (timestamp > state.bugStats.nextSpawnTimestamp) {
    game.createBug(state.bugStats);
    state.bugStats.nextSpawnTimestamp =
      timestamp + Math.random() * state.bugStats.maxSpawnInterval;
  }
  // Render bugs
  document.querySelectorAll('.bug').forEach((bug) => {
    let posX = parseInt(bug.style.left);
    bug.style.left = posX - state.bugStats.speed + 'px';
  });

  // Render
  modifyWizardPosition(state, game);
  wizardElement.style.left = wizard.posX + 'px';
  wizardElement.style.top = wizard.posY + 'px';
  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function modifyWizardPosition(state, game) {
  const { wizard } = state;

  if (state.keys.KeyD) {
    wizard.posX = Math.min(
      wizard.posX + wizard.speed,
      game.gameScreen.offsetWidth - wizard.width
    );
  }
  if (state.keys.KeyW && wizard.posY > 0) {
    wizard.posY = Math.max(wizard.posY - wizard.speed, 0);
  }
  if (state.keys.KeyS) {
    wizard.posY = Math.min(
      wizard.posY + wizard.speed,
      game.gameScreen.offsetHeight - wizard.height
    );
  }
  if (state.keys.KeyA) {
    wizard.posX = Math.max(wizard.posX - wizard.speed, 0);
  }
}
