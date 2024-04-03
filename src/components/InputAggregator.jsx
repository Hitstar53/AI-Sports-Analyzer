import styles from "./InputAggregator.module.css";

const InputAggregator = () => {
  return (
    <header className={styles.inputAggregator}>
      <div className={styles.inputAggregatorChild} />
        <div className={styles.outputProcessor}>
          <img
            className={styles.outputProcessorChild}
            loading="lazy"
            alt=""
            src="/rectangle-411@2x.png"
          />
          <div className={styles.gamesenseaiWrapper}>
            <h1 className={styles.gamesenseai}>GameSenseAi</h1>
          </div>
        </div>
        <div className={styles.icbaselineMenuWrapper}>
        <img
          className={styles.icbaselineMenuIcon}
          loading="lazy"
          alt=""
          src="/icbaselinemenu.svg"
        />
      </div>
    </header>
  );
};

export default InputAggregator;
