import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    container:{
        backgroundColor:'#fff',
        width:"30rem",
        margin:"10rem auto",
        display:"flex",
        flexDirection:"column",
        // justifyContent:"center",
        // flexGrow:'1'

    },
    headerTitle:{
        textAlign:"center",
        fontSize:"1.5rem",
        fontWeight:'500',
        margin:'1rem',
        alignSelf:"center",
    },
    tab:{
        flex:1,
        fontFamily:'shabnam !important'
    },
    containerInput:{
        padding:'1rem 0.8rem',
        display:'flex',
        flexDirection:'column'
    }

}))

export default useStyles;