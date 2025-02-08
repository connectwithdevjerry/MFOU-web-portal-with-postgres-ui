import { Navbar } from "../components";

const Contact = () => {
  return (
    <div className="login-container">
      <Navbar />
      <main className="container login-wrapper">
        <form id="login-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <footer>
        <p>&copy; 2024 Contact Us Page</p>
      </footer>
    </div>
  );
};

export default Contact;
