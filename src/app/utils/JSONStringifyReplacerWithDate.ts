import {DateTime} from 'luxon';

/**
 * Actually keep the timezone when stringifying the date
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const JSONStringifyReplacerWithDate = function (
	this: any,
	key: string,
	value: any,
) {
	if (this[key] instanceof Date) {
		return DateTime.fromJSDate(this[key]).toISO();
	}

	if (value === undefined) {
		return null;
	}

	return value;
};
