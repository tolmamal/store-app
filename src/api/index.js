import axiosInstance from "./axiosInstance";

export const ping = async () => {
  return await axiosInstance.get('ping');
};


export const submitNewProduct = async (name, price) => {
    return await axiosInstance.post('api/product', {name, price});
};
