import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Earn {activeChallenge.amount} XP</header>

                    <main>
                       <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type='button'
                            className={styles.challengeFailButton}
                            onClick={resetChallenge}
                        >
                            I failed
                        </button>
                        <button 
                            type='button'
                            className={styles.challengeCompletedButton}
                        >
                            I completed
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Start a cycle to receive challenges to complete</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Level up by completing challenges
                    </p>
                </div>
            ) }
        </div>
    );
}