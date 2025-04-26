import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
};

type UseInViewReturn = [React.RefObject<any>, boolean];

export function useInView({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false,
}: UseInViewOptions = {}): UseInViewReturn {
  const ref = useRef<Element | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        setIsInView(isElementInView);

        if (isElementInView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isInView];
}