import axiosInstance from "@/api/axiosInstance";
import { ProductoCardAPIResponse } from "@/utils/schemas";

const API_URL = "/Producto";

export const fetchProductos = async () => {
  const { data } = await axiosInstance.get(API_URL);

  const result = ProductoCardAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
};

export const registrarProducto = async (producto: any): Promise<boolean> => {
  try {
    const response = await axiosInstance.post(API_URL, producto, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.status === 200;
  } catch (error) {
    console.error("Error registrando producto:", error);
    return false;
  }
};
