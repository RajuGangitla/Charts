import React from "react";
export const ChartTooltip = ({
    active,
    payload,
    label,
    coordinate,
}: any) => {
    if (active && payload && payload.length) {

        const tooltipStyle = {
            left: coordinate.x, // Adjust positioning
            top: coordinate.y, // Adjust positioning
        };

        return (
            <div
                className="p-6 flex flex-col justify-center bg-white items-start max-w-md rounded-xl text-black space-y-4"
                style={tooltipStyle}
            >
                {
                    payload?.length > 0 && payload?.map((data:any, index:number)=>(
                        <div className="flex items-center space-x-6" key={index}>
                            <div className="w-6 h-1 rounded-md" style={{ backgroundColor: data.color }}></div>
                            <p className="text-xs">{label}</p>
                            <p className="text-xs">{data?.value}</p>
                        </div>
                    ))
                }
            </div>
        );
    }

    return null;
};
