import { useState, useEffect,  } from "react"

//Custom Hook that fetches restaurant menu data based on the restaurant Id and returns it...
const useRestorantMenu = (restroId)=>{
    

    const [RestroData, setRestroData] = useState([]);

    const fetchData = async() => {
        let data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restroId}`)
        let json = await data.json();

        setRestroData(json?.data?.cards);


        
        
    }
    

    useEffect(() => {
        fetchData();
    }, [restroId]);

    return RestroData;


}

export default useRestorantMenu;
