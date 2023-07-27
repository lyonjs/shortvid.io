import React, {FormEvent, ReactNode} from 'react';

import {CopyUrlButton} from '../CopyUrlButton';
import {
	dataForGenerationType,
	useGenerateVideo,
} from '../hooks/useGenerateVideo';
import {QueryParams} from '../utils/formatUrlWithQuery';

import {GenerateButton} from './GenerateButton';
import {InputProps} from './input';
import {InputDateProps} from './inputDate';
import {SelectInputProps} from './selectInput';

import styles from '../../../styles/app/common/form.module.css';

type FormInputTypes =
	| React.FC<InputProps>
	| React.FC<InputDateProps>
	| React.FC<SelectInputProps>;

export type FormConfigProps = {
	[key: string]: {
		state: string | Date | undefined;
		setState: (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
		label: string;
		component: FormInputTypes;
		placeholder?: string;
		options?: string[];
	};
};

export const Form: React.FC<{
	compositionId: string;
	data: dataForGenerationType;
	formConfig: FormConfigProps;
	encodedParams?: QueryParams;
	children?: ReactNode;
}> = ({compositionId, data, formConfig, encodedParams, children}) => {
	const {getVideoLink, isLoading, videoUrl, error} = useGenerateVideo(
		data,
		compositionId,
	);

	const handleSubmit: React.FormEventHandler = (event) => {
		event.preventDefault();
		getVideoLink();
	};

	return (
		<>
			<form className={styles.videoForm} onSubmit={handleSubmit}>
				{Object.entries(formConfig).map(([key, value]) => {
					const InputComponent = value.component;
					const stateValue = value.state as (string & Date) | undefined;

					return (
						<InputComponent
							key={key}
							value={stateValue}
							setValue={value.setState}
							label={value.label}
							placeholder={value.placeholder}
							options={value.options}
						/>
					);
				})}
				{children}
				<GenerateButton
					compositionId={compositionId}
					isLoading={isLoading}
					videoUrl={videoUrl}
					error={error}
				/>
			</form>
			{encodedParams && <CopyUrlButton urlParameters={encodedParams} />}
		</>
	);
};
