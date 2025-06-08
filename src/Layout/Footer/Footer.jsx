import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.about}>
          <h3>FawTech Electronics Trading LLC</h3>
          <p>Your one-stop shop for the latest electronics and gadgets. Stay connected with us!</p>
        </div>
        <div style={styles.links}>
          <h4>Quick Links</h4>
          <ul style={styles.ul}>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div style={styles.contact}>
          <h4>Contact Us</h4>
          <p>113,ELHAM MOHAMED AMIN MIRZA,ABU HAIL DUBAI,U.A.E</p>
          <p>Email: noorlakdawala21@gmail.com</p>
          <p>Phone: +971523297987</p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        &copy; {new Date().getFullYear()} FawTech Electronics Trading LLC. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#101010',
    color: '#fff',
    padding: '40px 20px',
    marginTop: '40px',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  about: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  },
  links: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  },
  contact: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  bottomBar: {
    marginTop: '20px',
    borderTop: '1px solid #333',
    paddingTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export default Footer;