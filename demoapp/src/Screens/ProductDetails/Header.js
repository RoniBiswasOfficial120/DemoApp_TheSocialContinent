import * as React from "react";
import { makeStyles } from "@mui/styles";

const ComponentStyles = makeStyles(() => ({
  headerMainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 24px",
    boxSizing: "border-box",
  },
}));

export default function SearchAppBar() {
  const styles = ComponentStyles();
  return (
    <div className={styles.headerMainContainer}>
      <div>App Logo</div>
      <input placeholder="Search..." className="searchInput" />
    </div>
  );
}
