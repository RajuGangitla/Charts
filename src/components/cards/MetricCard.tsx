import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IMetricCardTypes } from "@/interface/types";
import EditPopOver from "./EditPopOver";
import ToolTip from "./ToolTip";



export default function MetricCard({ s, index, selectedMetrics, setSelectedMetrics, metrics }: IMetricCardTypes) {

    const [showEditIcon, setShowEditIcon] = useState<boolean>(false);
    const [showToolTip, setShowToolTip] = useState<boolean>(false);



    const handleUpdateMetrics = (s: any) => {
        const exist = selectedMetrics.find((a: any) => a.id === s.id);
        if (!exist) {
            setSelectedMetrics((prev: any) => [...prev, s]);
        } else {
            const newOne = selectedMetrics.filter((a: any) => a.id !== s.id);
            setSelectedMetrics(newOne);
        }
    };


    let totalValue = 0;
    if (metrics && metrics.length > 0) {
        totalValue = metrics.reduce(
            (prev: any, curr: any) => prev + curr[s.key], 0);
    }

    return (
        <>
            <div
                key={s.key+index}
                className={`relative w-full rounded-lg p-2 hover:bg-cardHover cursor-pointer hover:transition-all hover:ease-in-out duration-200 ${selectedMetrics.some((metric: any) => metric.id === s.id)
                    ? "bg-activeColor"
                    : ""
                    } `}
                onMouseEnter={() => setShowEditIcon(true)}
                onMouseLeave={() => setShowEditIcon(false)}
                onClick={() => handleUpdateMetrics(s)}
            >
                <div className="flex items-center justify-between ">
                    <h2
                        className=" text-textColor border-b-2 border-dashed border-gray-300"
                        onMouseEnter={() => setShowToolTip(true)}
                        onMouseLeave={() => setShowToolTip(false)}
                    >
                        {s.title}
                    </h2>
                    <div className="">
                        <EditPopOver showEditIcon={showEditIcon} />
                    </div>
                </div>
                <div className="flex items-center mt-2 ">
                    <p className="text-[#303030] text-lg font-semibold ">
                        {totalValue.toFixed(2)}
                    </p>
                    <span>
                        <IoMdArrowDropup className="text-iconColor" size={20} />
                    </span>
                    <span className="text-iconColor text-sm">{s.percentage}</span>
                </div>
                {showToolTip && (
                    <ToolTip title={s.title} />
                )}
            </div>
        </>
    );
}
