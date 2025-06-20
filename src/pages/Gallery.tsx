import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Review {
  author: string;
  comment: string;
  rating: number;
}

interface ImageGroup {
  images: string[];
  reviews: Review[];
}

const Gallery = () => {
  // Image groups with shared reviews
  const imageGroups: ImageGroup[] = [
    {
      images: [
        "/work/Blue1.jpg",
        "/work/Blue2.jpg",
      ],
      reviews: [
        {
          author: "John D.",
          comment: "Great service! All my windows were cleaned perfectly.",
          rating: 5
        }
      ]
    },
    {
      images: [
        "/work/dads1.jpg",
        "/work/dads2.jpg",
        "/work/dads3.jpg"
      ],
      reviews: [
        {
          author: "Mike T.",
          comment: "Excellent job on our office building windows!",
          rating: 5
        }
      ]
    },
    {
      images: [
        "/work/Whitewindows2.jpg",
        "/work/Whitewindows1.jpg"
      ],
      reviews: [
        {
          author: "Mike F.",
          comment: "Excellent job on our office building windows!",
          rating: 5
        }
      ]
    }
  ];

  // Fixed dimensions for each image
  const imageWidth = 350; // pixels
  const imageHeight = 256; // pixels (h-64)
  const gapSize = 16; // pixels (gap-4)

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span 
            key={star} 
            className={`text-4xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Calculate container width based on number of images
  const getContainerWidth = (count: number) => {
    return count * imageWidth + (count - 1) * gapSize;
  };

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
        <div className="mx-auto space-y-8 flex flex-col items-center">
          {imageGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              style={{ width: `${getContainerWidth(group.images.length)}px` }}
            >
              {/* Image grid */}
              <div className={`grid grid-flow-col gap-4 p-4`}>
                {group.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className="overflow-hidden rounded-lg"
                    style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
                  >
                    <img
                      src={image}
                      alt={`Window cleaning example ${groupIndex + 1}-${imageIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              
              {/* Reviews section */}
              <div className="p-4 border-t">
                {group.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {group.reviews.map((review, reviewIndex) => (
                      <div key={reviewIndex} className="border-b pb-4 last:border-0">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{review.author}</span>
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No reviews yet for these images</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;