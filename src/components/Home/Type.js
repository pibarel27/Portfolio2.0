import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <div className="type-wrapper">
        <span className="static-text">I am a </span>

        <span className="type-text">
          <Typewriter
            options={{
              strings: [
                "Web Developer 💻",
                "Freelancer 🚀",
                "MERN Stack Developer 🔥",
                "Open Source Contributor 🌍",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 70,
            }}
          />
        </span>
      </div>

      {/* 🔥 Internal Styling */}
      <style>{`

        .type-wrapper {
          font-size: 1.6rem;
          font-weight: 500;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          animation: fadeIn 1.5s ease forwards;
        }

        .static-text {
          margin-right: 8px;
          color: #ccc;
        }

        .type-text {
          background: linear-gradient(45deg, #c770f0, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }

        /* Blinking Cursor */
        .Typewriter__cursor {
          color: #c770f0;
          font-weight: bold;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .type-wrapper {
            font-size: 1.3rem;
            justify-content: center;
            text-align: center;
          }
        }

      `}</style>
    </>
  );
}

export default Type;