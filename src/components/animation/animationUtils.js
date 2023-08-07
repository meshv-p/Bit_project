import gsap from 'gsap';
import { useRef, useEffect} from 'react';

//text appearing animation using gsap
export const SwipeRight = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    gsap.fromTo(element, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
  }, []);

  return textRef;
};

//number card count appearing animation using gsap
export const SwipeUp = () => {
  const numCardRef = useRef(null);

  useEffect(() => {
    const element = numCardRef.current;
    gsap.fromTo(element, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  return numCardRef;
};

//count appearing animation on scroll using gsap

