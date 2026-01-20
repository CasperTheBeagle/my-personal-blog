import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { fetchBlogPosts, fetchCategories } from '../api/blogApi';

const ArticleSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Highlight');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [error, setError] = useState(null);

  // ฟังก์ชันสำหรับโหลดข้อมูล
  const fetchPosts = async (reset = false) => {
    // ป้องกันการโหลดซ้ำถ้ายังโหลดไม่เสร็จ
    if (isLoading) return;

    setIsLoading(true);
    try {
      const currentPage = reset ? 1 : page;
      const categoryParam = selectedCategory === 'Highlight' ? '' : selectedCategory;

      console.log('ArticleSection: Fetching posts', { currentPage, categoryParam, reset });
      const response = await fetchBlogPosts(currentPage, 6, categoryParam);
      console.log('ArticleSection: Received response', response);

      if (reset) {
        // ถ้าเปลี่ยน category ให้เริ่มใหม่
        setPosts(response.posts);
        setPage(1);
      } else {
        // ถ้าโหลดเพิ่ม (View More)
        setPosts((prevPosts) => [...prevPosts, ...response.posts]);
      }

      // ตรวจสอบว่าถึงหน้าสุดท้ายหรือยัง
      setHasMore(response.currentPage < response.totalPages);
      setError(null);
    } catch (err) {
      console.error('ArticleSection: Error fetching posts:', err);
      setError('Failed to fetch data');
    } finally {
      setIsLoading(false);
      setIsInitialLoading(false);
    }
  };

  // โหลด categories เมื่อ component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    loadCategories();
  }, []);

  // โหลดโพสต์ใหม่เมื่อ page หรือ category เปลี่ยน
  useEffect(() => {
    fetchPosts(true); // reset = true สำหรับการโหลดใหม่
  }, [selectedCategory]);

  // โหลดโพสต์เพิ่มเมื่อ page เปลี่ยน (สำหรับ View More)
  useEffect(() => {
    if (page > 1) {
      fetchPosts(false); // reset = false สำหรับการโหลดเพิ่ม
    }
  }, [page]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

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
              onClick={() => handleCategoryChange(category)}
              disabled={category === selectedCategory}
              className={`font-medium px-6 py-2 rounded-md transition-colors ${
                category === selectedCategory
                  ? 'bg-brown-400 text-brown-100 cursor-not-allowed'
                  : 'text-brown-400 hover:bg-brown-100 hover:text-brown-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile: Dynamic Select from Array */}
        <div className="block md:hidden w-full">
          <label className="text-brown-400 mb-2 block font-medium">Category</label>
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
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

      {/* Loading State */}
      {isInitialLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="text-brown-400 text-lg">Loading...</div>
        </div>
      )}

      {/* Error State */}
      {error && !isInitialLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="text-red-500 text-lg">Error: {error}</div>
        </div>
      )}

      {/* Article Grid - Dynamic Rendering */}
      {!isInitialLoading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((article) => (
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

          {/* View More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="font-medium px-8 py-3 rounded-md border-2 border-brown-400 text-brown-400 hover:bg-brown-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'View more'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export { ArticleSection };