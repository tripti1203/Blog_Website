import "./contact.css"

export default function Contact() {
  return (
    <div className="contact">
        <span className="contactTitle">CONTACT FORM</span>
        <form className="contactForm">
            <label>Name</label>
            <input type="text" className="contactInput"/>

            <label>Email</label>
            <input type="email" className="contactInput"/>

            <label>Message</label>
            <textarea rows="5" placeholder="Enter your message here..." className="contactInput"/>
            <button className="contactButton">Submit</button>
        </form>
    </div>
  );
}
