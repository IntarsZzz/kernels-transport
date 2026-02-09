
import { useEffect, useRef, useState } from 'react';

// Hook for scroll-reveal animations
export const useScrollReveal = (threshold = 0.35) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => elements.forEach((el) => observer.unobserve(el));
    }, [threshold]);
};

// Hook for counting animation
export const useCounter = (end, duration = 2000, trigger = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, trigger]);

    return count;
};

// Hook for parallax effect
export const useParallax = (speed = 0.5) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset * speed);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return offset;
};
