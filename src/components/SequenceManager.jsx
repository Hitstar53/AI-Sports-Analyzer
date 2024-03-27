import styles from "./SequenceManager.module.css";

const SequenceManager = () => {
  return (
    <div className={styles.sequenceManager}>
      <footer className={styles.background}>
        <div className={styles.backgroundChild} />
        <div className={styles.background1}>
          <div className={styles.backgroundItem} />
          <div className={styles.connectionHandler}>
            <div className={styles.dataFilter}>500</div>
            <div className={styles.dataFilter}>400</div>
            <div className={styles.dataFilter}>300</div>
            <div className={styles.dataFilter}>200</div>
            <div className={styles.dataFilter4}>100</div>
            <div className={styles.dataFilter5}>0</div>
          </div>
          <div className={styles.nestedLoop}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.functionChain}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.functionChain1}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.functionChain2}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.functionChain3}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.functionChain4}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.synchronizer}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.functionChain2}>
            <div className={styles.parallelProcess} />
          </div>
          <div className={styles.monitor}>
            <div className={styles.parallelProcess} />
          </div>
        </div>
        <div className={styles.compositeOperation}>
          <div className={styles.customFunction}>
            <h2 className={styles.activeUsers}>Active Users</h2>
            <div className={styles.dataTransformer}>
              <h3 className={styles.thanLastWeekContainer}>
                <b>(+23)</b>
                <span className={styles.thanLastWeek}> than last week</span>
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.errorReporter}>
          <div className={styles.cards}>
            <div className={styles.users}>
              <div className={styles.inputCollector}>
                <div className={styles.outputDistributor}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon-2.svg"
                  />
                  <div className={styles.controlFlow}>
                    <h3 className={styles.users1}>Users</h3>
                  </div>
                </div>
                <div className={styles.decisionTable}>
                  <b className={styles.functionLibrary}>32,984</b>
                </div>
              </div>
              <div className={styles.flowDiagram}>
                <img
                  className={styles.progressIcon}
                  loading="lazy"
                  alt=""
                  src="/progress.svg"
                />
              </div>
            </div>
            <div className={styles.users}>
              <div className={styles.frameParent}>
                <div className={styles.iconParent}>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/icon-3.svg"
                  />
                  <div className={styles.searchesWrapper}>
                    <h3 className={styles.searches}>Searches</h3>
                  </div>
                </div>
                <div className={styles.mWrapper}>
                  <b className={styles.functionLibrary}>2,42m</b>
                </div>
              </div>
              <div className={styles.progressWrapper}>
                <img
                  className={styles.progressIcon}
                  loading="lazy"
                  alt=""
                  src="/progress-1.svg"
                />
              </div>
            </div>
            <div className={styles.users}>
              <div className={styles.frameGroup}>
                <div className={styles.iconGroup}>
                  <img
                    className={styles.icon1}
                    loading="lazy"
                    alt=""
                    src="/icon-4.svg"
                  />
                  <div className={styles.surveysWrapper}>
                    <h3 className={styles.searches}>Surveys</h3>
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <b className={styles.functionLibrary}>2,400$</b>
                </div>
              </div>
              <div className={styles.progressWrapper}>
                <img
                  className={styles.progressIcon}
                  loading="lazy"
                  alt=""
                  src="/progress-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SequenceManager;
