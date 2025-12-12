import axios from "axios";

export const imageuplode = async imageData=>{
   const formData = new FormData();
    formData.append('image', imageData);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KYE
        }`,

        formData
      );
     return data?.data?.display_url;
}
