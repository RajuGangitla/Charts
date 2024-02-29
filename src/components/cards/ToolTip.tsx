export default function ToolTip({ title }: { title: string }) {
    return (
        <>
            <div className="absolute w-[400px] bg-white z-20 shadow-md p-4 rounded-lg left-4 top-12">
                <p className="text-lg text-black font-semibold">
                    {title}
                </p>
                <p className="text-black my-2 ">
                    Your online store&apos;s traffic volume, shown in sessions.
                </p>
            </div>
        </>
    )
}
