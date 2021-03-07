import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengersContexts';
import styles from '../Styles/components/CompletedChallenges.module.css'
export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  
  return(
    <div className={styles.completedChallengesContainer}>
      
        <span>Desafios completos</span>
        <span>{challengesCompleted}</span>
      
    </div>
  );
}