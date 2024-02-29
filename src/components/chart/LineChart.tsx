"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import CustomLegend from "./CustomLegend";
import { IChartData } from "@/interface/types";


export default function MultiLineChart({ chartData, selectedMetrics }: IChartData) {

    return (
        <>
            {selectedMetrics && selectedMetrics.length > 0 ? (
                <div className=" w-full bg-white p-4 transition ease-in-out duration-150 rounded-lg">
                    <div className="mt-4" style={{ width: "100%", height: 400 }}>
                        <ResponsiveContainer height={400}>
                            <LineChart
                                data={chartData}
                                height={400}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                            >
                                <XAxis
                                    tickCount={chartData?.length ?? 0}
                                    dataKey="date"
                                    // interval={interval}
                                    tick={{
                                        stroke: "light-grey",
                                        strokeWidth: 0.5,
                                        fontSize: "12px",
                                    }}
                                />
                                <YAxis
                                    tick={{
                                        stroke: "light-grey",
                                        strokeWidth: 0.5,
                                        fontSize: "12px",
                                    }}
                                    interval="preserveStartEnd"
                                    domain={[0, "dataMax + 10"]}
                                />
                                <Tooltip content={<ChartTooltip />} />
                                <Legend content={<CustomLegend />} align="right" />
                                {selectedMetrics.map((metric: any, index: number) => (
                                    <Line
                                        key={index}
                                        type="monotone"
                                        dataKey={metric.key}
                                        stroke={metric.color}
                                        strokeWidth={3}
                                        dot={false}
                                        fill={metric.color}
                                        name={metric.title}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-40">
                    <p className="text-balck">No chart data available.</p>
                </div>
            )}
        </>
    )
}
