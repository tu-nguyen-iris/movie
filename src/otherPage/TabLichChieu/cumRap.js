import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PerfectScrollbar from 'react-perfect-scrollbar'
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
        width: "0",
        backgroundColor: theme.palette.background.paper
    },
    tab: {
        minWidth: "95px",
    },
    expansionPanel: {
        width: "100%",

    },

}));

function CumRap(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (


        <div className={classes.root}>
            {
                props.cumRap.map((item, index) => {
                    if (props.movie.lichChieu.find(item1 => item1.thongTinRap.maCumRap === item.maCumRap)) {
                        return (  
                                <ExpansionPanel key={index} >
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className={classes.heading}>
                                            {item.tenCumRap}
                                            <p>Địa Chỉ: {item.diaChi}</p>
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{ height: "250px" }}>
                                        <Typography>
                                            <PerfectScrollbar>

                                                {props.movie.lichChieu
                                                    .filter(
                                                        item3 => item3.thongTinRap.maCumRap === item.maCumRap
                                                    )
                                                    .map((item4, index4) => {
                                                        return (

                                                            <NavLink
                                                                to={localStorage.getItem("userClient") ? `/dat-ve/${item4.maLichChieu}` : `/dang-nhap`}
                                                                key={index4}
                                                            >
                                                                <button style={{ margin: "6px", width: "25%" }} key={index4} type="button" class="btn btn-outline-dark">

                                                                    {new Date(item4.ngayChieuGioChieu).toLocaleTimeString()}--
                                                                {new Date(item4.ngayChieuGioChieu).toLocaleDateString()}
                                                                </button>
                                                            </NavLink>
                                                        );
                                                    })}
                                            </PerfectScrollbar>

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            
                        )

                    } return null;
                })
            }
        </div >
    );
}
const mapStateToProps = state => {
    return {
        cumRap: state.cinemaReducer.cumRap
    }
}
export default connect(mapStateToProps, null)(CumRap)