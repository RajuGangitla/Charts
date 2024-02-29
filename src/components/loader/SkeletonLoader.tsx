import { GoChevronDown } from "react-icons/go";
import Skeleton from 'react-loading-skeleton'


export default function SkeletonLoader(){
    return (
        <>
            <div className=" w-full flex justify-end">
                <Skeleton baseColor="#D9D9D9" height={30} />
            </div>
            <div className="bg-white mx-12 my-4 rounded-lg shadow-md hover:shadow-lg ">
                <div className="flex items-center p-4 space-x-4">
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-full">
                                <div className="p-2 rounded-lg bg-[#F1F1F1] hover:transition-all hover:ease-in-out duration-200">
                                    <h2 className="text-textColor w-100 border-b-2 border-dashed border-gray-300">
                                        <Skeleton width={100} baseColor="#D9D9D9" />
                                    </h2>
                                    <span>  </span>
                                    <div className="flex items-center mt-2">
                                        <Skeleton width={100} baseColor="#D9D9D9" />
                                        <span className="text-iconColor text-sm ml-2">
                                            <Skeleton width={50} baseColor="#D9D9D9" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="cursor-pointer">
                        <GoChevronDown  size={20} />
                    </div>
                </div>
                <div className="p-4">
                    <Skeleton baseColor="#D9D9D9" height={300} width={"full"} />
                </div>
            </div>
        </>
    )
}