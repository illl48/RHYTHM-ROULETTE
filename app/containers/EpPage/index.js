/*
 * EpPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';


import { createStructuredSelector } from 'reselect';

import {
    selectLocationState,
    selectEp
} from 'containers/App/selectors';

import { loadEp } from '../App/actions';


import LoadingIndicator from 'components/LoadingIndicator';

import styles from './styles.css';

export class EpPage extends React.Component {

    componentWillMount() {
        
        //if(!this.props.ep || this.props.ep.name !== this.props.epanme){
          this.props.searchEp();     
        //} 
        
    }

    render() {
        let producerName="";
        let pathNameArray;
        let src="";
        if(this.props.location.locationBeforeTransitions){
            pathNameArray= this.props.location.locationBeforeTransitions.pathname.split("/");
            producerName=pathNameArray[pathNameArray.length-1].replace(/\_/gi, ' ');            
        }
        
        if(this.props.ep){
            console.log(this.props.ep);
            //qq=this.props.ep.name+', '+this.props.ep.shop;
            src = "https://www.youtube.com/embed/"+this.props.ep.youtubeId;//+"?controls=0";
        }
        
        return (
            <article className={styles.epPageWrapper}>
                <Helmet
                    title={producerName}
                    meta={[
                    { name: 'description', content: {producerName} },
                    ]}
                />
                <section className={styles.epSectionWrapper}>
                    <h1 className={styles.epSectionH1}> 
                        {producerName} 
                    </h1>
                    <section className={styles.videoAndShopWrapper}>
                        <div className={styles.iframeWrapper}>
                            <iframe src={src} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </section>
                    <section className={styles.recordsWrapper}>
            
                    </section>
                </section>
            </article>
        );
    }
}

EpPage.propTypes = {
    changeRoute: React.PropTypes.func,
    ep: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.bool,
     ]),
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),

    searchEp: () => dispatch(loadEp()),

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
    location: selectLocationState(),
    ep: selectEp(),
});


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(EpPage);