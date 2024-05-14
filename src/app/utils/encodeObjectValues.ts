import {DateTime} from 'luxon';

type EncodedObject = Record<string, string | undefined>;

export const encodeObjectValues = (
	obj: Record<string, unknown>,
): EncodedObject => {
	const encodedObj: EncodedObject = {};

	for (const key in obj) {
		const value = obj[key];
		const isDefinedValue = value !== undefined && value !== null;

		if (isDefinedValue && value instanceof Date) {
			encodedObj[key] = encodeURIComponent(
				DateTime.fromJSDate(value).toISO() || value.toString(),
			);
			continue;
		}

		encodedObj[key] = isDefinedValue
			? encodeURIComponent(value.toString())
			: undefined;
	}

	return encodedObj;
};
