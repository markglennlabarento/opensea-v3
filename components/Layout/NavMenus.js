const style = {
    list: `flex space-x-10`,
    element: `font-bold text-[#c8cacd] transition-all hover:text-white cursor-pointer`,
};

const NavMenus = ({ menus }) => {
    return (
        <nav>
            <ul className={style.list}>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <a href={menu.href} className={style.element}>
                            {menu.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenus;
