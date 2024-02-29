import { ISelectedMetrics } from '@/interface/types'
import { arr } from '@/lib/Arrays'
import { Popover } from '@headlessui/react'
import { BsGraphUp } from 'react-icons/bs'
import { GrEdit } from 'react-icons/gr'
import { RxQuestionMarkCircled } from 'react-icons/rx'


interface EditPopOverTypes {
    showEditIcon: boolean
}

export default function EditPopOver({ showEditIcon }: EditPopOverTypes) {

    return (
        <Popover className="relative">
            <Popover.Button className={` hover:bg-cardHover p-1 rounded-md border-none focus:outline-none ${showEditIcon ? "opacity-100" : "opacity-0"
                }`}>
                <GrEdit className="text-iconColor" />
            </Popover.Button>

            <Popover.Panel className="absolute w-[250px] bg-white shadow-md p-1 z-10 rounded-lg left-0 right-0 mt-2">
                { 
                    arr?.map((s: ISelectedMetrics) => (
                        <div key={s.color} className="flex items-center justify-between hover:bg-cardHover p-2 rounded-md">
                            <div className="flex items-center space-x-4">
                                <BsGraphUp size={16} className="text-iconColor" />
                                <p className="text-iconColor text-sm">{s.title}</p>
                            </div>
                            <RxQuestionMarkCircled size={16} className="text-iconColor" />
                        </div>

                    ))
                }
            </Popover.Panel>
        </Popover>
    )
}