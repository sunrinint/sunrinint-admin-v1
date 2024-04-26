import React from 'react';
import styles from './Skeleton.module.scss';

export default function ClubCardSkeleton() {
  return (
    <div className={styles['preview-club-card']}>
      <div className={styles['club-card-skeleton']}>
        <div className={styles['club-card-skeleton-top']}>
          <div className={styles['club-card-skeleton-top-left']}>
            <div className={styles['club-card-skeleton-profile']} />
            <div className={styles['club-card-skeleton-top-left-column']}>
              <div className={styles['skeleton-parent']}>
                <div className={styles['club-card-skeleton-name']} />
              </div>
              <div className={styles['skeleton-parent']}>
                <div className={styles['club-card-skeleton-subtitle']} />
              </div>
            </div>
          </div>
          <div className={styles['skeleton-parent']}>
            <div className={styles['club-card-skeleton-location']} />
          </div>
        </div>
        <div className={styles['club-card-skeleton-description-group']}>
          <div className={styles['skeleton-parent-2']}>
            <div className={styles['club-card-skeleton-description']} />
          </div>
          <div className={styles['skeleton-parent-2']}>
            <div className={styles['club-card-skeleton-description']} />
          </div>
          <div className={styles['skeleton-parent-2']}>
            <div className={styles['club-card-skeleton-description']} />
          </div>
          <div className={styles['skeleton-parent-2']}>
            <div className={styles['club-card-skeleton-description-2']} />
          </div>
        </div>
      </div>
    </div>
  );
}
