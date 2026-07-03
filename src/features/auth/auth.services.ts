import axios from "axios";
import type { LoginRequest, LoginResponse } from "./auth.type";

const BASE_URL = "https://dummyjson.com";

export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(`${BASE_URL}/auth/login`, data);

  return response.data;
};
