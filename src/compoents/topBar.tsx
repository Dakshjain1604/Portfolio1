import { useLocation, Link } from "react-router-dom";

export function Headerbar() {
    const location = useLocation();

  return (
    <div className="flex justify-center py-3 ">
        <nav className="flex space-x-4 text-white ">
      <Link to="/" className={`${location.pathname === '/' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded-md `}>
        Home
      </Link>
      <Link to="/about" className={`${location.pathname === '/about' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded-md`}>
        About
      </Link>
      <a href="https://drive.google.com/drive/folders/17dRozDJ1YzoZLawDuOlTiMQDqodHz8Ed?usp=sharing" target="_blank" rel="noopener noreferrer" className={`${location.pathname === '/resume' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded-md`}>
        Resume
      </a>
      <Link to="/contacts" className={`${location.pathname === '/contacts' ? 'bg-blue-500 text-white' : ''} px-2 py-1 rounded-md`}>
        Contacts
      </Link>
    </nav>
    </div>
  );
}

