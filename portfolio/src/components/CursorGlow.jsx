import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;

        if (!glow) {
            return;
        }

        const prefersReducedMotion =
            window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

        const hasFinePointer =
            window.matchMedia(
                '(pointer: fine)'
            ).matches;

        if (prefersReducedMotion || !hasFinePointer) {
            glow.style.display = 'none';
            return;
        }

        let animationFrame;

        const handleMouseMove = (event) => {
            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(() => {
                glow.style.transform =
                    `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
            });
        };

        window.addEventListener(
            'mousemove',
            handleMouseMove,
            { passive: true }
        );

        return () => {
            cancelAnimationFrame(animationFrame);

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="cursor-glow"
            aria-hidden="true"
        />
    );
};

export default CursorGlow;
