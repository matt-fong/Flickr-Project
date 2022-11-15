import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './Trending.css';
import { useHistory } from 'react-router-dom';
import { getAllTagsThunk } from "../../store/tag";
import TagBigCard from "./TagBigCard";
import { getAllImagesThunk } from "../../store/image";

const Trending = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const tags = useSelector(state => state.tags)
  const images = useSelector(state => state.images);

  const tagsArr = Object.values(tags);

  // Filtering all tags to show unique tag names in a separate array
  let tagNames = [];

  for (let i = 0; i < tagsArr.length; i++) {
    if (!tagNames.includes(tagsArr[i].name)) {
      tagNames.push(tagsArr[i].name)
    }
  }

  // Sorting the tagNames array alphabetically
  tagNames.sort();

  //------------------------------------------------------//

  // Putting all tag names into one array, including duplicates
  let totalTagNames = [];
  for (let i = 0; i < tagsArr.length; i++) {
    totalTagNames.push(tagsArr[i].name)
  }

  // Tallying the number of times each tag name appears in the totalTagNames array
  const counts = {};
  totalTagNames.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });


  // Get an array of the keys:
  let tagNameKeys = Object.keys(counts);

  // Then sort by using the tag name keys by highest to lowest count
  tagNameKeys.sort(function(a, b) { return counts[b] - counts[a] });

  // Select only the top 25 tag names
  let topTagNames = [];
  for (let i = 0; i < 25; i++) {
    topTagNames.push(tagNameKeys[i])
  }

  useEffect(() => {
    dispatch(getAllTagsThunk())
    dispatch(getAllImagesThunk())
  }, [dispatch])

  return (
    <>
      <div className="tagspage-tabs-container">
        <div className="tagspage-tabs">
          <div className="tagspage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="tagspage-tab-tags" onClick={() => history.push(`/trending`)}>Trending</div>
          <div className="tagspage-tab-explore" onClick={() => history.push(`/alltags`)}>All Tags</div>
        </div>
      </div>

      <div className='tagspage-test-container'>
        <div className='tagspage-testing'>
          <div className='tagspage-inner-header-container'>

            <div className='tagspage-trending'>{`Trending Tags — Now`}</div>

            <div className="tagspage-alltags" onClick={() => history.push(`/alltags`)}>View all tags</div>

          </div>
        </div>
      </div>

      <div className="tagpage-outer-container">
        <div className="tagspage-container">
          <div className="tagspage-inner-container">
            <div className="tagspage-images-container">
              {topTagNames.map((tagname) => {
                return (
                  <div key={tagname}>
                    <TagBigCard tagname={tagname} images={images} tags={tags}/>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
