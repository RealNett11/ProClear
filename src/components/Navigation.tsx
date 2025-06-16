
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex space-x-6">
          <Link 
            to="/gallery" 
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Our Work
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
