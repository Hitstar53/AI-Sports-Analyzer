import InputAggregator from "../components/InputAggregator";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <InputAggregator />
      <main className={styles.profilePageInner}>
        <section className={styles.frameParent}>
          <div className={styles.welcomeVanshikaParent}>
            <h2 className={styles.welcomeVanshika}>{`Welcome Vanshika! `}</h2>
            <div className={styles.helpUsKnow}>
              Help us know you and your interests!
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.whatIsYourAgeParent}>
                  <div className={styles.whatIsYour}>What is your age</div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.mdiarrowDownDropIcon}
                      alt=""
                      src="/mdiarrowdowndrop.svg"
                    />
                  </div>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.below8}>Below 8</div>
                  <div className={styles.yrs}>8-12 yrs</div>
                  <div className={styles.yrs1}>12-18 yrs</div>
                  <div className={styles.above18}>Above 18</div>
                </div>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.wouldYouLike}>
                  Would you like to get regular updates about your favourite
                  sports?
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.yes}>Yes</div>
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.yes}>No</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild2} />
              <div className={styles.whichSportsAreYouInteresteParent}>
                <div className={styles.whichSportsAre}>
                  Which sports are you interested in?
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent2}>
                    <div className={styles.mdicricketParent}>
                      <img
                        className={styles.mdicricketIcon}
                        alt=""
                        src="/mdicricket.svg"
                      />
                      <div className={styles.cricket}>Cricket</div>
                      <div className={styles.frameChild3} />
                      <img
                        className={styles.mditickCircleIcon}
                        loading="lazy"
                        alt=""
                        src="/mditickcircle.svg"
                      />
                    </div>
                    <div className={styles.frameParent3}>
                      <div className={styles.iconoirbasketballWrapper}>
                        <img
                          className={styles.iconoirbasketball}
                          alt=""
                          src="/iconoirbasketball.svg"
                        />
                      </div>
                      <div className={styles.basketball}>Basketball</div>
                      <div className={styles.frameChild4} />
                      <img
                        className={styles.mditickCircleIcon1}
                        alt=""
                        src="/mditickcircle.svg"
                      />
                    </div>
                    <div className={styles.footballParent}>
                      <div className={styles.football}>Football</div>
                      <div className={styles.frameChild5} />
                      <img
                        className={styles.ionfootballIcon}
                        loading="lazy"
                        alt=""
                        src="/ionfootball.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.mditennisParent}>
                    <img
                      className={styles.mditennisIcon}
                      loading="lazy"
                      alt=""
                      src="/mditennis.svg"
                    />
                    <div className={styles.frameChild6} />
                    <div className={styles.tennisWrapper}>
                      <div className={styles.tennis}>Tennis</div>
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <div className={styles.emojioneMonotonebadmintonWrapper}>
                      <img
                        className={styles.emojioneMonotonebadmintonIcon}
                        loading="lazy"
                        alt=""
                        src="/emojionemonotonebadminton.svg"
                      />
                    </div>
                    <div className={styles.frameChild7} />
                    <div className={styles.badminton}>Badminton</div>
                  </div>
                  <div className={styles.faSolidchessParent}>
                    <img
                      className={styles.faSolidchessIcon}
                      loading="lazy"
                      alt=""
                      src="/fasolidchess.svg"
                    />
                    <div className={styles.frameChild6} />
                    <div className={styles.chessWrapper}>
                      <div className={styles.chess}>Chess</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.mdiarrowDownDropParent}>
                  <img
                    className={styles.mdiarrowDownDropIcon1}
                    alt=""
                    src="/mdiarrowdowndrop.svg"
                  />
                  <div className={styles.viewMore}>View More</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
