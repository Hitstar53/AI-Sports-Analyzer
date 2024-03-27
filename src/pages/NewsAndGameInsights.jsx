import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./NewsAndGameInsights.module.css";

const NewsAndGameInsights = () => {
  return (
    <div className={styles.newsAndGameInsights}>
      <FrameComponent5 />
      <div className={styles.newsAndGameInsightsChild} />
      <FrameComponent4 />
      <main className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <FrameComponent3 />
        <FrameComponent2 />
        <div className={styles.icbaselineCelebration} />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.lineDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
      </main>
    </div>
  );
};

export default NewsAndGameInsights;
