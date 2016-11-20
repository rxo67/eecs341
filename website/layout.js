import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "background": "url(images/splash_home.jpg) no-repeat center center fixed",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundSize": "cover"
    },
    "main": {
        "textAlign": "center",
        "position": "fixed",
        "top": "50%",
        "left": "50%",
        "width": 20,
        "height": 18,
        "marginTop": -9,
        "marginLeft": -10
    },
    "login": {
        "OTransition": ".3s",
        "MsTransition": ".3s",
        "MozTransition": ".3s",
        "WebkitTransition": ".3s",
        "transition": ".3s"
    },
    "register": {
        "display": "none",
        "OTransition": ".3s",
        "MsTransition": ".3s",
        "MozTransition": ".3s",
        "WebkitTransition": ".3s",
        "transition": ".3s"
    },
    "fieldset": {
        "border": "2px solid rgba(0, 0, 0, 0.7)"
    },
    "legend": {
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": 30
    },
    "input": {
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": 15
    },
    "input[type=\"text\"]": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "border": "1px solid rgba(185,185,185,1)",
        "height": 2,
        "marginBottom": 10,
        "paddingLeft": 5
    },
    "input[type=\"password\"]": {
        "backgroundColor": "rgba(255, 255, 255, 0.7)",
        "border": "1px solid rgba(185,185,185,1)",
        "height": 2,
        "marginBottom": 10,
        "paddingLeft": 5
    },
    "input[type=\"text\"]:focus": {
        "outline": "none !important",
        "border": "1px solid rgba(69, 134, 255, 1)"
    },
    "input[type=\"password\"]:focus": {
        "outline": "none !important",
        "border": "1px solid rgba(69, 134, 255, 1)"
    },
    "input[type=\"submit\"]": {
        "backgroundColor": "rgba(255,255,255,0.5)",
        "border": "1px solid rgba(185,185,185,1)",
        "paddingTop": 0.3,
        "paddingRight": 0.8,
        "paddingBottom": 0.3,
        "paddingLeft": 0.8,
        "color": "rgba(69, 134, 255, 1)"
    },
    "input[type=\"submit\"]:focus": {
        "outline": "1px solid rgba(69, 134, 255, 1)"
    },
    "login_register": {
        "border": "none",
        "backgroundColor": "rgba(69, 134, 255, 0)",
        "textDecoration": "none",
        "fontFamily": "'Raleway', sans-serif",
        "fontSize": 12,
        "color": "rgba(69, 134, 255, 1)"
    },
    "login_register:hover": {
        "color": "rgba(69, 134, 255, 0.5)",
        "OTransition": ".3s",
        "MsTransition": ".3s",
        "MozTransition": ".3s",
        "WebkitTransition": ".3s",
        "transition": ".3s"
    },
    "input[type=\"submit\"]:hover": {
        "color": "rgba(69, 134, 255, 0.5)",
        "OTransition": ".3s",
        "MsTransition": ".3s",
        "MozTransition": ".3s",
        "WebkitTransition": ".3s",
        "transition": ".3s"
    },
    "login_register:focus": {
        "outline": "none"
    }
});