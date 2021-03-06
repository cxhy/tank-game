const {
  PADDLE_MARGIN_X,
  TANK_WIDTH,
  TANK_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT
} = require('./constants');

class Paddle {
  constructor(isLeft) {
    this.reset(isLeft);
  }

  reset(isLeft) {
    this.posX = isLeft ? PADDLE_MARGIN_X : (BOARD_WIDTH - TANK_WIDTH - PADDLE_MARGIN_X);
    this.posY = (BOARD_HEIGHT - TANK_HEIGHT) / 2;
    this.isUp = false;
    this.isDown = false;
    this.isLeft = isLeft;
    this.hp = 10;
  }
}

module.exports = Paddle;
