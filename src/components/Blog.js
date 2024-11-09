import React from 'react';
import { Calendar, User, MessageCircle } from 'lucide-react';
import Button from '../components/ui/button';
import './Blog.css'

const blogPosts = [
  {
    title: '10 Tips for a Successful Home Renovation',
    excerpt: 'Planning a home renovation? Check out these essential tips to ensure your project is a success.',
    image: '/Blog/A.jpg?height=200&width=300',
    date: 'May 15, 2023',
    author: 'Jane Doe',
    comments: 5,
  },
  {
    title: 'The Future of Sustainable Construction',
    excerpt: 'Discover the latest trends and technologies shaping the future of eco-friendly building practices.',
    image: '/Blog/B.jpg?height=200&width=300',
    date: 'June 2, 2023',
    author: 'John Smith',
    comments: 3,
  },
  {
    title: 'Understanding Building Codes and Regulations',
    excerpt: 'A comprehensive guide to navigating the complex world of construction regulations and compliance.',
    image: '/Blog/C.jpg?height=200&width=300',
    date: 'June 20, 2023',
    author: 'Mike Johnson',
    comments: 7,
  },
];

export default function Blog() {
  // Safeguard against blogPosts being undefined
  const postsToDisplay = Array.isArray(blogPosts) ? blogPosts : [];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Latest from Our Blog</h2>
        <div className="blog-grid">
          {postsToDisplay.map((post, index) => (
            <div key={index} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-card-image" />
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span><Calendar /> {post.date}</span>
                  <span><User /> {post.author}</span>
                  <span><MessageCircle /> {post.comments} comments</span>
                </div>
                <Button variant="outline" className="blog-button">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
