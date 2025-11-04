import React, { useState } from 'react';

function ProgressBar() {

    const [progress, setProgress] = useState(0)
    const updateProgress = (val) => {
        setProgress(prev => Math.max(0,Math.min(100,prev+val)))
    }
    const colorChange = () => {
        if (progress >= 80) return 'green'
        if (progress >= 40) return 'orange'
        return 'red'
}

    return (
        <div>
            <h2>Progress Bar</h2>
            <div class="outer" style={{
                border: "1px solid black",
                textAlign: "center",
                borderRadius: "5px",
                position: 'relative',
                height:'20px'
            
            }}>
                <div class="inner"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: colorChange(),
                        height: "100%" ,
                        transition:'width 0.3s ease-in-out'
                }}
                ></div>
                <span style={{
                    position: "absolute",
                    left: '50%',
                    top: '0%',
                    transform: "translateX(-50%)"

                }}>{progress}%</span>
            </div>
            <div style={{
        
                margin: "5px",
                display:"flex",
                gap:"5px"
            }}>
                <button onClick={()=>updateProgress(-10)}>-10</button>
                <button onClick={()=>updateProgress(+10)}>+10</button>
            </div>
            
        </div>
    );
}

export default ProgressBar;
