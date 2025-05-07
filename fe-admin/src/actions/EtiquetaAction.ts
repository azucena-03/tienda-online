import axiosInstance from "@/api/axiosInstance";
import { EtiquetaAPIResponse } from "@/utils/schemas";

const API_URL = "/Etiqueta";

export const fetchEtiquetas = async () => {
  const { data } = await axiosInstance.get(API_URL);

  const result = EtiquetaAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
};
