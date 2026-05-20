import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1400,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.05,
          },
          move: {
            direction: "none",
            speed: 0.4,
            out_mode: "out",
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "trail",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 4,
              pauseOnStop: true,
            },
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
