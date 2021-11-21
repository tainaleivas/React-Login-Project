import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Paragraph = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-family: 'Mark Pro';
  font-weight: ${(props) => props.weight};
`;

const Text = ({ text, size, color, weight }) => {
  return (
    <Paragraph
      size={size}
      color={color}
      weight={weight}
      data-testid="test-text-component"
    >
      {text}
    </Paragraph>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  margin: PropTypes.string,
  display: PropTypes.string,
  top: PropTypes.string,
}

Text.defaultProps = {
  weight: "400",
  color: '#fff'
}

export default Text;
