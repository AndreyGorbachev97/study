const { generateKeyPairSync } = require('crypto');
var crypto = require("crypto");
var path = require("path");
var fs = require("fs");


/*publicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAu1Qc/xQoPut02p/tOkGR
gXOCqalAOAy+nHOqljZqjBraXe+hatSPVXLquvYP79nxyHyTO+tP0RPRe0RzFg8j
O/0xRPZd9SYIzkizFI8hzoJXOflDxOJhyYHCWYGxVtcvEgoOMsqhgrkymyzN87wL
T8d7WVpB/I4cmGwxAAowSbuLBg/VpUQDLd6xvv5rKDUgMj8glgjmA513T7FzRArx
ZIujWcPhw3iDV87+YPcFECBQzyhYs5Ku8sgsm3+w04oqdSIyrP+4agbhTsvbCU55
KL0rz/Jgcbo31ngi07nzJnwSC84BGbhVQIp2vVsw0Bd3B2+ICyoG0KFLkLvQowyu
HviL0pySntjEaoWHrF4T2Oljz+ZYyxVm/ObnSP4EEikGpOI8u1CbtVS5IQcLU4NR
Dh3U7FOE98MutQryJYTyfXQtiw8UN7aVZ1J3IIOoLeLhfXPj3ibEbH8jOZQfkmXq
0DhBC2p9pSUL8BWLpt9+W5LiuzQt4rbd6KRuFy3Bgci/trKsomJrpWa/D32uJnif
CknZHcCv2cpMK4eZHm92VQnlbdfsL8zCulziZBrzEDulKF8Ow8n08O+M5iSK0kbI
osQ4KR1Bgg9lROUm2EYxmXnWoB9bV7X9hmrAAxA3Yxi2iv6jDn3XpahBVRDjJiWS
Gpiovdegyqsa+vEYKo0cxoECAwEAAQ==
-----END PUBLIC KEY-----`;*/

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
      cipher: 'aes-256-cbc',
      passphrase: 'top secret'
    }
  });

console.log(privateKey)

  var encryptStringWithRsaPublicKey = function(toEncrypt, publicKey) {
    var buffer = Buffer.from(toEncrypt);
    var encrypted = crypto.publicEncrypt(publicKey, buffer);
    //console.log(encrypted.toString("base64"))
    return encrypted.toString("base64");
};


var decryptStringWithRsaPrivateKey = function(toDecrypt, privateKey) {
    var buffer = Buffer.from(toDecrypt, "base64");
    console.log(buffer)
    var decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString("utf8");
};

console.log(decryptStringWithRsaPrivateKey( encryptStringWithRsaPublicKey('string', publicKey), privateKey ));
