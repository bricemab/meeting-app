import crypto from "crypto";
import qs from "qs";
import config from "../config/config";

const buildHmacSha256Signature = (parameters: any) => {
    const dataQueryString = qs.stringify(parameters);
    return crypto
        .createHmac("sha256", config.server.hmacPacketSecretKey)
        .update(dataQueryString)
        .digest("hex");
};

const isValidPassword = (password: string) => {
    const regex = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#/-_+$&*~]).{8,}$"
    );
    return regex.test(password);
}

export default {
    buildHmacSha256Signature,
    isValidPassword
}