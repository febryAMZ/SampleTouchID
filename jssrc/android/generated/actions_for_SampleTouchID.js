//actions.js file 
function AS_Button_ab0f952877e940268e68ae6556255a8b(eventobject) {
    return isAuthUsingTouchSupported.call(this);
}

function AS_Button_ac8ebdb784ce4127b24efa908231e83d(eventobject) {
    var TouchIdStatus = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    kony.print("Kony TouchID status : " + TouchIdStatus);
    if (TouchIdStatus == 5000) {
        kony.ui.Alert({
            message: "AUTHENTICATION BY TOUCHID SUPPORTED",
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    } else {
        var msg = "TOUCHID AUTHENTICATION RETURNED THE STATUS :: " + TouchIdStatus;
        kony.ui.Alert({
            message: msg,
            alertType: constants.ALERT_TYPE_INFO,
            yesLabel: "Close"
        }, {});
    }
}