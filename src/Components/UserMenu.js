import About from "./About";

const UserMenu = (props) => {
    const {
        handleClickButton,
        isClicked,
        aboutRef,
    } = props;


    return (
        <div className="relative flex items-end flex-col mr-4">
            <div
            id="user-icon-container"
            onClick={handleClickButton}
            className="flex items-center justify-end w-28 cursor-pointer"
            >
            <img
                src="/user-icon-sun-2.png"
                alt="userIcon"
                className="h-10 w-10 m-2 hover:scale-110 active:scale-100 transition-transform duration-300 ease-out"
            />
            <span className="text-white font-bold m-2">
                {isClicked ? "▴" : "▾"}
            </span>
            </div>
            <div>
            {isClicked && (
                <div ref={aboutRef} className="absolute right-0 md:right-4 z-10">
                <About />
                </div>
            )}
            </div>
        </div>
    )
}
export default UserMenu;