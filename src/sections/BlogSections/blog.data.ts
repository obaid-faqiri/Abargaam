import image1 from "../../assets/images/Blog/1.webp";
import image2 from "../../assets/images/Blog/2.png";
import image3 from "../../assets/images/Blog/3.png";
import image4 from "../../assets/images/Blog/4.png";
import image5 from "../../assets/images/Blog/5.png";
import image6 from "../../assets/images/Blog/6.png";
import image7 from "../../assets/images/Blog/7.png";
import image8 from "../../assets/images/Blog/8.png";
import type { BlogHeroData, BlogPost } from "./blog.types";

export const blogHero: BlogHeroData = {
  title: "Transport & Logistics Blog",
  breadcrumb: "/ Home / Blogs /",
  image: image1,
};

export const featuredRead: BlogPost = {
  id: 1,
  title: "Overcoming Common Challenges in Global Shipping",
  image: image2,
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Role of AI in Revolutionizing the Logistics Industry",
    image: image3,
  },
  {
    id: 2,
    title: "The Advantages of Working with a Reliable Partner",
    image: image4,
  },
  {
    id: 3,
    title: "Tips for Efficient Cargo Tracking and Management",
    image: image5,
  },
  {
    id: 4,
    title: "Innovations Shaping the Future of Transport and Logistics",
    image: image6,
  },
  {
    id: 5,
    title: "Air Freight vs. Ocean Freight: Which Is Right for You?",
    image: image7,
  },
  {
    id: 6,
    title: "How Air Freight Keeps Global Supply Chains Moving",
    image: image8,
  },
];