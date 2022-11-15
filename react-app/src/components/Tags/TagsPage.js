import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './TagsPage.css';
import { useHistory } from 'react-router-dom';
import { getAllTagsThunk } from "../../store/tag";
import TagBigCard from "./TagBigCard";
import { getAllImagesThunk } from "../../store/image";

const TagsPage = () => {

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

  useEffect(() => {
    dispatch(getAllTagsThunk())
    dispatch(getAllImagesThunk())
  }, [dispatch])

  return (
    <>
      <div className="tagspage-tabs-container">
        <div className="tagspage-tabs">
          <div className="tagspage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="tagspage-tab-tags" onClick={() => history.push(`/tags`)}>Tags</div>
        </div>
      </div>

      <div className="tagpage-outer-container">
        <div className="tagspage-container">
          <div className="tagspage-inner-container">
            <div className="tagspage-images-container">
              {tagNames.map((tagname) => {
                return (
                  <div key={tagname}>
                    <TagBigCard tagname={tagname} images={images}/>
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

export default TagsPage;
