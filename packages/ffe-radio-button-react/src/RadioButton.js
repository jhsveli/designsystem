import React from 'react';

import BaseRadioButton, { buttonType } from './BaseRadioButton';

const RadioButton = props => (
    <BaseRadioButton type={buttonType.REGULAR} {...props} />
);

export default RadioButton;
