import React from "react";


export interface IDateRange {
    startDate: string | Date;
    endDate: string | Date;
}


export interface ISelectedMetrics {
    title: string;
    key: string;
    percentage: string
    color: string
    id: number
}


export interface Metrics {
    date: string
    oss: number
    nrv: number
    to: number
    cr: number
}

export interface IChartData {
    chartData: Metrics[]
    selectedMetrics: ISelectedMetrics[]
}


export interface IMetricCardTypes {
    s: ISelectedMetrics;
    index:number
    selectedMetrics: ISelectedMetrics[];
    setSelectedMetrics: React.Dispatch<React.SetStateAction<ISelectedMetrics[]>>;
    metrics: Metrics[];
}