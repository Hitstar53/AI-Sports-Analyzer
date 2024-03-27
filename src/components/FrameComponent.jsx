import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <TextField
        className={styles.frameChild}
        placeholder="Password"
        variant="standard"
        sx={{
          "& .MuiInputBase-root": { height: "42px", fontSize: "30px" },
          "& .MuiInputBase-input": { color: "#fff" },
          width: "473px",
        }}
      />
      <div className={styles.confirmPasswordParent}>
        <div className={styles.confirmPassword}>Confirm Password</div>
        <div className={styles.frameItem} />
      </div>
      <b className={styles.alreadyHaveAnContainer}>
        <span className={styles.alreadyHaveAn}>Already have an account?</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.login}>Login</span>
      </b>
    </div>
  );
};

export default FrameComponent;
