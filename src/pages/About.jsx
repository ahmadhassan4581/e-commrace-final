import React from 'react';
import './About.css';

const teamMembers = [
  { role: 'Managing Director', name: 'Mehak Tariq', image: 'https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png' },
  { role: 'Business Partner', name: 'Danial Manzor', image: 'https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png' },
  { role: 'Web Development', name: 'M. Waleed', image: 'https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png' },
  { role: 'Backend Developer', name: 'M. Mazz', image: 'https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png' },
  { role: 'Logo & UI Design', name: 'M. Jamal', image: 'https://logos.textgiraffe.com/logos/logo-name/Elisha-designstyle-friday-m.png' },
];

const About = () => {
  return (
    <div className="contact-us-container">
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <p className="role">{member.role}</p>
            <p className="name">{member.name}</p>
          </div>
        ))}
      </div>

      <div className="message-section">
        <h3>Message From Managing Director:</h3>
        <p><strong>Dear valued fashion enthusiasts,</strong></p>
        <p>
          Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture – Elisha!
          We are on the verge of launching an online fashion emporium that will redefine your style, elegance, and individuality.
        </p>
        <p>
          At Elisha, we believe that fashion is more than just clothing: it's a form of self-expression and an art of embracing one’s uniqueness.
          Our carefully curated collection will cater to all your fashion desires, ensuring you step into the spotlight wherever you go.
        </p>
        <p>
          Our team has worked tirelessly to bring you a diverse range of high-quality apparel and accessories that embody the latest trends
          and timeless classics. From chic casual wear to sophisticated formal ensembles, we have something special in store for every occasion and every taste.
        </p>

        <h4>Meet the Mastermind:</h4>
        <p>
          Allow me to introduce myself, Mehak Tariq, the Managing Director of Elisha.
          With an unwavering passion for fashion and a vision to bring forth a brand that resonates with the modern generation,
          I am delighted to embark on this sartorial journey with you.
        </p>

        <h4>Stay Connected:</h4>
        <p>
          As the launch of our online store approaches rapidly, we encourage you to stay connected with us.
          Bookmark our website domain – <strong>theelisha.com</strong> – and be the first to experience our exclusive collection.
          Additionally, you can reach out to us through the provided contact details for any inquiries or to join our mailing list.
        </p>

        <h4>Visit Our Office:</h4>
        <p>
          For our patrons in Lahore, Pakistan, we invite you to our office located at Landmark Plaza, Jail road.
          Come and get a sneak peek into the world of Elisha while we prepare to unveil our digital wonderland.
        </p>

        <h4>Get Ready for Elisha:</h4>
        <p>
          We are counting down the days until our grand opening, and we cannot wait to share the Elisha experience with all of you.
          Your unwavering support will be our guiding light as we embark on this exciting journey together.
        </p>
        <p>
          Fashion forward, trendsetters – the future belongs to Elisha! Be a part of this captivating venture, and let’s redefine fashion in Pakistan and beyond.
        </p>

        <p><strong>With fashionable regards,</strong></p>
        <p>
          Mehak Tariq<br />
          Managing Director, Elisha<br />
          Contact: +92 306 4313804<br />
          Email: info@theelisha.com
        </p>
      </div>
    </div>
  );
};

export default About;
