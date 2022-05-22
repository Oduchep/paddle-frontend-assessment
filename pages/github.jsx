import { useContext, useEffect } from 'react'
import axios from "axios";
import { DataContext } from '../utilities/data'
import GitCard from '../components/elements/git-card';


const Github = () => {
    const { starred, setStarred } = useContext(DataContext)

    const getStarred = async () => {
        return new Promise(async (resolve, reject) => {
          try {
            const res = await axios.get(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc`);
            resolve(res);
            console.log(res)
            setStarred(res.data.items)
          } catch (error) {
            console.log(error);
            reject(error);
          }
        });
      };

      useEffect(() => {
        getStarred()
      }, [])

  return (
    <div>
        <ul>
          {starred?.map((star) =>{ 
            return <GitCard key={star.id} data={star} /> }
          )}
        </ul>
    </div>
  )
}

export default Github