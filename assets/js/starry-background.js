(function () {
  var canvas = document.getElementById('starry-bg');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var animationId;
  var stars = [];
  var shootingStars = [];
  var lastShootingStar = 0;

  function createStars() {
    var result = [];
    var numStars = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    for (var i = 0; i < numStars; i++) {
      result.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.8 + 0.4,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.1,
        driftY: (Math.random() - 0.5) * 0.1
      });
    }
    return result;
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = createStars();
  }

  function createShootingStar() {
    var side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    var startX, startY, endX, endY;

    switch (side) {
      case 0: // top
        startX = Math.random() * canvas.width;
        startY = -50;
        endX = startX + (Math.random() - 0.5) * 200;
        endY = canvas.height + 50;
        break;
      case 1: // right
        startX = canvas.width + 50;
        startY = Math.random() * canvas.height;
        endX = -50;
        endY = startY + (Math.random() - 0.5) * 200;
        break;
      case 2: // bottom
        startX = Math.random() * canvas.width;
        startY = canvas.height + 50;
        endX = startX + (Math.random() - 0.5) * 200;
        endY = -50;
        break;
      default: // left
        startX = -50;
        startY = Math.random() * canvas.height;
        endX = canvas.width + 50;
        endY = startY + (Math.random() - 0.5) * 200;
        break;
    }

    return {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY,
      currentX: startX,
      currentY: startY,
      progress: 0,
      speed: 0.02 + Math.random() * 0.01,
      opacity: 0.8 + Math.random() * 0.2,
      trail: []
    };
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var now = Date.now();
    if (now - lastShootingStar > 30000) {
      shootingStars.push(createShootingStar());
      lastShootingStar = now;
    }

    shootingStars = shootingStars.filter(function (star) {
      star.progress += star.speed;
      star.currentX = star.startX + (star.endX - star.startX) * star.progress;
      star.currentY = star.startY + (star.endY - star.startY) * star.progress;

      star.trail.push({
        x: star.currentX,
        y: star.currentY,
        opacity: star.opacity * (1 - star.progress)
      });
      if (star.trail.length > 20) star.trail.shift();

      ctx.strokeStyle = 'rgba(255, 255, 255, ' + (star.opacity * (1 - star.progress)) + ')';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(star.trail[0].x, star.trail[0].y);
      for (var i = 1; i < star.trail.length; i++) {
        ctx.lineTo(star.trail[i].x, star.trail[i].y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(star.currentX, star.currentY, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + (star.opacity * (1 - star.progress)) + ')';
      ctx.fill();

      return star.progress < 1;
    });

    stars.forEach(function (star) {
      star.twinklePhase += star.twinkleSpeed;
      var twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
      var currentOpacity = star.opacity * twinkle;

      star.x += star.driftX;
      star.y += star.driftY;

      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, ' + currentOpacity + ')';
      ctx.fill();

      if (star.radius > 1) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, ' + (currentOpacity * 0.1) + ')';
        ctx.fill();
      }
    });

    animationId = requestAnimationFrame(animate);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animate();

  window.addEventListener('beforeunload', function () {
    window.removeEventListener('resize', resizeCanvas);
    if (animationId) cancelAnimationFrame(animationId);
  });
})();
