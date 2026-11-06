import { useEffect } from "react";

export function useSoccerFavicon() {
  useEffect(() => {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const context = canvas.getContext("2d");
    if (!icon || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let angle = 0;
    const draw = () => {
      if (document.hidden) return;
      context.clearRect(0, 0, 64, 64);
      context.save();
      context.translate(32, 32);
      context.rotate(motion.matches ? 0 : angle);
      context.font = '50px "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText("⚽", 0, 3);
      context.restore();
      icon.type = "image/png";
      icon.href = canvas.toDataURL("image/png");
      angle += Math.PI / 20;
    };
    draw();
    const timer = window.setInterval(draw, 150);
    return () => window.clearInterval(timer);
  }, []);
}