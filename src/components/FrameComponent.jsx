import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    
    <div className={styles.frameParent}>
      <div className={styles.email}>
        <TextField
          className={styles.frameChild}
          placeholder="Email"
          variant="standard"
          sx={{
            "& .MuiInputBase-root": { height: "32px", fontSize: "25px" },
            "& .MuiInputBase-input": { color: "#fff" },
            width: "473px",
          }}
        />
      </div>
      <TextField
        className={styles.frameChild}
        placeholder="Password"
        variant="standard"
        sx={{
          "& .MuiInputBase-root": { height: "32px", fontSize: "25px" },
          "& .MuiInputBase-input": { color: "#fff" },
          width: "473px",
        }}
      />
      <div className={styles.confirmPasswordParent}>
        
        <TextField
        className={styles.frameChild}
        placeholder="Confirm Password"
        variant="standard"
        sx={{
          "& .MuiInputBase-root": { height: "32px", fontSize: "25px" },
          "& .MuiInputBase-input": { color: "#fff" },
          width: "473px",
        }}
      /> 
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
