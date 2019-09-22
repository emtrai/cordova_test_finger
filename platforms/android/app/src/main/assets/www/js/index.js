/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

document.getElementById("setpin").addEventListener("click", setPin);
document.getElementById("getpin").addEventListener("click", getPin);
document.getElementById("setfp").addEventListener("click", setfp);
document.getElementById("getfp").addEventListener("click", getfp);

function setPin(){
     console.log("setPin");
    ss.set(
      function(key) {
        console.log("Set " + key);
        showLog("Set " + key);
      },
      function(error) {
        console.log("Error " + error);
        showLog("Error " + error);
      },
      "setpin",
      "setpinsample"
    );

}

function getPin(){
    showLog("getPin");
    ss.get(
      function(value) {
        console.log("Success, got " + value);
      },
      function(error) {
        console.log("Error " + error);
      },
      "setpin"
    );
}

function setfp(){
    showLog("setfp");
    FingerprintAuth.isAvailable(isAvailableSuccess, isAvailableError);

}

function getfp(){
    showLog("getfp");
    FingerprintAuth.isAvailable(isAvailableSuccess, isAvailableError);

}


function showLog(msg){
    document.getElementById('log').innerHTML = msg;
}



var encryptConfig = {
    clientId: "myAppName",
    username: "currentUser",
    password: "currentUserPassword"
};
/**
 * @return {
 *      isAvailable:boolean,
 *      isHardwareDetected:boolean,
 *      hasEnrolledFingerprints:boolean
 *   }
 */
function isAvailableSuccess(result) {
    console.log("FingerprintAuth available: " + JSON.stringify(result));
    if (result.isAvailable) {
        var encryptConfig = {}; // See config object for required parameters
        FingerprintAuth.encrypt(encryptConfig, encryptSuccessCallback, encryptErrorCallback);
    }
}

function isAvailableError(message) {
    console.log("isAvailableError(): " + message);
}



var ss;
var _init = function() {
  console.log("init secure storage");
  ss = new SecureStorage(
    function() {
      console.log("OK");
      showLog("OK");
    },
    function(error) {
        console.log("Error " + error);
      showLog("Please enable the screen lock on your device. This app cannot operate securely without it.");
    },
    "my_app"
  );
};

app.initialize();
_init();