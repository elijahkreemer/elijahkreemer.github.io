var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp", // lvl 1
        number: 1,// lvl number
        speed: -3,// lvl speed
        gameItems: [
          { type: "sawblade", x: 500, y: groundY - 125, damage: 10, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 750, y: groundY, damage: 10, image: "img/lightsaber.png", rotate: 0, scale: 0.5, offsetX: -10, offsetY: -15},// obstacles#2
          { type: "sawblade", x: 1000, y: groundY - 125, damage: 15, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "enemy", x: 400, y: groundY - 50, speed: -3, image: "img/robot enemy (1).png", offsetX: -100, offsetY: -100, scale: 1},// enemy#1
          { type: "enemy", x: 1500, y: groundY - 50, speed: -2, image: "img/robot enemy (1).png", offsetX: -100, offsetY: -100, scale: 1},// enemy#1
          { type: "enemy", x: 1800, y: groundY - 50, speed: -3, image: "img/robot enemy (1).png", offsetX: -100, offsetY: -100, scale: 1},//enemy#1
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/repair (1).png", scale: 0.4, offsetX: -30, offsetY: -30},// reward 1
          { type: "reward", x: 1500, y: groundY - 75, speed: -3, image: "img/robot reward.png", scale: 0.3, offsetX: -28, offsetY: -28},//reward 2
          { type: "marker", x: 2000, y: groundY - 75, speed: -3, image: "img/core.png", scale: 0.5, offsetX: -45, offsetY: -45},// next level mark
          
           
        ],
      },
      {
        name: "Robot Rampage", // lvl 2
        number: 2,// lvl number
        speed: -3,// lvl speed
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 5, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 600, y: groundY, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 900, y: groundY, damage: 6, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1100, y: groundY, damage: 10, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "enemy", x: 1500, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 800, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/repair (1).png", scale: 0.4, offsetX: -30, offsetY: -30},// reward 1
          { type: "reward", x: 1500, y: groundY - 75, speed: -3, image: "img/robot reward.png", scale: 0.3, offsetX: -28, offsetY: -28},//reward 2
          { type: "marker", x: 2000, y: groundY - 75, speed: -3, image: "img/core.png", scale: 0.5, offsetX: -45, offsetY: -45},// next level mark
        ],
      },
       {
        name: "Robot Hunt", // lvl 3
        number: 3,// lvl number
        speed: -3,// lvl speed
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 10, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 600, y: groundY, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 900, y: groundY, damage: 20, image: "img/lightsaber.png", rotate: 0, scale: 0.7, offsetX: -10, offsetY: -15},// obstacles#2
          { type: "sawblade", x: 500, y: groundY - 125, damage: 10, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 800, y: groundY - 125, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1000, y: groundY - 125, damage: 50, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "enemy", x: 1500, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 800, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 1000, y: groundY - 50, speed: -6, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 1800, y: groundY - 50, speed: -8, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "reward", x: 1200, y: groundY - 75, speed: -3, image: "img/repair (1).png", scale: 0.4, offsetX: -30, offsetY: -30},// reward 1
          { type: "reward", x: 1700, y: groundY - 75, speed: -3, image: "img/robot reward.png", scale: 0.3, offsetX: -28, offsetY: -28},//reward 2
          { type: "marker", x: 2000, y: groundY - 75, speed: -3, image: "img/core.png", scale: 0.5, offsetX: -45, offsetY: -45},// next level mark
        ],
      },
      {
        name: "Robot Guard", // lvl 4
        number: 4,// lvl number
        speed: -3,// lvl speed
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 10, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "sawblade", x: 600, y: groundY, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 900, y: groundY, damage: 17, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1500, y: groundY, damage: 13, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "sawblade", x: 1100, y: groundY, damage: 15, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1300, y: groundY, damage: 30, image: "img/lightsaber.png", rotate: 0, scale: 0.5, offsetX: -10, offsetY: -15},// obstacles#2
          { type: "sawblade", x: 1700, y: groundY, damage: 19, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "enemy", x: 900, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 1200, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 1600, y: groundY - 50, speed: -6, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 1900, y: groundY - 50, speed: -8, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 1200, y: groundY - 50, speed: -3, image: "img/robot enemy (1).png", offsetX: -100, offsetY: -100, scale: 1},// enemy#1
          { type: "enemy", x: 1500, y: groundY - 50, speed: -3, image: "img/robot enemy (1).png", offsetX: -100, offsetY: -100, scale: 1},// enemy#1
          { type: "reward", x: 1900, y: groundY - 75, speed: -3, image: "img/repair (1).png", scale: 0.4, offsetX: -30, offsetY: -30},// reward 1
          { type: "reward", x: 1750, y: groundY - 75, speed: -3, image: "img/robot reward.png", scale: 0.3, offsetX: -28, offsetY: -28},//reward 2
          { type: "marker", x: 3000, y: groundY - 75, speed: -3, image: "img/core.png", scale: 0.5, offsetX: -45, offsetY: -45},// next level mark
        ],
      },
      {
        name: "Robot Lion Fight", // lvl 5: boss fight
        number: 5,// lvl number
        speed: -3,// lvl speed
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 10, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "sawblade", x: 600, y: groundY, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 900, y: groundY, damage: 20, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 500, y: groundY - 125, damage: 10, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 800, y: groundY - 125, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1000, y: groundY, damage: 50, image: "img/lightsaber.png", rotate: 0, scale: 0.5, offsetX: -10, offsetY: -15},// obstacles#2
          { type: "sawblade", x: 1200, y: groundY - 125, damage: 50, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1500, y: groundY - 125, damage: 50, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "enemy", x: 1000, y: groundY - 50, speed: -6, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 1800, y: groundY - 50, speed: -8, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 1300, y: groundY - 50, speed: -6, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 1500, y: groundY - 50, speed: -6, image: "img/robot cat.png", offsetX: -15, offsetY: -15, scale: 0.4},// enemy#3
          { type: "enemy", x: 3000, y: groundY - 50, speed: -7, image: "img/robot lion.png", offsetX: -100, offsetY: -100, scale: 1},// boss#1
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/repair (1).png", scale: 0.4, offsetX: -30, offsetY: -30},// reward 1
          { type: "reward", x: 1700, y: groundY - 75, speed: -3, image: "img/robot reward.png", scale: 0.3, offsetX: -28, offsetY: -28},//reward 2
          { type: "marker", x: 3000, y: groundY - 75, speed: -3, image: "img/core.png", scale: 0.5, offsetX: -45, offsetY: -45},// next level mark
        ],
      },
    {
        name: "Boss Fight, Dinosuar", // lvl 6: dino boss
        number: 6,// lvl number
        speed: -3,// lvl speed
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 5, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 600, y: groundY, damage: 8, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 900, y: groundY, damage: 6, image: "img/sawblade.png", rotate: 30, scale: 1, offsetX: -25, offsetY: -25},// obstacles#1
          { type: "sawblade", x: 1000, y: groundY, damage: 10, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "sawblade", x: 1300, y: groundY, damage: 10, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "sawblade", x: 1700, y: groundY, damage: 10, image: "img/spike.png", rotate: 0, scale: 0.5, offsetX: -50, offsetY: -90},// obstacles#3
          { type: "enemy", x: 1500, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 800, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 1800, y: groundY - 50, speed: -5, image: "img/robot wolf.png", offsetX: -50, offsetY: -50, scale: 0.6},// enemy#2
          { type: "enemy", x: 2000, y: groundY - 50, speed: -6, image: "img/robot dinosuar.png", offsetX: -50, offsetY: -50, scale: 1},// boss#2
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/repair (1).png", scale: 0.4, offsetX: -30, offsetY: -30},// reward 1
          { type: "reward", x: 1500, y: groundY - 75, speed: -3, image: "img/robot reward.png", scale: 0.3, offsetX: -28, offsetY: -28},//reward 2
          { type: "marker", x: 2500, y: groundY - 75, speed: -3, image: "img/core.png", scale: 0.5, offsetX: -45, offsetY: -45},// next level mark
        ],
      },
    
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
