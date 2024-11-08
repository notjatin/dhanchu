// component which will ultimately showcase the data and allow user with great power

import { BiInfoSquare } from "react-icons/bi";
import { Frame } from "./ShowcaseComponents";
import { FaGithub, FaHamburger, FaInstagram, FaLinkedin } from "react-icons/fa";

// NOTES: Will be responsive, so mobile first ❌
// Children: 1. a top-right component for some minor info ❌
// 2. the frames will be dynamically added, removed ❌
// 3. a header with multiple subsections possibly ❌
// Styling: 1. A grid might look good, using gradient (not actual grid) ❌
// 2. preferrably a square, or close to square ❌

const ShowCase = () => {
    return (
        <div className="w-full h-1/2 bg-green-50 bg-gradient-to-r from-gray-300 from-[1px] to-transparent to-[1px] bg-[length:2rem_2rem] bg-center">
            <div className="flex flex-col w-full h-full bg-gradient-to-b from-gray-300 from-[1px] to-transparent to-[1px] bg-[length:2rem_2rem] bg-center relative">
                <header className="bg-green-100 p-2 flex min-h-10 items-center shadow-md shadow-slate-500">
                    <FaHamburger
                        className="text-slate-600 w-fit size-5 cursor-pointer"
                        />

                    <div className="flex flex-row-reverse gap-6  flex-1 ">
                        <FaGithub className="text-slate-600 size-5 cursor-pointer" />
                        <FaLinkedin className="text-slate-600 size-5 cursor-pointer" />
                        <FaInstagram className="text-slate-600 size-5 cursor-pointer" />
                    </div>
                </header>
                <div className="absolute bottom-2 right-2">
                    <span className="hidden z-10 md:block ">
                        <Frame type={"square"} className="size-8 md:size-16 lg:size-24">
                            info
                        </Frame>
                    </span>
                    <BiInfoSquare
                        className="text-slate-500 rounded-sm md:hidden size-8 shadow-md shadow-slate-500 cursor-pointer"
                    />
                </div>
                <div className="w-full h-full flex justify-center items-center flex-nowrap">
                    {/* map through the array items here */}
                </div>
            </div>
        </div>
    );
};
export default ShowCase;