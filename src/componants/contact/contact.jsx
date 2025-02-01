import "./contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json";
import doneAnimation from "../../animation/done.json";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("xgvoyzyv");
    return(
        <section className="contact">
            <h1 className="title">
                <i className="icon-envelope"></i>
                contact us
            </h1>
            <p>Contact us for more information and Get notified when I publish something new.</p>

            <div className="flex">
                <form  onSubmit={handleSubmit} className="flex">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <ValidationError 
                        prefix="Email" 
                        field="name"
                        errors={state.errors}
                    />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <ValidationError 
                        prefix="Email" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Sending..." : "Send"}
                    </button>
                    {state.succeeded && 
                    
                    <div className="flex" style={{marginRight:"3rem"}}>
                        <Lottie animationData={doneAnimation}
                        style={{height:"80px"}} loop={false}/>
                        <p style={{margin:"-2rem"}}>Thanks for contacting us!</p>
                    </div>

                    }
                </form>

                <div className="animation">
                    <Lottie animationData={contactAnimation}
                    style={{height:"300px"}}/>
                </div>
            </div>
        </section>
    )
}