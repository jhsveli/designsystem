import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { bool, node, oneOf, shape, string } from 'prop-types';
import uuid from 'uuid';

import { Tooltip } from '@sb1/ffe-form-react';

export const buttonType = {
    REGULAR: 'regular',
    SWITCH: 'switch',
};

class BaseRadioButton extends Component {
    id = uuid.v4();

    render() {
        const {
            'aria-invalid': ariaInvalid,
            children,
            inline,
            className: inputClassName,
            labelProps: {
                className: labelClassName,
                ...labelProps
            },
            name,
            tooltip,
            tooltipProps,
            type,
            value,
            ...inputProps
        } = this.props;

        const isRegular = type === buttonType.REGULAR;
        const isSwitch = type === buttonType.SWITCH;

        const labelClasses = classNames(
            { 'ffe-radio-button':  isRegular },
            { 'ffe-radio-button--inline': isRegular && inline },
            { 'ffe-radio-switch': isSwitch },
            { 'ffe-radio-button--invalid': ariaInvalid === 'true' },
            { 'ffe-radio-button--with-tooltip': tooltip },
            labelClassName,
        );

        return (
            <Fragment>
                <input
                    aria-invalid={ariaInvalid}
                    className={classNames(
                        'ffe-radio-input', 
                        inputClassName,
                    )}
                    id={this.id}
                    name={name}
                    type="radio"
                    value={value}
                    {...inputProps}
                />
                {children && 
                    <label 
                        className={labelClasses} 
                        htmlFor={this.id} 
                        {...labelProps}
                    >
                        {children}
                    </label>
                }
                {tooltip && 
                    <Tooltip {...tooltipProps}>
                        {tooltip}
                    </Tooltip>
                }
            </Fragment>
        );
    }
}

BaseRadioButton.propTypes = {
    'aria-invalid': oneOf(['true', 'false']),
    children: node,
    className: string,
    inline: bool,
    labelProps: shape({
        className: string,
    }),
    name: string.isRequired,
    tooltip: string,
    tooltipProps: shape({}),
    type: oneOf(Object.values(buttonType)).isRequired,
    value: string.isRequired,
};

export default BaseRadioButton;
