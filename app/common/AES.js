'use strict';

/**
 * description：  aes加解密
 * author：binkerC
 * date：  2022-7-21
 */
const {AES, enc} = require("crypto-js");

/* encryption
* */
const AESEncrypt = (value, key) => {

    return  value;
    if (typeof (value) == 'string' && typeof (key) == 'string') {
        return AES.encrypt(value, key).toString();
    }
    return '';
};

/*Decrypt
* */
const AESDecrypt = (value, key) => {

    return  value;
    if (typeof (value) == 'string' && typeof (key) == 'string') {
        let bytes = AES.decrypt(value, key);
        return bytes.toString(enc.Utf8);
    }
    return '';
};

export {
    AESEncrypt,
    AESDecrypt,
}
