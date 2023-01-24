import styles from './videoCategory.module.scss';
import VideoTile from '../videoTile';

export default function VideoCategory({ category, items }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{category}</h3>
      <div className={styles.videosRow}>
        {items.map(video => (
          <VideoTile key={video.title} {...video} />
        ))}
      </div>
    </div>
  );
}
