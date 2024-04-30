import axios from "axios";
import { setAmiibo } from "../reducers/seriesReducers";

export const CharacterAmiibo = () => async (dispatch, getState) => {
  try {
    // console.log("getState()", getState());
    const response = await axios.get(
      "https://www.amiiboapi.com/api/amiiboseries",
      {
        headers: { accept: "application/json" },
      }
    );
    console.log("response data", response.data);
    const amiiboData = response.data.amiibo.map((item) => ({
      key: item.key,
      name: item.name,
    }));
    // setAmiibo(amiiboData);
    dispatch(setAmiibo(amiiboData));
  } catch (error) {
    console.error("Error fetching data", error);
  }
};