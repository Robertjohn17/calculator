import styles from "./App.module.css";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  );
};

export default App;
