import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.getRegularUpdatesAndNewsWrapper}>
        <div className={styles.getRegularUpdates}>
          Get Regular Updates and news!
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.selectTheSport}>Select the sport</div>
          </div>
        </div>
        <img
          className={styles.mdiarrowDownDropIcon}
          loading="lazy"
          alt=""
          src="/mdiarrowdowndrop.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
