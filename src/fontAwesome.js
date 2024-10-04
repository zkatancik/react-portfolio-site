import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faXTwitter, // Assuming 'faX' exists; otherwise, choose an appropriate icon
} from "@fortawesome/free-brands-svg-icons";

// Add any other icons you need from different styles (solid, regular, etc.)
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Add all imported icons to the library
library.add(
  faGithub,
  faLinkedin,
  faXTwitter,
  faEnvelope
  // Add other icons here
);
