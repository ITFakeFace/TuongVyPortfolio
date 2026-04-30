import styles from "./VanillaFilmStrip.module.scss";
const VanillaFilmStrip = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        <div className={styles.group}>
          <div className={styles.card}>1.1</div>
          <div className={styles.card}>1.2</div>
          <div className={styles.card}>1.3</div>
          <div className={styles.card}>1.4</div>
          <div className={styles.card}>1.5</div>
          <div className={styles.card}>1.6</div>
        </div>
        <div aria-hidden="true" className={styles.group}>
          <div className={styles.card}>2.1</div>
          <div className={styles.card}>2.2</div>
          <div className={styles.card}>2.3</div>
          <div className={styles.card}>2.4</div>
          <div className={styles.card}>2.5</div>
          <div className={styles.card}>2.6</div>
        </div>
      </div>
    </div>
  );
};

export default VanillaFilmStrip;
