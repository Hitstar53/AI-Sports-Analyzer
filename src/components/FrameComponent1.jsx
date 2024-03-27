import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ signUp, line7 }) => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.signUpParent}>
        <div className={styles.signUp}>
          <h2 className={styles.signUp1}>{signUp}</h2>
        </div>
        <img className={styles.frameChild} loading="lazy" alt="" src={line7} />
      </div>
      <div className={styles.gameSenseAi}>
        <h2 className={styles.gamesenseai}>GameSenseAi</h2>
      </div>
    </section>
  );
};

export default FrameComponent1;
