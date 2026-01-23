import React from 'react';

const LordIcon = ({
    src,
    trigger = "hover",
    colors = "primary:#ffffff,secondary:#915eff",
    size = 50,
    delay = 0,
    className = ""
}) => {
    return (
        <lord-icon
            src={src}
            trigger={trigger}
            colors={colors}
            delay={delay}
            style={{ width: size, height: size }}
            class={className}
        >
        </lord-icon>
    );
};

export default LordIcon;
