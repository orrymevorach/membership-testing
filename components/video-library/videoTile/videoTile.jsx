import styles from './videoTile.module.scss';

export default function VideoTile({ image, url, title }) {
  return (
    <div
      className={styles.tile}
      style={{ backgroundImage: `url(${image.url})` }}
    >
      <div className={styles.overlay}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
