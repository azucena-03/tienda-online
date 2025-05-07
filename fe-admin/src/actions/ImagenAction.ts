import axios from "axios";

const API_URL = "https://localhost:7251/api/Imagen";

export const subirImagen = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("imagen", file);

  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.imageUrl;
  } catch (error) {
    console.error("Error subiendo imagen:", error);
    return null;
  }
};
