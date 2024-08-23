import React, {FormEvent, ReactNode} from 'react';

import {CopyUrlButton} from '../CopyUrlButton';
import {
	dataForGenerationType,
	useGenerateVideo,
} from '../hooks/useGenerateVideo';
import {QueryParams} from '../utils/formatUrlWithQuery';

import {InputProps} from './input';
import {InputDateProps} from './inputDate';
import {RenderButton} from './RenderButton';
import {SelectInputProps} from './selectInput';

import styles from '../../../styles/app/components/form/form.module.css';

type FormInputTypes =
	| React.FC<InputProps>
	| React.FC<InputDateProps>
	| React.FC<SelectInputProps>;

export type FormConfigProps = {
	[key: string]: {
		state: string | Date | number | undefined;
		setState: (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
		label: string;
		component: FormInputTypes;
		placeholder?: string;
		type?: string;
		options?: (string | undefined)[];
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

	const handleSubmit = (event: React.MouseEvent<Element, MouseEvent>) => {
		event.preventDefault();
		getVideoLink();
	};

	return (
		<>
			<form className={styles.videoForm}>
				<div className={styles.inputs}>
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
								type={value.type}
							/>
						);
					})}
					{children}
				</div>
			</form>
			<RenderButton
				compositionId={compositionId}
				isLoading={isLoading}
				videoUrl={videoUrl}
				error={error}
				onSubmit={handleSubmit}
			/>
			{encodedParams && <CopyUrlButton urlParameters={encodedParams} />}
		</>
	);
};
