import axios from 'axios';

const API_BASE_URL = 'https://blog-post-project-api.vercel.app';

// แปลงวันที่จาก ISO 8601 เป็นรูปแบบ "11 September 2024"
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

// ดึงข้อมูลบทความจาก API
export const fetchBlogPosts = async (page = 1, limit = 6, category = '', keyword = '') => {
  try {
    const params = {
      page,
      limit,
    };

    // เพิ่ม category parameter ถ้าไม่ใช่ "Highlight"
    if (category && category !== 'Highlight') {
      params.category = category;
    }

    // เพิ่ม keyword parameter ถ้ามี
    if (keyword) {
      params.keyword = keyword;
    }

    console.log('Fetching posts with params:', params);
    const response = await axios.get(`${API_BASE_URL}/posts`, { params });
    console.log('API Response:', response.data);
    
    // แปลงวันที่ในข้อมูลที่ได้จาก API
    const formattedPosts = response.data.posts.map(post => ({
      ...post,
      date: formatDate(post.date)
    }));

    return {
      ...response.data,
      posts: formattedPosts
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    console.error('Error details:', error.response?.data || error.message);
    throw error;
  }
};

// ดึงข้อมูล categories (mock function เนื่องจาก API ไม่มี endpoint สำหรับ categories)
export const fetchCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Highlight", "Cat", "Inspiration", "General"]);
    }, 100);
  });
};
