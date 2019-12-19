import React, {Component} from 'react';
import Banner from '../../../components/ProductDetail/Banner/banner';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class Home extends Component{
    componentDidMount(){
        this.props.onSetPath(this.props.location.pathname);
    }
    render(){
        return(
            <Banner name="Seasonal Foods" />
        );
    }
}

const mapStateToProps = state =>{
    return{
        path: state.home.path
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        onSetPath: (path) => dispatch(actions.setPath(path))
    };  
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);