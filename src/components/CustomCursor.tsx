import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updatePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const target = e.target as Element;
        
        // Magnetic effect for buttons and links
        if (target instanceof HTMLElement && target.matches('button, a, [role="button"]')) {
          const rect = target.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = clientX - centerX;
          const deltaY = clientY - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const strength = (maxDistance - distance) / maxDistance;
            const moveX = deltaX * strength * 0.3;
            const moveY = deltaY * strength * 0.3;
            target.style.transform = `translate(${moveX}px, ${moveY}px)`;
          } else {
            target.style.transform = '';
          }
        }

        setPosition({ x: clientX, y: clientY });
        setTarget(target);
      });
    };

    const updateTouchPosition = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        requestAnimationFrame(() => {
          setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        });
      }
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as Element;
      const isClickable = target instanceof HTMLElement && target.matches('button, a, input, textarea, select, [role="button"]');
      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleTouchStart = () => setIsClicking(true);
    const handleTouchEnd = () => setIsClicking(false);

    // Reset transform on mouseleave
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target instanceof HTMLElement && target.matches('button, a, [role="button"]')) {
        target.style.transform = '';
      }
    };

    if (!isMobile) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseover', updateHoverState);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseleave', handleMouseLeave);
    } else {
      document.addEventListener('touchmove', updateTouchPosition);
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mouseover', updateHoverState);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseleave', handleMouseLeave);
      } else {
        document.removeEventListener('touchmove', updateTouchPosition);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        willChange: 'transform',
        mixBlendMode: target instanceof HTMLElement && target.matches('button, a, [role="button"]') ? 'difference' : 'normal'
      }}
    />
  );
}