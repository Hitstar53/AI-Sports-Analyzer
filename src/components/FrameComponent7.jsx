import styles from "./FrameComponent7.module.css";

const FrameComponent7 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.background}>
          <div className={styles.backgroundChild} />
          <h1 className={styles.ageToGames}>Age to Games comparison</h1>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.parent}>
                  <b className={styles.b}>
                    <p className={styles.p}>20+</p>
                  </b>
                  <b className={styles.b1}>
                    <p className={styles.p}>20</p>
                  </b>
                  <b className={styles.b2}>18</b>
                  <b className={styles.b2}>12</b>
                  <div className={styles.wrapper}>
                    <b className={styles.b4}>
                      <p className={styles.p}>6</p>
                    </b>
                  </div>
                  <div className={styles.container}>
                    <b className={styles.b5}>0</b>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.lineParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <div className={styles.frameChild} />
                    <img
                      className={styles.linesIcon}
                      loading="lazy"
                      alt=""
                      src="/lines1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.cricketWrapper}>
                <b className={styles.cricket}>Cricket</b>
              </div>
              <div className={styles.footballWrapper}>
                <b className={styles.football}>Football</b>
              </div>
              <div className={styles.basketballWrapper}>
                <b className={styles.b}>
                  <p className={styles.p}>Basketball</p>
                </b>
              </div>
              <div className={styles.tennisWrapper}>
                <b className={styles.cricket}>Tennis</b>
              </div>
              <div className={styles.badmintonWrapper}>
                <b className={styles.badminton}>Badminton</b>
              </div>
              <div className={styles.cyclingWrapper}>
                <b className={styles.cricket}>Cycling</b>
              </div>
              <div className={styles.archeryWrapper}>
                <b className={styles.cricket}>Archery</b>
              </div>
              <div className={styles.gymnasticsParent}>
                <b className={styles.gymnastics}>Gymnastics</b>
                <b className={styles.wrestling}>Wrestling</b>
              </div>
              <div className={styles.carromWrapper}>
                <b className={styles.cricket}>Carrom</b>
              </div>
              <div className={styles.swimmingParent}>
                <b className={styles.swimming}>Swimming</b>
                <b className={styles.chess}>Chess</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mediumSatisfaction}>
        <h2 className={styles.title}>Majorly liked sport</h2>
        <div className={styles.mediumSatisfactionInner}>
          <div className={styles.frameParent2}>
            <div className={styles.progressBarParent}>
              <img
                className={styles.progressBarIcon}
                alt=""
                src="/progress-bar.svg"
              />
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <h1 className={styles.cricket1}>Cricket</h1>
            </div>
            <div className={styles.content}>
              <div className={styles.div}>0%</div>
              <div className={styles.frameParent3}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.group}>
                    <b className={styles.b6}>95%</b>
                    <div className={styles.div1}>100%</div>
                  </div>
                </div>
                <div className={styles.basedOnLikes}>Based on likes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
