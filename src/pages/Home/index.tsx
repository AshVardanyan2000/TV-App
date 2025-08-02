import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import styles from './home.module.scss';
import Menu from '../../components/Menu';
import Utils from '../../helpers/Utils';
import PlayerIcon from '../../assets/icons/play_icon.svg?react';
import { useCallback, useEffect, useRef, useState } from 'react';
import useWindowSize from '../../helpers/hooks/useWindowSize';
import { changeFeaturedData, getTendingNow } from '../../store/actions/moves';
import { TrendingItem } from '../../types';
import Loader from '../../components/Loader';
import Slider from '../../components/Slider';

function Index() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const featured = useSelector((store: RootState) => store.moves.featured);
  const tendingNow = useSelector((store: RootState) => store.moves.tendingNow);

  console.log(tendingNow);

  const [loading, setLoading] = useState<boolean>(true);
  const [videoPlay, setVideoPlay] = useState<boolean>(false);

  const { windowWidth, windowHeight } = useWindowSize();

  useEffect(() => {
    //added timeout here just to imitate backend api call latency
    (async () => {
      await dispatch(getTendingNow());

      setLoading(false);
    })();
  }, [dispatch]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setVideoPlay(true);
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = null;
    };
  }, [featured]);

  const endedVideo = useCallback(() => {
    setVideoPlay(false);
  }, []);

  const onChangeFeaturedInfo = (singleData: TrendingItem) => {
    endedVideo();

    dispatch(changeFeaturedData(singleData));
  };

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.wrapper}>
      <Menu />

      <div className={styles.moves}>
        <div className={styles.moves_title_wrapper}>
          <div
            className={styles.moves_title}
            style={{ backgroundImage: videoPlay ? 'unset' : `url(/images/banner/${featured?.CoverImage})` }}
          >
            {videoPlay && (
              /*
                The video URL provided in the source does not work (404 error or invalid link).
                I downloaded a video from the same website, but the dimensions of the video are incorrect.
                As a result, the video overflows the container or does not fit properly.
                 We may need to adjust the video resolution or container styles, or find a better-sized video for this layout.
               */

              <div className={styles.background_video}>
                <video
                  autoPlay
                  muted
                  loop={false}
                  onEnded={endedVideo}
                  width={windowWidth - 115}
                  height={windowHeight - 360}
                >
                  <source src={'/videos/video.mp4'} type="video/mp4" />
                </video>
              </div>
            )}

            <div className={styles.moves_title_info_wrapper}>
              <h2>MOVIE</h2>
              {/* we have both Title and TitleImage in the json object,
                  I only found TitleImage in the design that is why not used title in any place,
                   but we can add it if needed.
                   */}
              {/*<h1>{featured.Title}</h1>*/}
              <img src={`/images/${featured?.TitleImage}`} alt="Movie Logo" className={styles.movie_logo} />

              <div className={styles.moves_title_info}>
                <p>{featured?.Category}</p>

                <p>{featured?.ReleaseYear}</p>

                <p>{featured?.MpaRating}</p>

                {featured?.Duration && <p>{Utils.secToHours(+featured.Duration)}</p>}
              </div>

              <p>{featured?.Description}</p>

              <div className={styles.buttons}>
                <button
                  onClick={() => {
                    console.log('play click');
                  }}
                >
                  <PlayerIcon />

                  <span>Play</span>
                </button>

                <button
                  onClick={() => {
                    console.log('mor info click');
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.moves_slider_wrapper}>
          <h2>Trending Now</h2>

          <Slider itemList={tendingNow} onClick={onChangeFeaturedInfo} />
        </div>
      </div>
    </div>
  );
}

export default Index;
