cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
      "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
      "pluginId": "cordova-plugin-android-fingerprint-auth",
      "clobbers": [
        "FingerprintAuth"
      ]
    },
    {
      "id": "cordova-plugin-secure-storage.SecureStorage",
      "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
      "pluginId": "cordova-plugin-secure-storage",
      "clobbers": [
        "SecureStorage"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-fingerprint-auth": "1.5.0",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-secure-storage": "3.0.2"
  };
});