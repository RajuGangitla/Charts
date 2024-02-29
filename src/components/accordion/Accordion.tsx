"use client";

import { GoChevronDown, GoChevronUp } from "react-icons/go";
import MetricCard from "../cards/MetricCard";
import { useEffect, useMemo, useState } from "react";
import metrics from "../chart-data/data.json";
import DateFilterComman from "@/utility/DateFilterComman";
import { IDateRange, ISelectedMetrics, Metrics } from "@/interface/types";
import { arr } from "@/lib/Arrays";
import MultiLineChart from "../chart/LineChart";
import SkeletonLoader from "../loader/SkeletonLoader";




export default function Accordion() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [loading, setLoading] = useState(true);
    const [allDate, setallDate] = useState<IDateRange[]>([
        {
            startDate: "",
            endDate: "",
        },
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const [selectedMetrics, setSelectedMetrics] = useState<ISelectedMetrics[]>([
        {
            title: "Online store sessions",
            key: "oss",
            percentage: "9%",
            id: 1,
            color: "#8884d8",
        },
    ]);

    const useMemoizedChartData = (
        metrics: Metrics[],
        selectedMetrics: ISelectedMetrics[],
        startDate: string | Date,
        endDate: string | Date
    ): Metrics[] => {
        return useMemo(() => {
            if (!metrics || !selectedMetrics) return [];

            // Filter metrics based on the selected date range
            let filteredMetrics;
            if (startDate && endDate) {
                filteredMetrics = metrics.filter((metric: any) => {
                    const metricDate = new Date(metric.date);
                    return metricDate >= startDate && metricDate <= endDate;
                });
                return filteredMetrics;
            } else {
                return metrics;
            }
        }, [metrics, selectedMetrics, startDate, endDate]);
    };

    const chartData = useMemoizedChartData(
        metrics.metrics,
        selectedMetrics,
        allDate[0]?.startDate,
        allDate[0]?.endDate
    );
    // const interval = Math.ceil(chartData?.length / 12);


    return (
        <>
            {
                loading ? (
                    <>
                        <SkeletonLoader />
                    </>
                ) : (
                    <>
                        <div className="w-full flex justify-end">
                            <DateFilterComman
                                state={allDate}
                                setState={setallDate}
                            />
                        </div>
                        <div className="bg-white mx-12 my-4 rounded-lg shadow-md hover:shadow-lg ">
                            <div className="flex items-center p-4 space-x-4">
                                {arr?.length > 0 && arr?.map((s: ISelectedMetrics, index: number) => {
                                    return (
                                        <>
                                            <MetricCard
                                                s={s}
                                                index={index}
                                                selectedMetrics={selectedMetrics}
                                                setSelectedMetrics={setSelectedMetrics}
                                                metrics={metrics.metrics}
                                            />
                                        </>
                                    );
                                })}
                                <div className="cursor-pointer">
                                    {isOpen ? (
                                        <>
                                            <GoChevronUp onClick={() => setIsOpen(false)} size={20} />
                                        </>
                                    ) : (
                                        <>
                                            <GoChevronDown onClick={() => setIsOpen(true)} size={20} />
                                        </>
                                    )}
                                </div>
                            </div>
                            {isOpen && (
                                <MultiLineChart chartData={chartData} selectedMetrics={selectedMetrics} />
                            )}
                        </div>
                    </>
                )
            }

        </>
    );
}
