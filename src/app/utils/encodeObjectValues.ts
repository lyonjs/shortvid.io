type EncodedObject = Record<string, string | undefined>;

export const encodeObjectValues = (
	obj: Record<string, unknown>,
): EncodedObject => {
	const encodedObj: EncodedObject = {};

	for (const key in obj) {
		const value = obj[key];
		const isDefinedValue = value !== undefined && value !== null;

		encodedObj[key] = isDefinedValue
			? encodeURIComponent(value.toString())
			: undefined;
	}

	return encodedObj;
};
