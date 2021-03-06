
import React from 'react';
import { connect } from 'react-redux';
//import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';
/*
import {
    selectShop,
    selectShopLoading,
} from 'containers/App/selectors';

import { 
    loadShop
} from '../App/actions';
*/
import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

import Shopimg from 'containers/Shopimg';

export class Shop extends React.Component {

    componentDidMount() {
    }
    
    componentWillReceiveProps(nextProps){
        //console.log("===================");
        //console.log("nextProps");
        //console.log(nextProps);
        //console.log("===================");
        /*
        if(nextProps.placeid !== this.props.placeid && nextProps.placeid!==""){
            //console.log("FIRE (receivedProps)loadShop: "+nextProps.placeid);
            this.props.searchShop(nextProps.placeid);  
        }
        */
    }

    render() {
        let name = ""; 
        let photo_reference = "";
        let address = "";
        let rating = "";
        let phone = "";
        ///*
        if(this.props.shopLoading){
            name = "";//(<LoadingIndicator />);     
        }            
                    
        if(this.props.shop.data){
            if(this.props.shop.data.status==="OK"){
                name =    this.props.shop.data.result.name;
                address = this.props.shop.data.result.formatted_address;
                rating = "rating: "+this.props.shop.data.result.rating;
                phone = this.props.shop.data.result.formatted_phone_number
                if(this.props.shop.data.result.photos){
                    photo_reference = this.props.shop.data.result.photos[0].photo_reference;    
                }  
            }
            else if(this.props.shop.data.status==="INVALID_REQUEST"){
                name = "I don't know!";    
            }    
        }
        //*/
        return (
            <article className={styles.shopWrpper} >
                    <header>{name}</header>
                    <div className={styles.shopImgTextWrpper} >
                        <div  className={styles.shopimgWrapper}>    
                            <Shopimg photo_reference={photo_reference} />
                        </div>
                        <section  className={styles.textWrapper}>
                            <p>{address}</p>
                            <p>{phone}</p>            
                        </section>
                    </div>
            </article>
        );
    }
}

Shop.propTypes = {
    //placeid: React.PropTypes.string,
    shop: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
    shopLoading:  React.PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    //searchShop: (placeid) => dispatch(loadShop(placeid)),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
    //shop: selectShop(),
    //shopLoading: selectShopLoading(),
});


// Wrap the component to inject dispatch and state into it
export default connect(null, null)(Shop);
