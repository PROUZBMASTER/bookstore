import React from 'react';
import "./loading.css";

const Loading = () => {
    return (
        <>
            <div className="h-[45vh] container px-6 my-10 mx-auto flex justify-center items-center">
                <div className="spinner-box">
                    <div className="configure-border-1">
                        <div className="configure-core"></div>
                    </div>
                    <div className="configure-border-2">
                        <div className="configure-core"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loading;
