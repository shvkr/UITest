import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import ProductList from 'components/ProductList';
import {
  createTopic, typing, incrementCount,
  decrementCount, destroyTopic, fetchTopics } from 'actions/topics';
import styles from 'css/components/product';

const cx = classNames.bind(styles);

class product extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchTopics
  ]

  constructor(props) {
    super(props);
    // event handlers for MainSection component
   
  }
  
  render() {
    const {newTopic, topics} = this.props;
    return (
      <div className={cx('product')}>
               <h1 className={cx('header')}>Ninja Product Listing</h1>
       
        <ProductList topics={topics} />
      </div>
    );
  }
}

product.propTypes = {
  topics: PropTypes.array.isRequired,
  newTopic: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(product);
