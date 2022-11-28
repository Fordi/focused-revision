import { useState, useEffect } from "react";

const useFetch = (url, { enabled, headers, ...options }) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!enabled) return;
        setLoading(true);
        const abort = new AbortController();
        (async () => {
            const response = await fetch(url, {
                ...options,
                signal: abort.signal,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setData(await response.json());
                setLoading(false);
            } else {
                try {
                    setError(await response.json());
                } catch (e) {
                    setError(e);
                }
                setLoading(false);
            }
        })();
        return () => abort.abort();
    }, [url, enabled]);
    return { data, error, loading };
};

export default useFetch;