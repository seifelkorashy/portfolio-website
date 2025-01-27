import "./contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json";

export default function Contact() {
    return(
        <section className="contact">
            <h1 className="title">
                <i className="icon-envelope"></i>
                contact us
            </h1>
            <p>Contact us for more information and Get notified when I publish something new.</p>

            <div className="flex">
                <form className="flex">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="animation">
                    <Lottie animationData={contactAnimation}
                    style={{height:"300px"}}/>
                </div>
            </div>
        </section>
    )
}