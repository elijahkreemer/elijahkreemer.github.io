$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 200, 20, "red");
    createPlatform(500, 570, 200, 20, "red");
    createPlatform(650, 300, 200, 20, "red");
    createPlatform(400, 450, 200, 20, "red");
    createPlatform(800, 500, 200, 20, "red");
    createPlatform(200, 400, 200, 20, "red");
    createPlatform(1000, 200, 200, 20, "red");
    createPlatform(1200, 650, 200, 20, "red");
    createPlatform(550, 350, 150, 10, "red");


    // TODO 3 - Create Collectables
    createCollectable("metalSonic", 300, 350, 0.5, 1);
    createCollectable("redDiamond", 500, 500, 0.5, 1);
    createCollectable("purpleDiamond", 1100, 100, 1.0, 1);
    createCollectable("blueStar", 1200, 600, 1.0, 1);
    createCollectable("sonicRing",900, 450, 0.5, 1);
    

    // TODO 4 - Create Cannons
    createCannon("left", 450, 2000);
    createCannon("bottom", 350, 2000);
    createCannon("top", 800, 450);
    createCannon("right", 150, 3000);
    createCannon("top", 1250, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
