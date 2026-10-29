import type { ReactNode } from "react";
import React from "react";

const Box = ({children}: {children: ReactNode}) => {
    // 스타일 객체타입 - CSSProperties
    const BoxStyle: React.CSSProperties = {
        width: '200px',
        border: '1px solid #000',
        padding: '20px',
        margin: '5px'
    }

    return (
        <>
            <div style={BoxStyle}>{children}</div>
        </>
    )
}

export default Box;