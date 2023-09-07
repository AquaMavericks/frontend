import { Link, useNavigate } from 'react-router-dom';

function HomeIcon() {

    
return(
    <div>
    
  <body>
	 <nav class="lg:px-8 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-1">
    <div class="flex-1 flex justify-between items-center">
      <a href="/" class="flex text-lg font-bold">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3348/3348432.png"
          width="50"
          height="50"
          class="p-1"
          alt="Rz Codes Logo"
        />
        <div class="mt-3 text-black">Aqua </div>
        <div class="mt-3 text-orange-400">mavericks</div>
      </a>
    </div>
    <Link to= '/start'>
    <h4 className='mt-1 text-sm'>HOME</h4>
    </Link>
  </nav>
  </body>
    
    </div>
);
}

export default HomeIcon;