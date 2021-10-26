import axios, {AxiosRequestConfig, AxiosRequestHeaders} from "axios";
import Utils from "@/Utils/Utils";
import config from "@/config/config";
import {isMainThread} from "worker_threads";

export default class RequestManager {
    static token: string | null;

    static setNewToken(token: string) {
        console.log(token)
        RequestManager.token = token;
    }

    static resetToken() {
        RequestManager.token = null;
    }

    static async executePostRequest(url: string, params: any, specialConfig?: AxiosRequestConfig) {
        const postToken = Utils.buildHmacSha256Signature(params);
        let headers: AxiosRequestHeaders = {
            "x-access-token": config.server.backendAccessToken,
        }

        if (RequestManager.token) {
            headers = {
                "x-access-token": config.server.backendAccessToken,
                "x-token-data": RequestManager.token,
            }
        }
        const instance = axios.create({
            baseURL: config.server.host,
            headers: headers
        });

        const paramsPost = {
            data: params,
            token: postToken
        }

        return new Promise<any>((resolve, reject) => {
            instance
                .post(url, paramsPost, specialConfig)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}