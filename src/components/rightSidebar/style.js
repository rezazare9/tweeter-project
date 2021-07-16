import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    
    root:{
        backgroundColor:'white',
        width:'18%',
        padding:'1.5rem 1rem'
    },
    logoType:{
        fontSize:'1.25rem !important',
        fontWeight:"600 !important",
        marginRight:'1rem',
        color: theme.palette.primary.main
    },
    hashtagTitle:{
        fontSize:'1.1rem !important',
        fontWeight:"600 !important",
        marginTop : '3rem',
        marginBottom : '1.5rem'
    },
    hashtag:{
        marginTop:'0.8rem',
        marginRight:'0.2rem',
        lineHeight:'0.5rem'
    },
    hashTagParent:{
       marginBottom:'0.5rem !important',
        padding:"0.15rem !important",
        width:'100%'
    }
  }));

  export default useStyles;