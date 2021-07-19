import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor:'#e6e6e6',
        
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
    tweetItem:{
        padding: 18,
        backgroundColor:'white',
        display:'flex',
        flexDirection:'column',
        marginTop:'0.5rem'
    },
    input:{
        marginRight:'1rem',
        border:'none',
        overflowY:'auto',
        maxHeight:'60px',
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
        borderRadius:'50%',
        padding:'0.1rem !important'
        // border:'0.5px solid #3337',
        // marginLeft:'1rem'
    },
    newTweetImgBtn:{
        borderRadius:'50%',
        padding:'0.2rem !important',
        border:'0.5px solid #3337',
        marginLeft:'1rem'
    },
    tweetItemName:{
       
        fontWeight:600,
      
    },
    tweetItemId:{
        fontSize:'0.9rem',
        color: theme.palette.text.hint,
        marginRight:'0.5rem',
        paddingTop:'0.1rem'
    },
    tweetText:{
        fontSize:'0.9rem',
        marginTop:'0.75rem'
    },
    likeCount:{
        fontSize:'0.8rem',
        color: theme.palette.text.hint,
        marginLeft:'0.5rem'
    }
}));

export default useStyles;