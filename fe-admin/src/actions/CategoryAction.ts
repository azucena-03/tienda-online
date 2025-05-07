import axiosInstance from "@/api/axiosInstance";
import { CategoryAPIResponse } from "@/utils/schemas";

const API_URL = "/Categoria";

export const fetchCategories = async () => {
  const { data } = await axiosInstance.get(API_URL);

  const result = CategoryAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
};
