
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-future text-xl font-bold gradient-text">FutureVR</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="relative group font-future text-foreground/80 hover:text-foreground transition-colors">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link to="/compare" className="relative group font-future text-foreground/80 hover:text-foreground transition-colors">
            Compare
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
