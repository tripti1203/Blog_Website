import "./about.css";

export default function About() {
  return (
    <div className ="about">
            <div className="aboutItem">
                <span className="aboutTitle">ABOUT</span>
                <img src="../image/img12.webp" alt=""/>
                <p>
                Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news, create a unique and beautiful blog.
                Blogging refers to writing, photography, and other media that's self-published online. Blogging started as an opportunity for individuals to write diary-style entries, but it has since been incorporated into websites for many businesses. The hallmarks of blogging include frequent updates, informal language, and opportunities for readers to engage and start a conversation.
                If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.
                Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.
                BlogSpot is a platform that provides everything that you need to write a blog, here you get different categories under which you can publish your blog and engage with other people blog.
                You can expand your knowledge with these platform where you can learn about different things from different people perspective.  
                </p>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">CATEGORIES</span>
                <ul className="aboutList">
                    <li className="aboutListItem">Life</li>
                    <li className="aboutListItem">Music</li>
                    <li className="aboutListItem">Fashion</li>
                    <li className="aboutListItem">Sports</li>
                    <li className="aboutListItem">Technology</li>
                    <li className="aboutListItem">Cinema</li>
                </ul>
            </div>
            <div className="aboutItem">
                <span className="aboutTitle">FOLLOW US</span>
                <div className="aboutSocial">
                    <i className="aboutIcon fab fa-facebook-square"></i>
                    <i className="aboutIcon fab fa-twitter-square"></i>
                    <i className="aboutIcon fab fa-pinterest-square"></i>
                    <i className="aboutIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
  );
}
