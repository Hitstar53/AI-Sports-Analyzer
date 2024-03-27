import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.gameInsights}>Game Insights</div>
      <div className={styles.background}>
        <div className={styles.backgroundChild} />
        <div className={styles.background1}>
          <div className={styles.backgroundChild} />
          <div className={styles.background2}>
            <div className={styles.backgroundChild} />
            <b className={styles.ipl2024}>IPL 2024</b>
            <b className={styles.mean}>Mean</b>
            <b className={styles.avg}>Avg</b>
            <b className={styles.pbks}>PBKS</b>
            <b className={styles.srh}>SRH</b>
            <b className={styles.lsg}>LSG</b>
            <b className={styles.gt}>GT</b>
            <b className={styles.rr}>RR</b>
            <b className={styles.mi}>MI</b>
            <b className={styles.dc}>DC</b>
            <b className={styles.kkr}>KKR</b>
            <b className={styles.rcb}>RCB</b>
            <b className={styles.csk}>CSK</b>
            <b className={styles.avgPB}>0</b>
            <b className={styles.avgPB1}>2</b>
            <b className={styles.avgPB2}>4</b>
            <b className={styles.avgPB3}>6</b>
            <b className={styles.avgPB4}>8</b>
            <b className={styles.avgPB5}>10</b>
            <img
              className={styles.linesIcon}
              loading="lazy"
              alt=""
              src="/lines.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
