import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from './BlogCard';
import { blogPosts } from '../data/blogPosts';

const categories = ["Highlight", "Cat", "Inspiration", "General"];

const ArticleSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-16 mt-20 mb-20">
      <h2 className="text-2xl font-bold font-serif text-brown-600 mb-6">Latest articles</h2>

      {/* Search & Filter Bar */}
      <div className="bg-brown-200 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 mb-12">

        {/* Desktop: Dynamic Buttons from Array */}
        <div className="hidden md:flex items-center gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`font-medium px-6 py-2 rounded-md transition-colors ${category === 'Highlight'
                  ? 'bg-brown-300 text-brown-600'
                  : 'text-brown-400 hover:text-brown-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile: Dynamic Select from Array */}
        <div className="block md:hidden w-full">
          <label className="text-brown-400 mb-2 block font-medium">Category</label>
          <Select defaultValue="Highlight">
            <SelectTrigger className="w-full bg-white border-brown-300">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category, index) => (
                <SelectItem key={index} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Search Input */}
        <div className="w-full md:w-auto relative">
          <div className="block md:hidden text-brown-400 mb-2 font-medium">Search</div>
          <div className="relative w-full md:w-[320px]">
            <Input type="text" placeholder="Search" className="w-full bg-white border-brown-300 pr-10 h-10 md:h-12" />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Article Grid - Dynamic Rendering */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {blogPosts.map((article) => (
          <BlogCard
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            description={article.description}
            author={article.author}
            date={article.date}
            authorImage={article.authorImage}
          />
        ))}
      </div>
    </div>
  );
};

export { ArticleSection };