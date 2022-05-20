import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tech & Trending</span>
        <span className="headerTitleLg">BlogSpot</span>
      </div>
      <img
        className="headerImg"
        src="https://tabthemes.com/wp-content/uploads/2022/01/Blog-Like-a-Pro-2021-Best-Blog-Templates-to-Create.jpg"
        alt=""
      />
    </div>
  );
}
