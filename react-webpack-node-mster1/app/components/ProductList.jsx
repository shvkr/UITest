import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/product';

const cx = classNames.bind(styles);

const ProductList= ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
    <li className={cx('item')} key={key}>
      <span className={cx('topic')}>{topic.text}</span>
      <span className={cx('count')}>{topic.count}</span>
    </li>);
  });
  return (
    <div className={cx('pproduct')}>
      <h3 className={cx('header1')}>ProductList</h3>
      <ul className={cx('plist')}>
       <li>Product1</li>
       <li>Product2</li>
       <li>Product3</li>
       <li>Product4</li>
       <li>Product5</li>
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  topics: PropTypes.array.isRequired
};

export default ProductList;
