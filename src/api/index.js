import axiosInstance from "./axiosInstance";

export const ping = async () => {
  return await axiosInstance.get('ping');
};


export const submitNewProduct = async (name, price) => {
    return await axiosInstance.post('api/product', {name, price});
};

export const submitSearchAllProducts = async () => {
    return await axiosInstance.get("api/product");
};

export const submitSearchProduct = async (name) => {
  return await axiosInstance.get(`api/product/search?searchQuery=${name}`);
};
