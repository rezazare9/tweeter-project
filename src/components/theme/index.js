import {ThemeProvider} from '@material-ui/core/styles';
import tinycolor from "tinycolor2";

const colorPrimary = "#5ea9dd";

const Theme = ThemeProvider({
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
        },
        MuiListItem:{
            button:{
                fontFamily:"shabnam !important"
            }
        },
        MuiButton:{
            label:{
                fontFamily:"shabnam !important"
            }
        },
    }
})

export default Theme;