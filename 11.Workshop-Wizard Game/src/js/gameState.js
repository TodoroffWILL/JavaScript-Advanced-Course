function initState() {
  let startX = Math.floor(Math.random() * 1000);
  let startY = Math.floor(Math.random() * 500);

  const state = {
    player: 'Doncho',
    gameOver: false,
    wizard: {
      width: 82,
      height: 100,
      posX: startX,
      posY: startY,
      speed: 10,
    },
    bugStats: {
      width: 50,
      height: 50,
      nextSpawnTimestamp: 0,
      maxSpawnInterval: 1500,
      speed: 5,
    },
    fireball: {
      width: 20,
      height: 20,
      speed: 15,
      nextSpawnTimestamp: 0,
      fireRate: 450,
    },
    keys: {
      KeyA: false,
      KeyD: false,
      KeyW: false,
      KeyS: false,
      Space: false,
    },
  };
  return state;
}
