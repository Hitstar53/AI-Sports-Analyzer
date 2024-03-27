import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  return (
    <div className={styles.newsAndGameInsightsInner}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src="/rectangle-411@2x.png"
          />
          <div className={styles.gamesenseaiWrapper}>
            <div className={styles.gamesenseai}>GameSenseAi</div>
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
    </div>
  );
};

export default FrameComponent5;
