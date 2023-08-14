import {ColorInput} from '../../src/app/forms/colorInput';
import {Input} from '../../src/app/forms/input';
import {InputDate} from '../../src/app/forms/inputDate';
import {SelectInput} from '../../src/app/forms/selectInput';
import {encodeObjectValues} from '../../src/app/utils/encodeObjectValues';

const backgroundColor = '#EA4345';
const title = 'Video Title';
const today = new Date();
const position = 'center';

export const formConfig = {
	backgroundColor: {
		state: backgroundColor,
		setState: jest.fn(),
		label: 'Background Color',
		component: ColorInput,
	},
	title: {
		state: title,
		setState: jest.fn(),
		label: 'Title',
		component: Input,
		placeholder: 'ex: example of title',
	},
	date: {
		state: today,
		setState: jest.fn(),
		label: 'Date',
		component: InputDate,
	},
	position: {
		state: position,
		setState: jest.fn(),
		label: 'Position',
		component: SelectInput,
		options: ['left', 'right', 'top', 'bottom', 'center'],
	},
};

export const formData = {
	backgroundColor,
	title,
	today,
	position,
};

export const encodedParams = encodeObjectValues(formData);
