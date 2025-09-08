const Contact = () => {
    return (
        <div className="contact-container wrapper m-100vh">
            <h1>Get in Touch</h1>
            <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <p className="contact-note">Or reach us at <a href="mailto:support@example.com">support@example.com</a></p>
        </div>
    )
}

export default Contact;