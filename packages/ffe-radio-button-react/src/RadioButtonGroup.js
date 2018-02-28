import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';

const RadioButtonGroup = (props) => {
    const {
        'aria-invalid': ariaInvalid,
        inline,
        legend,
        name,
    } = props;

    const buttonProps = { 
        'aria-invalid': ariaInvalid, 
        inline, 
        name, 
    };

    return (
        <fieldset className="ffe-fieldset">
            {legend && 
                <legend className="ffe-form-label">{legend}</legend>
            }
            {props.children(buttonProps)}
        </fieldset>
    );
};

RadioButtonGroup.propTypes = {
    'aria-invalid': oneOf(['true', 'false']),
    inline: bool,
    name: string,
    legend: string,
    children: func.isRequired,
};

export default RadioButtonGroup;
