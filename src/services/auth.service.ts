import { IAuthData } from "../types";
import httpReq from "./http.service";

class AuthService {
  // signup
  async signup(body: { name: string, email: string, password: string, phone: number }): Promise<IAuthData> {
    const { data } = await httpReq.post("/auth/signup", body);
    return data;
  };
  // login
  async login(body: { email: string; password: string }): Promise<IAuthData> {
    const { data } = await httpReq.post("/auth/login", body);
    return data;
  };

  /* async logout() {
    return await httpReq.get(`auth/logout`);
  } */


};

export default new AuthService();