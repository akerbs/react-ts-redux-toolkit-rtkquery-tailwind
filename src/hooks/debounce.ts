import { useEffect, useState } from 'react';

export function useDedounce(value: string, delay: number = 300) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
      const handler = setTimeout(() => setDebounced(value), delay)
      return () => clearTimeout(handler)
    }, [value, delay])

    return debounced
} 