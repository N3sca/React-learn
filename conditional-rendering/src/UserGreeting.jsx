import PropTypes from 'prop-types';
function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2 className="welcome">Welcome {props.username}</h2>
    }else{return <h2 className="nop">Please log in to continue</h2> }


    //or 


    //return(props.isLoggedIn ? welcome : nop);
    //
    // const welcome = <h2 className="welcome">Welcome {props.username}</h2>
    //
    //const nop = <h2 className="nop">Please log in to continue</h2>
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting