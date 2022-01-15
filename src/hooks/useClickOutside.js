import { useEffect } from 'react';
import { useRef } from 'react';

const useClickOutside = (elementRef, callback, targetRef = { current: window }) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => {
      if (!elementRef.current?.contains(e.target)) {
        callbackRef.current(e);
      }
    };
    targetRef?.current?.addEventListener('mousedown', handler);

    return () => {
      targetRef?.current?.removeEventListener('mousedown', handler);
    };
  }, [elementRef, targetRef]);
};

export default useClickOutside;
