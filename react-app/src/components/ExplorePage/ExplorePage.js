import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import { Link } from "react-router-dom";
import './ExplorePage.css';

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
                <div className="image-container" key={''}>
                  <Link to={`/image/${image.id}`}>
                    <img className="image" src={image.imageUrl} alt=""></img>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
