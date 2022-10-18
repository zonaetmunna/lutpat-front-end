import httpReq from "./http.service";

class AuthService{
  // signup
  async signup(body: IUserData): Promise<IUserData> {
    const { data } = await httpReq.post("/auth/signup", body);
    return data;
  };
  // login
  async login(body: { email: string; password: string }): Promise<IUserData> {
    const { data } = await httpReq.post("/auth/login", body);
    return data;
  }
}

export default new AuthService();