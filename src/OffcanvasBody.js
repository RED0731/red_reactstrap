import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const OffcanvasBody = React.forwardRef((props, ref) => {
  const { className, cssModule, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'offcanvas-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={ref} />;
})

OffcanvasBody.propTypes = propTypes;
OffcanvasBody.defaultProps = defaultProps;
OffcanvasBody.displayName = 'OffcanvasBody';

export default OffcanvasBody;
