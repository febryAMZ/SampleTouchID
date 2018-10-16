function addWidgetsForm1() {
    Form1.setDefaultUnit(kony.flex.DP);
    var Button0a0955a41af2c46 = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "height": "50dp",
        "id": "Button0a0955a41af2c46",
        "isVisible": true,
        "left": "60dp",
        "onClick": AS_Button_ac8ebdb784ce4127b24efa908231e83d,
        "skin": "defBtnNormal",
        "text": "Button",
        "top": "57dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0c777aa0222534b = new kony.ui.Button({
        "focusSkin": "defBtnFocus",
        "height": "50dp",
        "id": "Button0c777aa0222534b",
        "isVisible": true,
        "left": "57dp",
        "onClick": AS_Button_ab0f952877e940268e68ae6556255a8b,
        "skin": "defBtnNormal",
        "text": "Button",
        "top": "130dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form1.add(Button0a0955a41af2c46, Button0c777aa0222534b);
};

function Form1Globals() {
    Form1 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm1,
        "enabledForIdleTimeout": false,
        "id": "Form1",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};