import InputAggregator from "../components/InputAggregator";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import SequenceManager from "../components/SequenceManager";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  return (
    <div className={styles.adminPage}>
      <InputAggregator />
      <main className={styles.adminPageInner}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.welcomeHatimParent}>
              <h1 className={styles.welcomeHatim}>{`Welcome Hatim! `}</h1>
              <h1 className={styles.goAheadAnd}>
                Go ahead and see the insights!
              </h1>
            </div>
          </div>
          <FrameComponent7 />
          <FrameComponent6 />
          <SequenceManager />
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
