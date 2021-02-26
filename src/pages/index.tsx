import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Profile } from '../components/Perfil';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export default function Home(props: HomeProps) {
	return (
		<ChallengesProvider 
			level={props.level} 
			currentExperience={props.currentExperience}
			challengesCompleted={props.challengesCompleted} 
		>
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
		</ChallengesProvider>
	)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengesCompleted: Number(challengesCompleted),
		}
	}
}
