
import { connect } from "react-redux"
import * as action from "./../../redux/action/action"
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
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
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    root: {
        flexGrow: 1,
    },
}));
function TenHeThongRap(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let heThongRap = props.heThongRap;
    console.log(props.heThongRap)
    useEffect(() => {
        if (props.heThongRap.length) {
            let cumRap = props.heThongRap[0].maHeThongRap;
            props.layCumRap(cumRap)
            props.layLichChieuCumRap(cumRap)
        }
    }, [heThongRap])
    const heThongRapRender = (item) => {
            return <div className="tests" style={{ color: "red" }}>
                <img src={item.logo} style={{ height: "50px" }} alt="img" />
                <span style={{ marginLeft: "10px" }}>{item.tenHeThongRap}</span>
            </div>;



    }
    const handleChange = (index) => {
        setValue(index);
        let cumRap = heThongRap[index].maHeThongRap;
        props.layCumRap(cumRap)
        props.layLichChieuCumRap(cumRap)


    };

    return (
        // <Paper className={classes.root}>
        // <Tabs
        //     value={value}
        //     onChange={handleChange}
        //     indicatorColor="primary"
        //     textColor="primary"
        //     centered
        //     className={classes.tabs}
        // >
        // </Tabs>
        // {/* // </Paper> */ }
        //
        <div>


            <Tabs
                indicatorColor="secondary"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {heThongRap.map((item, index) => {
                    return (
                        <Tab
                            label={heThongRapRender(item)}
                            key={index}
                        />
                    );
                })}

            </Tabs>
        </div>

    );
}
const mapDispatchToProps = dispatch => {
    return {
        layCumRap: cumRap => {
            dispatch(action.apiLayThongTinCumRapTheoHeThong(cumRap))
        },
        layLichChieuCumRap: cumRap => {
            dispatch(action.apiLayLichChieuTheoCumRap(cumRap))
        }
    }
}

const mapStateToProps = state => {
    return {
        heThongRap: state.cinemaReducer.heThongRap
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TenHeThongRap)