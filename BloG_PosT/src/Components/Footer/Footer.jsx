import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <div>
            <div>
              <Link>
                <img
                  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <div>
                <h2>Resources</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Follow us</h2>
                <ul>
                  <li>
                    <a
                      href="https://github.com/shafali8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li href="/">Discord</li>
                </ul>
              </div>
              <div>
                <h2>Legal</h2>
                <ul>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <span>
              ©️ 2024
              <a href="#">Shafali Sonker</a>
              All Right Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
