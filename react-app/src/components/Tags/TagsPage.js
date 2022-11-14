import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import './TagsPage.css';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";
import { useHistory } from 'react-router-dom';

const TagsPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  const imagesArr = Object.values(images)
  const comments = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllCommentsThunk())
  }, [dispatch])

  return (
    <>
      <div className="tagspage-tabs-container">
        <div className="tagspage-tabs">
          <div className="tagspage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="tagspage-tab-tags" onClick={() => history.push(`/tags`)}>Tags</div>
        </div>
      </div>

      {/* <div className="tagspage-container">
        <div className="tagspage-inner-container">
          <div className="tagspage-images-container">
            {imagesArr.map((image) => {
              return (
                <>
                  <ImageCard image={image} comments={comments}/>
                </>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TagsPage;
