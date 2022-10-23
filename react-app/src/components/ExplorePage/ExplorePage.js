import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";



const ExplorePage = () => {

  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  console.log('this is explore page images', images)
  const imagesArr = Object.values(images)

  useEffect(() => {
    dispatch(getAllImagesThunk())
  }, [])


  return (
    <div>
      {imagesArr.map((image) => {
        return (
          <div>
            <img src={image.imageUrl} alt={image.title} />
          </div>
        )
      })}
    </div>
  )
}

export default ExplorePage;
