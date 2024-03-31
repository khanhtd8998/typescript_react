import { TProduct } from "~/types/Product";
import instance from ".";

export const getProducts = async () => {
    try {
        const { data } = await instance.get(`/products`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getProduct = async (id: string | number) => {
    try {
        const { data } = await instance.get(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const updateProduct = async (product: TProduct) => {
    try {
        const { data } = await instance.patch   (`/products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const createProduct = async (product: TProduct) => {
    try {
        const { data } = await instance.post(`/products`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removeProduct = async (id: string | number | undefined) => {
    try {
        await instance.delete(`/products/${id}`);
    } catch (error) {
        console.log(error);
    }
};