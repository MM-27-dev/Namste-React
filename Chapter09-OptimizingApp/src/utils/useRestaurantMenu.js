import { useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  //fetchdata
    const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
