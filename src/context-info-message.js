import React, { PropTypes } from 'react';
import Base from './base';
import acceptedLocales from './locale/accepted-locales';

export default function ContextInfoMessage({ style, children, header, icon, onClose, locale, showCloseButton }) {
    return (
        <Base
            messageType="info"
            locale={locale}
            icon={icon}
            header={header}
            style={style}
            onClose={onClose}
            showCloseButton={showCloseButton}
        >
            {children}
        </Base>
    );
}

ContextInfoMessage.propTypes = {
    children: PropTypes.node.isRequired,
    showCloseButton : PropTypes.bool.isRequired,
    locale : PropTypes.oneOf(acceptedLocales),
    header: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
    icon: PropTypes.element,
};
