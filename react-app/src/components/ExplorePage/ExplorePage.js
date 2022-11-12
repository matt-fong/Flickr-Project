import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import './ExplorePage.css';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";

const ExplorePage = () => {

  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  const imagesArr = Object.values(images)
  const comments = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllCommentsThunk())
  }, [dispatch])


  return (
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
  );
};

export default ExplorePage;
