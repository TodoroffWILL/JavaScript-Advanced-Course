function start(state, game) {
  game.createWizard(state.wizard);
  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
  const { wizard } = state;
  const { wizardElement } = game;
  game.createBug(state.bugStats);
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
