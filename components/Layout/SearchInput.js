import { SearchIcon } from "@heroicons/react/outline";

const style = {
    wrapper: `rounded-[0.8rem] py-2 focus:shadow-md dark:border-transparent bg-[#363840] flex items-center space-x-3 pl-3 hover:bg-[#4c505c]`,
    icon: `h-5 w-5 cursor-pointer text-gray-300 transition-all hover:text-white cursor-pointer`,
    input: `w-full bg-transparent text-white outline-none placeholder:text-sm dark:text-gray-300 md:placeholder:text-base`,
};

const SearchInput = () => {
    return (
        <div className={style.wrapper}>
            <SearchIcon className={style.icon} />
            <input
                className={style.input}
                type="text"
                placeholder="Search items, collections, and accounts"
            />
        </div>
    );
};

export default SearchInput;
