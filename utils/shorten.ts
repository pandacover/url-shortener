import axios from "axios";

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT || "";

export const shorten = async (URL: string): Promise<string> => {
	const response = await axios(ENDPOINT + URL);
	if (!response.data.ok) return Promise.reject(new Error("Invalid url"));
	return Promise.resolve(response.data.result.full_short_link);
};
