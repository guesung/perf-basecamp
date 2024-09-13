import { GifImageModel } from '../../../../models/image/gifImage';

import ResultTitle from '../ResultTitle/ResultTitle';
import { MemoizedGiftItem } from '../GifItem/GifItem';

import { SearchStatus, SEARCH_STATUS } from '../../hooks/useGifSearch';

import styles from './SearchResult.module.css';

type SearchResultProps = {
  status: SearchStatus;
  gifList: GifImageModel[];
  loadMore: () => void;
};

const SearchResult = ({ status, gifList, loadMore }: SearchResultProps) => {
  const renderGifList = () => (
    <div className={styles.gifResultWrapper}>
      {gifList.length === 0
        ? Array.from({ length: 16 }).map((_, idx) => (
            <MemoizedGiftItem key={idx} imageUrl="" title="" />
          ))
        : gifList.map((gif: GifImageModel) => (
            <MemoizedGiftItem key={gif.id} imageUrl={gif.imageUrl} title={gif.title} />
          ))}
    </div>
  );

  const renderLoadMoreButton = () => (
    <button className={styles.loadMoreButton} onClick={loadMore}>
      load more
    </button>
  );

  const renderContent = () => {
    switch (status) {
      case SEARCH_STATUS.FOUND:
        return (
          <>
            {renderGifList()}
            {renderLoadMoreButton()}
          </>
        );
      case SEARCH_STATUS.BEFORE_SEARCH:
        return renderGifList();
      case SEARCH_STATUS.NO_RESULT:
      case SEARCH_STATUS.ERROR:
      default:
        return <></>;
    }
  };

  return (
    <section className={styles.searchResultSection}>
      <ResultTitle status={status} />
      {renderContent()}
    </section>
  );
};

export default SearchResult;
