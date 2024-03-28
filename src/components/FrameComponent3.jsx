import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.cricketParent}>
          <h2 className={styles.cricket}>CRICKET</h2>
          <img className={styles.frameChild} loading="lazy" alt="" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <div className={styles.iplSeasonIsHereParent}>
            <div className={styles.iplSeasonIs}>IPL season is here!!</div>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.cskWonThe}>
                  CSK won the 1st match against RCB
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.nextMatchWrapper}>
                  <div className={styles.nextMatch}>Next match :</div>
                </div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.dcVsKkr}>DC vs KKR</div>
                  <div className={styles.march24WankhedeContainer}>
                    <p className={styles.wankhedeStadiumMumbai}>25 March ‘24</p>
                    <p className={styles.wankhedeStadiumMumbai}>
                      Wankhede stadium, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.mdiarrowDownDropParent}>
              <img
                className={styles.mdiarrowDownDropIcon}
                loading="lazy"
                alt=""
                src="/mdiarrowdowndrop-1.svg"
              />
              <div className={styles.viewMore}>View More</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameChild1} />
          <div className={styles.lineParent}>
            <img className={styles.lineIcon} loading="lazy" alt="" />
            <div className={styles.achievements}>Achievements!!!</div>
          </div>
          <div className={styles.rcbWonTheWpl2024Parent}>
            <div className={styles.rcbWonThe}>RCB won the WPL 2024</div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild2} />
            <div className={styles.scoreTable}>Score Table</div>
            <div className={styles.scoreTableLabel}>
              <div className={styles.scoreTableLabelChild} />
              <div className={styles.teamScoreCard}>
                <div className={styles.teamName}>
                  <div className={styles.teamWon}>
                    <div className={styles.opponentName}>
                      <div className={styles.team}>Team</div>
                    </div>
                    <div className={styles.opponentName1}>
                      <div className={styles.team}>Won</div>
                    </div>
                    <div className={styles.lost}>Lost</div>
                    <div className={styles.points}>Points</div>
                  </div>
                </div>
                <img
                  className={styles.verticalDividerIcon}
                  loading="lazy"
                  alt=""
                />
                <div className={styles.achievementsLabel}>
                  <div className={styles.rCBLabel}>
                    <div className={styles.rcbParent}>
                      <div className={styles.rcb}>RCB</div>
                      <div className={styles.csk}>CSK</div>
                    </div>
                    <div className={styles.cSKLabel}>
                      <div className={styles.pointsScored}>
                        <div className={styles.div}>0</div>
                        <div className={styles.div}>1</div>
                      </div>
                    </div>
                    <div className={styles.gameStatsChild}>
                      <div className={styles.pointsScored}>
                        <div className={styles.div}>1</div>
                        <div className={styles.div}>0</div>
                      </div>
                    </div>
                    <div className={styles.gameStatsChild}>
                      <div className={styles.pointsScored}>
                        <div className={styles.div}>0</div>
                        <div className={styles.div}>1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.gameInsightsHeader}>
                <div className={styles.rCBLabel}>
                  <div className={styles.rcbParent}>
                    <div className={styles.dc}>DC</div>
                    <div className={styles.kKRLabel}>
                      <div className={styles.kkr}>KKR</div>
                    </div>
                  </div>
                  <div className={styles.cSKLabel}>
                    <div className={styles.pointsColumnParent}>
                      <div className={styles.div}>0</div>
                      <div className={styles.div}>0</div>
                    </div>
                  </div>
                  <div className={styles.gameStatsChild}>
                    <div className={styles.pointsColumnParent}>
                      <div className={styles.div}>0</div>
                      <div className={styles.div}>0</div>
                    </div>
                  </div>
                  <div className={styles.gameStatsChild}>
                    <div className={styles.pointsColumnParent}>
                      <div className={styles.div}>0</div>
                      <div className={styles.div}>0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
