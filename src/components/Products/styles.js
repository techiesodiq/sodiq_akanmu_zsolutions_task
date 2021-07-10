import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    majorRoot: {
        flexGrow: 1,
        marginLeft: "80px",
        marginRight: "60px",
        marginTop: "2px",
        marginBottom: "20px",
        borderRadius: "0"
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        align: "center",
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
}))