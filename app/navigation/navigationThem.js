import {DefaultTheme} from "@react-navigation/native";
import colors from '../config/colors'

export default {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        tint:"red",
        primary :colors.primary,
        background: "white",
        card:"gold"
    }
}