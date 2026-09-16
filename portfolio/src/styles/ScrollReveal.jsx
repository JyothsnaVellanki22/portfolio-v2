import React, { useEffect, useRef } from 'react';

const ScrollReveal = ({
    children,
    className = '',
    delay = 0,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        const prefersReducedMotion =
            window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

        if (prefersReducedMotion) {
            element.classList.add('visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('visible');
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
