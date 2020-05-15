import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {/* `children` stands for all contents within the CustomButton tag */}
    {children}
  </button>
)

export default CustomButton;