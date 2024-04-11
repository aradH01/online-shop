import axios, {AxiosInstance} from 'axios';
// @ts-ignore
import {toast} from "@/utils/toast";


type constructorType = {
    suffix?: string;
    baseUrl?: string;
};

class BaseApi {
    protected $axios: AxiosInstance;

    constructor({
                    suffix,
                    baseUrl = '',
                }: constructorType) {
        this.$axios = axios.create({
            baseURL: `${baseUrl}${suffix ? `/${suffix}` : ''}`,
        });
        this.requestInterceptors();
        this.responseInterceptors();
    }

    requestInterceptors() {
        this.$axios.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );
    }

    responseInterceptors() {
        this.$axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                const RES400 = error?.response?.status === 400 || false;
                const RES401 = error?.response?.status === 401 || false;
                const RES403 = error?.response?.status === 403 || false;
                const RES404 = error?.response?.status === 404 || false;
                const RES409 = error?.response?.status === 409 || false;
                const RES422 = error?.response?.status === 422 || false;
                const RES500 = error?.response?.status >= 500 || false;

                if (RES422) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }

                if (RES404) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }

                if (RES403) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }

                if (RES409) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }

                if (RES400) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }
                if (RES500) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }

                if (!error.response) {
                    toast.error({
                        message: error?.response?.data.message,
                    });
                    throw error;
                }

                return Promise.reject(error);
            }
        );
    }
}

export default BaseApi;
