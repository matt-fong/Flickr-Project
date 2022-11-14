import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import './ExplorePage.css';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";
import { useHistory, useParams } from 'react-router-dom';

const ExplorePage = () => {

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

      <div className="explorepage-tabs-container">
        <div className="explorepage-tabs">
          <div className="explorepage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="explorepage-tab-tags" onClick={() => history.push(`/tags`)}>Tags</div>
        </div>
      </div>

      <div className="explorepage-container">
        <div className="explorepage-inner-container">
          <div className="explorepage-images-container">
            {imagesArr.map((image) => {
              return (
                <>
                  <ImageCard image={image} comments={comments}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
