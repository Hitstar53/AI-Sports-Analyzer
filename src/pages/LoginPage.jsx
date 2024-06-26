import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPageChild} />
      
      <img
        className={styles.loginPageInner}
        loading="lazy"
        alt=""
        src="/rectangle-41@2x.png"
      />
      <FrameComponent1 signUp="Log In" line7="pending_44:16" />
      <div className={styles.email}>
        <TextField
          className={styles.passwordLabel}
          placeholder="Email"
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "32px", fontSize: "25px" },
            "& .MuiInputBase-input": { color: "#fff" },
            width: "473px",
          }}
        />
      </div>
      <section className={styles.frameParent}>
        <div className={styles.forgotPasswordLinkWrapper}>
          <div className={styles.forgotPasswordLink}>
            <TextField
              className={styles.passwordLabel}
              placeholder="Password"
              variant="standard"
              sx={{
                "& .MuiInputBase-root": { height: "32px", fontSize: "25px" },
                "& .MuiInputBase-input": { color: "#fff" },
                width: "473px",
              }}
            />
            <b className={styles.dontHaveAnContainer}>
              <span className={styles.dontHaveAn}>Don’t have an account?</span>
              <span className={styles.span}>{` `}</span>
              <br></br>
              <span className={styles.signUp}>Sign Up</span>
            </b>
          </div>
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

export default LoginPage;
