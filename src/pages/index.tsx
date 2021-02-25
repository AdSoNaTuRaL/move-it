import Head from 'next/head';

import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Profile } from '../components/Perfil';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Home | move.it</title>
			</Head>

			<ExperienceBar />

			<CountdownProvider>
				<section>
					<div>
						<Profile />
						<CompleteChallenges />
						<Countdown />
					</div>
					<div>
						<ChallengeBox />
					</div>
				</section>
			</CountdownProvider>
		</div>
	)
}
