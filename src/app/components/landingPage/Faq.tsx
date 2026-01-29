'use client';

import {useState} from 'react';

import {FAQ} from '../../../data/config/landingPageConfig';

import styles from '../../../../styles/app/layout/landing/faq.module.css';

export const Faq = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className={styles.faq}>
			<h2>Frequently Asked Questions</h2>
			<div className={styles.list}>
				{FAQ.map(({question, answer}, index) => (
					<div
						key={question}
						className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
					>
						<button
							className={styles.question}
							onClick={() => toggleItem(index)}
							aria-expanded={openIndex === index}
						>
							<span>{question}</span>
							<span className={styles.icon} aria-hidden="true">
								{openIndex === index ? '−' : '+'}
							</span>
						</button>
						<div className={styles.answer}>
							<p>{answer}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
