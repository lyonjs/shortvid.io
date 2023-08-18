import Link from 'next/link';

import buttonStyles from '../../../../styles/app/common/buttons.module.css';
import styles from '../../../../styles/app/layout/landing/landing.module.css';

export const Github = () => {
	return (
		<section className={styles.github}>
			<h3>Open Github discussion</h3>
			<p>
				If you would like a showcase video for your event or if you have an idea
				of a new template, we can create them! All you have to do is open a
				discussion on our Github so that we can exchange with you about it.
			</p>
			<p>
				You can also create your own template and showcases yourself by forking
				the project, like that you will have access to all the templates already
				in the app in addition of your customs ones.
			</p>
			<Link
				href="https://github.com/lyonjs/shortvid.io/discussions"
				target="_blank"
				className={buttonStyles.btnText}
			>
				Open a discussion
			</Link>
		</section>
	);
};
