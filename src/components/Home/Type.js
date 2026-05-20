import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <div className="type-wrapper">
        <span className="static-text">I am a&nbsp;</span>

        <span className="type-text">
          <Typewriter
            options={{
              strings: [
                "Founder Of Chingu Pvt. Ltd.",
                "Web Developer",
                "MERN Stack Developer",
    
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 70,
            }}
          />
        </span>
      </div>

   <style>{`

  .type-wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: clamp(1.1rem, 4vw, 1.6rem);
    gap: 8px;                /* 🔥 proper spacing */
    width: 100%;
  }
  .type-text {
  white-space: nowrap;
  }
  .static-text {
    color: #d1d1d1;
    white-space: nowrap;
  }

  .type-text {
    background: linear-gradient(45deg, #c770f0, #7c3aed);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
    min-height: 1.6em;       /* 🔥 prevents jump */
    display: inline-flex;
    align-items: center;
  }

  .Typewriter__wrapper {
    display: inline-block;
  }

  .Typewriter__cursor {
    color: #c770f0;
    font-weight: 600;
    margin-left: 2px;
  }



  @media (max-width: 768px) {

  .type-wrapper {
    justify-content: flex-start;
    text-align: left;
  }

}  @media (max-width: 480px) {
    .type-wrapper {
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }

`}</style>


    </>
  );
}

export default Type;
