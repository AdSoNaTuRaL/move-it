import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown 
    } = useContext(CountdownContext);
    
    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');
  
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