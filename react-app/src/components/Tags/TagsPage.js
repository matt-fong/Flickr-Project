import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import './TagsPage.css';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";
import { useHistory } from 'react-router-dom';
import { getAllTagsThunk } from "../../store/tag";
import TagBigCard from "./TagBigCard";

const TagsPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const tags = useSelector(state => state.tags)

  const tagsArr = Object.values(tags);

  useEffect(() => {
    dispatch(getAllTagsThunk())
  }, [dispatch])

  return (
    <>
      <div className="tagspage-tabs-container">
        <div className="tagspage-tabs">
          <div className="tagspage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="tagspage-tab-tags" onClick={() => history.push(`/tags`)}>Tags</div>
        </div>
      </div>

      <div className="tagspage-container">
        <div className="tagspage-inner-container">
          <div className="tagspage-images-container">
            {tagsArr.map((tag) => {
              return (
                <>
                  <TagBigCard tag={tag}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsPage;
