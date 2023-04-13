import httpReq from "./http.service";

class ProductService {
  // all products
  async getAllProducts(): Promise<IProduct[]> {
    const { data } = await httpReq.get("/product");
    return data;
  };

  //single products 
  async getProductDetailsById(id: string): Promise<IProduct> {
    const { data } = await httpReq.get("/product/" + id);
    return data;
  }
};

export default new ProductService();