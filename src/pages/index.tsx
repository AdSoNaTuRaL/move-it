import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Perfil';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home | move.it</title>
			</Head>

			<ExperienceBar />

			<section>
				<div>
					<Profile />
					<CompleteChallenges />
					<Countdown />
				</div>
				<div>

				</div>
			</section>
		</div>
	)
}
