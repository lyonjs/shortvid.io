type QueryParams = {
	[key: string]: string | number | undefined;
};

export const useFormatUrlWithQuery = (
	queryParams: QueryParams,
	path: string
) => {
	const queryString = Object.entries(queryParams)
		.filter(([key, value]) => value)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

	return `${path}?${queryString}`;
};
