type EncodedObject = Record<string, string>;

export const encodeObjectValues = (
	obj: Record<string, unknown>,
): EncodedObject => {
	const encodedObj: EncodedObject = {};
	for (const key in obj) {
		const value = obj[key];
		if (value != null || value != undefined) {
			encodedObj[key] = encodeURIComponent(value.toString());
		}
	}
	return encodedObj;
};
