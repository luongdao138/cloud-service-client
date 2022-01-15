import { useEffect } from 'react';

const useLockScreen = (dependency) => {
  useEffect(() => {
    const bodyEl = document.querySelector('body');
    if (dependency) {
      bodyEl.style.overflow = 'hidden';
    } else {
      bodyEl.style.overflow = 'visible';
    }
  }, [dependency]);
};

export default useLockScreen;
