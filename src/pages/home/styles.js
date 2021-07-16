import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root:{
        backgroundColor:'#e6e6e6',
        flex:1
    },
    header:{
        padding: 18,
        backgroundColor:'white',
        display:'flex'
    },
    headerTitle:{
        fontSize:'1.2rem',
        fontWeight:600,
        marginRight:'0.5rem'
    },
    divider:{
        backgroundColor:'#7EBAFF',
        filter: 'opacity(0.18)'
    },
    newTweet:{
        padding: 18,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column'
    },
    input:{
        marginRight:'1rem',
        border:'none',
        flex:1,
        "&:focus":{
            outline : 'unset',
        }
    },
    newTweetBtn:{
        color:'white',
        borderRadius:'1rem',
        minHeight:'30px',
        height:'30px',
        fontFamily:'shabnam',
        lineHeight:'1rem',
        minWidth:'5rem'
    },
    newTweetImg:{
        // border:'1px solid #333',
        // padding:'0.2rem',
        // borderRadius:'50%',
        // marginLeft:'1rem'
    },
    newTweetImgBtn:{
        border:'1px solid #333',
        padding:'0.2rem',
        borderRadius:'50%',
        marginLeft:'1rem'
    }
})

export default useStyles;