import axios from "axios";
import { useCallback, useState } from "react";

const useAxios = () => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState();

	const sendRequest = useCallback(async (params, applyData) => {
		try {
			setLoading(true);
			const res = await axios.request(params);
			applyData(res.data);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { error, loading, sendRequest };
};

export default useAxios;
