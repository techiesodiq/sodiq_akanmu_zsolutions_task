import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderRadius: "0",
        borderBottomLeftRadius: "25px",
        borderTopRightRadius: "25px",
        marginTop: "10px",
        marginBottom: "20px",
        height: "min-content",
        width: "min-content",
    },
    description: {
        marginTop: "10px"
    },
    typography: {
        padding: theme.spacing(2),
    },
    media: {
        borderBottomLeftRadius: "25px",
        // height: "min-content",
        // width: "40%",
        margin: "0",
        padding: 0,
    },
    cardContent: {
        marginBottom: "12px"
    },
    cardProduct: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardActionArea: {
        // height: "200px",
        // width: "200px",
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: "0",
    },
    box: {
        position: "relative",
        bottom: "0",
        right: "0",
        padding: "0",
        margin: "0",
        display: 'flex',
        justifyContent: 'center',
        align: "center",
        borderTopLeftRadius: "12px",
        backgroundColor: "#FA9E0D",
        height: "82px",
        width: "100px"
    },
    plusSign: {
        fontWeight: "200",
        display: 'flex',
        justifyContent: 'flex-end',
        color: "#FFFCF8",
        fontSize: "70px",
        margin: "0",
        padding: "0",
    },
}))