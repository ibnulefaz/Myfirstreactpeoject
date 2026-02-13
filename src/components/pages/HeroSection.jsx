

const HeroSection=()=>{

    return(

    <div className='bg-green-500 text-white p-4 rounded-lg' style={{backgroundImage: "url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        position: "relative",
        zIndex: 1,
        opacity: 0.5,
        filter: "blur(0.5px)"
    }}    >
        <h1 className='text-4xl font-bold'>Welcome to my wesite</h1>
        <p className='text-2xl'> Your Journey start here</p>
        <button className='bg-green-600 text-white px-4 py-2 rounded-lg'>Get Started</button>
    </div>
)
}

export default HeroSection
