type ThrottleOptions = {
  leading?: boolean;
  trailing?: boolean;
};

export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  wait = 1000,
  options: ThrottleOptions = {}
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastCall = 0;
  let lastArgs: Parameters<T> | null = null;

  const { leading = true, trailing = true } = options;

  const invoke = (time: number, args: Parameters<T>) => {
    lastCall = time;
    fn(...args);
  };

  const later = () => {
    timeout = null;

    if (trailing && lastArgs) {
      invoke(Date.now(), lastArgs);
      lastArgs = null;
    }
  };

  return function (...args: Parameters<T>) {
    const now = Date.now();

    if (!lastCall && !leading) {
      // If leading is false, set lastCall to now so first call is delayed
      lastCall = now;
    }

    const remaining = wait - (now - lastCall);

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invoke(now, args);
    } else if (trailing) {
      lastArgs = args;
      if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
    }
  };
}
