function isAuthUsingTouchSupported()
{
  var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
  if(status == 5000)
   {
     kony.ui.Alert({message: "AUTHENTICATION BY TOUCHID SUPPORTED", alertType: constants.ALERT_TYPE_INFO, yesLabel:"Close"}, {});
   }
  else
   {
     var msg = "TOUCHID AUTHENTICATION RETURNED THE STATUS ::"+status;
     kony.ui.Alert({message: msg, alertType: constants.ALERT_TYPE_INFO, yesLabel:"Close"}, {});
   }
}