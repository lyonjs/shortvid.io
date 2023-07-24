import React, {FormEvent, ReactNode} from 'react';

import {CopyUrlButton} from '../CopyUrlButton';
import {QueryParams} from '../utils/formatUrlWithQuery';

import {InputProps} from './input';
import {InputDateProps} from './inputDate';
import {SelectInputProps} from './selectInput';

import styles from '../../../styles/app/common/form.module.css';

export type formConfigProps = {
	[key: string]: {
		state: string | Date | undefined;
		setState: (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
		label: string;
		component:
			| React.FC<InputProps>
			| React.FC<InputDateProps>
			| React.FC<SelectInputProps>;
		placeholder?: string;
		options?: string[];
	};
};

export const Form: React.FC<{
	formConfig?: formConfigProps;
	encodedParams?: QueryParams;
	children?: ReactNode;
}> = ({formConfig, encodedParams, children}) => {
	return (
		<form className={styles.videoForm}>
			{formConfig && encodedParams && (
				<>
					{Object.keys(formConfig).map((value) => {
						const inputParams = formConfig[value];
						const Component = inputParams.component;
						const stateValue = inputParams.state as (string & Date) | undefined;

						return (
							<Component
								key={inputParams.label}
								value={stateValue}
								setValue={inputParams.setState}
								label={inputParams.label}
								placeholder={inputParams.placeholder}
								options={inputParams.options}
							/>
						);
					})}
					<CopyUrlButton urlParameters={encodedParams} />
				</>
			)}
			{children}
		</form>
	);
};
