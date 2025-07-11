import { useState } from "react";
import { toast } from "sonner";

export const useFetch = (cb: any) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fn = async (...args: any) => {
        setLoading(true);
        setError('');

        try {
            const response = await cb(...args);
            setData(response);
            setError('');
        } catch (error: any) {
            setError(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fn, setData };
};

