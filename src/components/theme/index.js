import {createMuiTheme} from "@material-ui/core";
import tinycolor from "tinycolor2";

const colorPrimary = "#5ea9dd";

const Theme = createMuiTheme({
    palette:{
        primary:{
            main : colorPrimary,
            laight : tinycolor(colorPrimary).darken().toHex8String()
        }
    },
    overrides:{
        MuiTypography:{
            root:{
                fontFamily:"shabnam !important"
            }
        }
    }
})

export default Theme;