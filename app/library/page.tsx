import Categories from "./categories";

export default function Library() {

    return(
    <div>
        <div className="flex">
        <span className="py-[6] px-[4] text-base">Curious about a specific topic? Dive deeper into our library by filtering the prompts by</span><Categories></Categories><span className="py-[6] px-[4] text-base">.</span>
        </div>
    </div>
    )
};

