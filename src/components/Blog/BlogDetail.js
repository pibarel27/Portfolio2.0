import React from "react";
import { useParams, Link } from "react-router-dom";
import { datablog } from "./blog";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();

  const blog = datablog.find((item) => item.id === id);

  if (!blog) {
    return (
      <Container className="blog-detail-page text-center">
        <h2>Blog not found</h2>
        <Link to="/blog" className="back-btn">← Back to Blog</Link>
      </Container>
    );
  }

  return (
    <Container className="blog-detail-page">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-detail-card"
      >

        <Link to="/blog" className="back-btn">
          ← Back to Blog
        </Link>

        <h1 className="blog-detail-title">{blog.title}</h1>

        <div
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </motion.div>

      <style>{`

      .blog-detail-page{
        padding-top:120px;
        padding-bottom:60px;
        max-width:900px;
      }

      .blog-detail-card{
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(12px);
        border-radius:18px;
        padding:40px;
        border:1px solid rgba(255,255,255,0.1);
        color:white;
        box-shadow:0 10px 30px rgba(0,0,0,0.3);
      }

      .blog-detail-title{
        font-size:2.5rem;
        font-weight:700;
        margin-top:10px;
        margin-bottom:20px;
      }

      .blog-detail-content p{
        font-size:1.05rem;
        line-height:1.7;
        margin-bottom:18px;
        opacity:0.9;
      }

      .blog-detail-content h2{
        margin-top:30px;
        margin-bottom:15px;
        font-size:1.7rem;
        color:#c770f0;
      }

      .back-btn{
        display:inline-block;
        margin-bottom:20px;
        color:#c770f0;
        font-weight:600;
        text-decoration:none;
      }

      .back-btn:hover{
        text-decoration:underline;
      }

      /* Tablet */

      @media (max-width:992px){

      .blog-detail-title{
        font-size:2rem;
      }

      }

      /* Mobile */

      @media (max-width:576px){

      .blog-detail-page{
        padding-top:100px;
      }

      .blog-detail-card{
        padding:25px;
      }

      .blog-detail-title{
        font-size:1.6rem;
      }

      .blog-detail-content p{
        font-size:0.95rem;
      }

      }

      `}</style>

    </Container>
  );
};

export default BlogDetail;