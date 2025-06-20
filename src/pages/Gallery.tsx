
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    {
      src: "/work/windows-1.jpg",
      alt: "Professional window cleaning"
    },
    {
      src: "/work/windows-2.jpg",
      alt: "Professional window cleaning"
    },
    {
      src: "/work/windows-3.jpg",
      alt: "Professional window cleaning"
    },
    {
      src: "/work/House-1.jpg",
      alt: "Professional window cleaning"
    },
    {
      src: "/work/House-2.jpg",
      alt: "Professional window cleaning"
    },
    {
      src: "/work/House-3.jpg",
      alt: "Professional window cleaning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-start items-center max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
      </nav>
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
