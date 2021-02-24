import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{leftMinute}</span>
                    <span>{rightMinute}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{leftSecond}</span>
                    <span>{rightSecond}</span>
                </div>
            </div>

            { hasFinished ? (
               <button
                    disabled
                    className={styles.countdownButton}
               >
                   Finished cycle
               </button> 
            ) : (
                <>
                    { isActive ? (
                        <button 
                            onClick={resetCountdown} 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        >
                            Quit cycle
                        </button>
                    ) : (
                        <button 
                            onClick={startCountdown} 
                            type="button" 
                            className={styles.countdownButton}
                        >
                            Start a cycle
                        </button>
                    ) } 
                </>
            ) }

                       
        </div>
    );
}