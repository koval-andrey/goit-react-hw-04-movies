import styles from "./Layout.module.css";
import AppBar from "../appBar";

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <AppBar />
    {children}
  </div>
);
export default Layout;
