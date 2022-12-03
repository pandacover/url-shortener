import axios from "axios";

const ENDPOINT = "https://api.shrtco.de/v2/shorten?url=";

export const shorten = async (URL: string): Promise<string> => {
	const response = await axios(ENDPOINT + URL);
	if (!response.data.ok) return Promise.reject(new Error("Invalid url"));
	return Promise.resolve(response.data.result.full_short_link);
};
