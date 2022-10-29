import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import './ExplorePage.css';
import ImageCard from "../ImageCard/ImageCard";

const ExplorePage = () => {

  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  const imagesArr = Object.values(images)

  useEffect(() => {
    dispatch(getAllImagesThunk())
  }, [dispatch])


  return (
    <div className="explorepage-container">
      <div className="explorepage-inner-container">
        <div className="explorepage-images-container">
          {imagesArr.map((image) => {
            return (
              <>
                <ImageCard image={image}/>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
