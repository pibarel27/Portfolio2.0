import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ---------------- BLOG DATA ---------------- */

export const datablog = [
// {
// id: "umang-lai-haraoba",
// title: "Umang Lai Haraoba Festival",
// description: "A sacred ritual festival celebrated in Manipur.",
// content: `
// <h2>Umang Lai Haraoba</h2>
// <p>Umang Lai Haraoba is one of the oldest and most culturally significant festivals of Manipur.</p>
// `
// },
// {
// id: "moirang-history",
// title: "History of Moirang",
// description: "Moirang is one of the oldest cultural centres in Manipur.",
// content: `
// <h2>History of Moirang</h2>
// <p>Moirang is an ancient principality of Manipur known for its rich cultural heritage.</p>
// `
// },
// {
// id: "khamba-thoibi",
// title: "Khamba Thoibi",
// description: "The legendary love story of Moirang kingdom.",
// content: `
// <h2>Khamba Thoibi</h2>
// <p>The legend of Khamba and Thoibi is one of the most famous stories in Manipuri folklore.</p>
// `
// }
{
id: "aiml-chatbot",
title: "Development of a Chatbot Using AIML Technologies",
description: "How AIML is used to develop rule-based conversational chatbots.",
content: `<h2>Introduction</h2>
<p>
Artificial Intelligence has significantly transformed the way humans interact with computers. One of the most popular applications of AI is the chatbot. Chatbots are software programs designed to simulate human conversation and provide automated responses to user queries. They are widely used in customer support, education, healthcare, and e-commerce platforms.
</p>

<p>
The development of chatbots has evolved from simple rule-based systems to advanced conversational agents powered by Artificial Intelligence. One of the technologies used for building rule-based chatbots is <strong>Artificial Intelligence Markup Language (AIML)</strong>, which allows developers to create conversational patterns and responses in a structured way.
</p>

<h2>What is AIML?</h2>
<p>
Artificial Intelligence Markup Language (AIML) is an XML-based language designed for creating natural language conversation between humans and machines. It uses pattern matching techniques to recognize user inputs and generate appropriate responses. AIML was introduced in the late 1990s and became widely known through the development of the chatbot ALICE (Artificial Linguistic Internet Computer Entity). :contentReference[oaicite:0]{index=0}
</p>

<p>
In AIML, the knowledge of a chatbot is organized into units called <strong>categories</strong>. Each category consists of a pattern and a template. The pattern represents the user's input, while the template contains the chatbot's response.
</p>

<pre>
&lt;category&gt;
&lt;pattern&gt;HELLO&lt;/pattern&gt;
&lt;template&gt;Hello! How can I help you today?&lt;/template&gt;
&lt;/category&gt;
</pre>

<h2>Working Mechanism of AIML Chatbots</h2>
<p>
AIML-based chatbots operate using pattern recognition and predefined response templates. When a user enters a message, the chatbot analyzes the input and matches it with a stored pattern in its knowledge base. Once a match is found, the chatbot returns the corresponding response defined in the template. :contentReference[oaicite:1]{index=1}
</p>

<p>
The process generally involves three main steps:
</p>

<ul>
<li>User enters a query through a chatbot interface.</li>
<li>The system processes the input and searches for a matching pattern.</li>
<li>The chatbot generates a response based on the stored template.</li>
</ul>

<h2>System Architecture</h2>
<p>
A typical AIML chatbot system consists of several components:
</p>

<ul>
<li><strong>User Interface</strong> – Allows users to interact with the chatbot.</li>
<li><strong>AIML Interpreter</strong> – Processes the AIML files and matches patterns.</li>
<li><strong>Knowledge Base</strong> – Stores AIML categories containing patterns and responses.</li>
<li><strong>Response Generator</strong> – Produces the final reply to the user.</li>
</ul>

<p>
This architecture enables the chatbot to provide real-time responses and maintain consistent conversation patterns.
</p>

<h2>Advantages of AIML Chatbots</h2>
<ul>
<li>Easy to design and implement</li>
<li>Lightweight and efficient for simple conversational systems</li>
<li>Suitable for domain-specific chatbots</li>
<li>Open-source and widely supported</li>
</ul>

<h2>Limitations</h2>
<p>
Although AIML chatbots are useful for structured conversations, they have some limitations. Since responses are rule-based, they may become repetitive and lack deeper understanding of context. They also depend heavily on predefined patterns, which can limit the chatbot's ability to handle unexpected queries. :contentReference[oaicite:2]{index=2}
</p>

<h2>Applications</h2>
<p>
AIML chatbots are widely used in several areas including:
</p>

<ul>
<li>Customer support systems</li>
<li>Educational assistants</li>
<li>Information retrieval systems</li>
<li>Virtual help desks</li>
<li>Website interactive assistants</li>
</ul>

<h2>Conclusion</h2>
<p>
The development of chatbots using AIML technology demonstrates how artificial intelligence can be used to improve human-computer interaction. Although modern chatbots often rely on machine learning and deep learning techniques, AIML remains an effective approach for building rule-based conversational systems. With proper knowledge design and pattern creation, AIML chatbots can provide efficient automated responses and enhance user engagement in many digital platforms.
</p>`
}
];


/* ---------------- BLOG COMPONENT ---------------- */

export const Myblog = () => {
return (
<HelmetProvider>

<Container className="blog-page">

<Helmet>
<meta charSet="utf-8" />
<title>My Blog</title>
<meta name="description" content="Manipuri cultural blogs" />
</Helmet>

<Row className="mb-5">
<Col>
<h1 className="blog-title">My Blog</h1>
<hr className="blog-line"/>
</Col>
</Row>

<Row>

{datablog.map((data, i) => (

<Col lg={4} md={6} sm={12} key={i} className="mb-4">

<motion.div
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.5, delay:i*0.2 }}
>

<Card className="blog-card">

<Card.Body>

<h5>{data.title}</h5>

<p>{data.description}</p>

<Link to={`/blog/${data.id}`} className="blog-btn">
Read Article →
</Link>

</Card.Body>

</Card>

</motion.div>

</Col>

))}

</Row>

<style>{`

.blog-page{
padding-top:120px;
padding-bottom:60px;
}

/* Title */

.blog-title{
font-size:2.8rem;
font-weight:700;
color:white;
}

.blog-line{
width:80px;
border:2px solid #c770f0;
}

/* Blog Card */

.blog-card{
background: rgba(255,255,255,0.05);
border:1px solid rgba(255,255,255,0.1);
backdrop-filter: blur(10px);
border-radius:16px;
padding:25px;
transition: all 0.4s ease;
color:white;
height:100%;
}

.blog-card:hover{
transform: translateY(-10px);
box-shadow:0 10px 30px rgba(199,112,240,0.4);
border:1px solid #c770f0;
}

.blog-card h5{
font-weight:600;
margin-bottom:10px;
}

.blog-card p{
font-size:0.9rem;
opacity:0.8;
}

/* Button */

.blog-btn{
display:inline-block;
margin-top:10px;
color:#c770f0;
font-weight:600;
text-decoration:none;
}

.blog-btn:hover{
text-decoration:underline;
}

/* Tablet */

@media (max-width:992px){

.blog-title{
font-size:2.2rem;
}

}

/* Mobile */

@media (max-width:576px){

.blog-page{
padding-top:100px;
}

.blog-title{
font-size:1.8rem;
}

.blog-card{
padding:20px;
}

.blog-card p{
font-size:0.85rem;
}

}

`}</style>

</Container>

</HelmetProvider>
);
};