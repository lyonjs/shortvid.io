'use client';

import React, {SetStateAction, useState} from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import {Player} from '@remotion/player';

import {Carousel} from '../../../../remotion/compositions/templates/carousel/Carousel';
import {Code} from '../../../../src/app/Code';
import {RenderButton} from '../../../../src/app/forms/RenderButton';
import {useGenerateVideo} from '../../../../src/app/hooks/useGenerateVideo';
import {DefaultPropsTypes} from '../../../../src/app/types/template.types';

import styles from '../../../../styles/app/layout/main.module.css';

const defaultValues = {
	imageUrls: [
		'https://secure.meetupstatic.com/photos/event/a/9/9/9/highres_511003417.webp',
		'https://secure.meetupstatic.com/photos/event/4/a/c/7/highres_515299143.webp',
		'https://secure.meetupstatic.com/photos/event/a/8/1/1/highres_515983025.webp',
		'https://secure.meetupstatic.com/photos/event/a/8/0/b/highres_515983019.webp',
	],
	imageDuration: 90,
	logoUrl: '/images/showcases/lyonjs/lyonjsSquaredLogo.png',
};

export default function CarouselTemplate() {
	const [data, setData] = useState(defaultValues);
	const {getVideoLink, isLoading, videoUrl, error} = useGenerateVideo(
		data,
		'Carousel',
	);

	const handleSubmit = (event: React.MouseEvent<Element, MouseEvent>) => {
		event.preventDefault();
		getVideoLink();
	};

	return (
		<div className={styles.mainContent}>
			<section className={styles.videoContainer}>
				<h2>Carousel</h2>
				<Player
					autoPlay
					controls
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '16/9',
					}}
					durationInFrames={data.imageDuration * data.imageUrls.length}
					compositionWidth={800}
					compositionHeight={800}
					fps={30}
					component={Carousel}
					inputProps={data || defaultValues}
				/>
				<RenderButton
					compositionId="Carousel"
					isLoading={isLoading}
					videoUrl={videoUrl}
					error={error}
					onSubmit={handleSubmit}
				/>
				<JSONInput
					placeholder={defaultValues}
					theme="light_mitsuketa_tribute"
					locale={locale}
					colors={{
						string: '#7B2CBF',
					}}
					style={{
						body: {
							border: 'solid 3px #c77dff',
							borderRadius: '5px',
						},
					}}
					height="300px"
					width="100%"
					onChange={(event: {jsObject: SetStateAction<DefaultPropsTypes>}) => {
						setData(event.jsObject);
					}}
				/>
				<Code composition="Carousel" params={data || defaultValues} />
			</section>
		</div>
	);
}
