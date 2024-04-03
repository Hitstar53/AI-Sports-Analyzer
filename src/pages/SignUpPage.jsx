import { TextField } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.signupPage}>
      <div className={styles.signupPageChild} />
      
      <img
        className={styles.signupPageItem}
        loading="lazy"
        alt=""
        src="/rectangle-41@2x.png"
      />
      <FrameComponent1 signUp="Sign Up" line7="pending_56:13" />
      
      <section className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <FrameComponent />
        </div>
        <b className={styles.welcomeIAmContainer}>
          <p
            className={styles.welcomeIAm}
          >{`Welcome! I am Tiddy and I am here to help you gain insights on your favourite sport! `}</p>
          <p className={styles.welcomeIAm}>
            Get news, analysis and various updates for your favourite sport
          </p>
        </b>
      </section>
    </div>
  );
};

export default SignUpPage;
