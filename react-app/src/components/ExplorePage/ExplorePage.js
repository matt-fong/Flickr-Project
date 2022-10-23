import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllImagesThunk } from "../../store/image";



const ExplorePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImagesThunk())
  })


  return (
    <div>
      EXPLORE PAGE
    </div>
  )
}

export default ExplorePage;
