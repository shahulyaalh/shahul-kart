import axios from "axios";
import type { Product } from "./product.types";
import api from "../../services/axios";

const BASE_URL = "https://dummyjson.com";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
