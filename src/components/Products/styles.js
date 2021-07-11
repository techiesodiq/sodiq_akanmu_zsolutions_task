import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    majorRoot: {
        // flexGrow: 1,
        // flexBasis: "100%",
        borderRadius: "0",
        height: "min-content",
        padding: "0px 40px 20px 40px",
        [theme.breakpoints.down('sm')]: {
            padding: "0px 2px 2px 2px",
        },
        [theme.breakpoints.down('xs')]: {
            margin: "0px 1px 1px 1px",
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0px 1px 1px 1px",
        },
        [theme.breakpoints.up('md')]: {
            margin: "0px 20px 10px 20px",
        },
        [theme.breakpoints.up('lg')]: {
            margin: "0px 80px 40px 80px",
        },
    },
    container: {
        // padding: 0,
        // margin: 0,
    },
    containerItem: {
        margin: 0,
        height: "min-content",
        display: "inline",
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        align: "center",
        paddingBottom: "10px",
    },
    button: {
        '& > *': {
        margin: theme.spacing(1),
        },
        borderRadius: "25px",
        margin: "0 10px 0 10px",
        padding: "0 25px 0 25px",
        textTransform: "capitalize",
        backgroundColor: "#FA9E0D",
        color: "#FFF",
    },
    message: {
        display: 'flex',
        justifyContent: 'center',
        align: "center",
        padding: "100px",
    }
}))