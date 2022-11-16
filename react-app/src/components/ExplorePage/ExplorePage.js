import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";
import './ExplorePage.css';
import ImageCard from "../ImageCard/ImageCard";
import { getAllCommentsThunk } from "../../store/comment";
import { useHistory } from 'react-router-dom';
import { getAllLikesThunk } from "../../store/like";
import { getAllUsersThunk } from "../../store/user";

const ExplorePage = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  const imagesArr = Object.values(images)
  const comments = useSelector(state => state.comments)
  const likes = useSelector((state) => state.likes)
  const users = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllCommentsThunk())
    dispatch(getAllLikesThunk())
    dispatch(getAllUsersThunk())
  }, [dispatch])

  return (
    <>
      <div className="explorepage-tabs-container">
        <div className="explorepage-tabs">
          <div className="explorepage-tab-explore" onClick={() => history.push(`/explore`)}>Explore</div>
          <div className="explorepage-tab-tags" onClick={() => history.push(`/trending`)}>Trending</div>
          <div className="explorepage-tab-tags" onClick={() => history.push(`/alltags`)}>Tags</div>
        </div>
      </div>

      <div className='tagspage-test-container'>
        <div className='tagspage-testing'>
          <div className='explorepage-inner-header-container'>

            <div className='explorepage-title'>Explore</div>

            {/* <div className="tagspage-alltags" onClick={() => history.push(`/alltags`)}>View all tags</div> */}

          </div>
        </div>
      </div>

      <div className="explorepage-container">
        <div className="explorepage-inner-container">
          <div className="explorepage-images-container">
            {imagesArr.map((image) => {
              return (
                <div key={image?.id}>
                  <ImageCard image={image} comments={comments} likes={likes} users={users}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
