import axios from "axios";

export const apiClient = axios.create({
    // baseURL: "",
});

apiClient.interceptors.request.use(
    config => {
        // TODO: auth token logic
        return config;
    },
    error => {
        // TODO: error handling
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    response => {
        // TODO: response handling
        return response;
    },
    error => {
        // TODO: error handling
        return Promise.reject(error);
    }
);
