import Navbar from "../shared/Navbar";

const Root = () => {
    return (
        <>
            <Navbar />
            <outlet />
            <footer /> </>
    );
};

export default Root;