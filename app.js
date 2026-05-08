/* ============================================================
   Data Squid Labs — Hazard Intelligence
   Site JavaScript
   - Animated topographic background (canvas)
   - Scroll-reveal animations for sections
   ============================================================ */

   (function() {
    'use strict';

    // -----------------------------------------------------------
    // Animated topo grid background
    // -----------------------------------------------------------
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        resize();
    });

    // Off-center pulse focal point — same vibe as the app icon
    const focal = {
        x: () => width * 0.42,
        y: () => height * 0.55
    };

    let frame = 0;

    function drawTopo() {
        ctx.clearRect(0, 0, width, height);

        const fx = focal.x();
        const fy = focal.y();
        const ringCount = 16;
        const t = frame * 0.005;

        for (let i = 0; i < ringCount; i++) {
            const progress = i / (ringCount - 1);
            const baseRadius = 60 + progress * Math.max(width, height) * 0.6;

            // Color/alpha shift across rings
            let alpha;
            if (i < 3) {
                alpha = 0.18 - progress * 0.05;
            } else if (i < 9) {
                alpha = 0.08 - progress * 0.02;
            } else {
                alpha = 0.04;
            }

            ctx.strokeStyle = `rgba(255, 140, 0, ${alpha})`;
            ctx.lineWidth = i < 3 ? 1.5 : 1;
            ctx.beginPath();

            const segments = 100;
            for (let j = 0; j <= segments; j++) {
                const theta = (j / segments) * Math.PI * 2;
                // Animated warp — same DNA as the icon, but slower
                const warp1 = Math.sin(theta * 3 + progress * 2 + t) * 8;
                const warp2 = Math.sin(theta * 7 - progress * 3 + t * 1.3) * 4;
                const warp3 = Math.cos(theta * 2 + progress + t * 0.7) * 12;
                const radius = baseRadius + warp1 + warp2 + warp3;

                const x = fx + Math.cos(theta) * radius;
                const y = fy + Math.sin(theta) * radius;

                if (j === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }

        frame++;
        requestAnimationFrame(drawTopo);
    }

    // Pause animation when tab is hidden (saves battery)
    let animationActive = true;
    document.addEventListener('visibilitychange', () => {
        animationActive = !document.hidden;
        if (animationActive) drawTopo();
    });

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        drawTopo();
    } else {
        // Draw a single static frame
        drawTopo();
        animationActive = false;
    }

    // -----------------------------------------------------------
    // Scroll-reveal for sections
    // -----------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: just show everything
        revealElements.forEach(el => el.classList.add('visible'));
    }

})();