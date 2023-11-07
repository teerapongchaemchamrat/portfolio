export default function profile() {

    return (
        <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
              </ul>
            </div>
          </div>
          {/* <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div> */}
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        
        <div style={{display:"flex"}}>
            <div className="avatar" style={{marginLeft:"10%", marginTop:"3%"}}>
                <div className="w-24 mask mask-squircle"style={{width:"200px", height:"200px"}}>
                    <img src="https://picsum.photos/200/300" />
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl" style={{marginLeft:"5%",marginRight:"10%", marginTop:"3%", width:"100%"}}>
                <div className="card-body" >
                    <h2 className="card-title">Personal Data</h2>
                    <p>1. If a dog chews shoes whose shoes does he choose?</p>
                    <p>2. If a dog chews shoes whose shoes does he choose?</p>
                    <p>3. If a dog chews shoes whose shoes does he choose?</p>
                    <p>4. If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>
        
        
        </div>

        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full" style={{marginTop:"2%"}} >
                <div className="card w-96 bg-base-100 shadow" style={{marginLeft:"5%", marginRight:"1%", width:"90%"}}>
                    <div className="card-body" >
                        <h2 className="card-title" >Expreince </h2>
                        <p>1. If a dog chews shoes whose shoes does he choose?</p> 
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full" style={{marginTop:"2%"}}>
                <div className="card w-96 bg-base-100 shadow-xl" style={{marginLeft:"5%", marginRight:"1%", width:"90%"}}>
                        <div className="card-body" >
                            <h2 className="card-title" >Skills </h2>
                            <p>2. If a dog chews shoes whose shoes does he choose?</p> 
                        </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full" style={{marginTop:"2%"}}>
                <div className="card w-96 bg-base-100 shadow-xl" style={{marginLeft:"5%", marginRight:"1%", width:"90%"}}>
                        <div className="card-body" >
                            <h2 className="card-title" >Knowledge </h2>
                            <p>3. If a dog chews shoes whose shoes does he choose?</p> 
                        </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full" style={{marginTop:"5%"}}>
                <img src="https://picsum.photos/200/300"  />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    </div>
    )
}

