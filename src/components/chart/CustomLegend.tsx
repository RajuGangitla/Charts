const CustomLegend = ({ payload }:any) => (
    <div className="flex flex-wrap items-center justify-end ">
        {payload.map((entry:any, index:any) => (
            <div key={`item-${index}`} className="flex items-center mr-4 mb-2 ">
                <div className="w-4 h-1 rounded-md mr-1" style={{ backgroundColor: entry.color }}></div>
                <span className="text-xs">{entry.value}</span>
            </div>
        ))}
    </div>
);

export default CustomLegend