import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { useLocation } from "react-router-dom";

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <SocialLinkIcon icon={faLinkedin} link="https://www.linkedin.com/company/digitalapes/" />
      <SocialLinkIcon icon={faInstagram} link="https://www.instagram.com/digitalapes.co/" />
      <SocialLinkIcon icon={faDribbble} link="https://dribbble.com/digitalapes" />
    </div>
  );
}

function SocialLinksForNavbar() {
  return (
    <div className="flex items-center gap-4">
      <SocialLinkIconForNavbar icon={faLinkedin} link={"https://www.linkedin.com/company/digitalapes/"} />
      <SocialLinkIconForNavbar icon={faInstagram} link={"https://www.instagram.com/digitalapes.co/"} />
      <SocialLinkIconForNavbar icon={faDribbble} link={"https://dribbble.com/digitalapes"} />
    </div>
  );
}

export { SocialLinks, SocialLinksForNavbar };

function SocialLinkIconForNavbar({ icon, link }) {
  let { pathname } = useLocation();

  let theme = "light";
  if (pathname === "/services") theme = "dark";

  return (
    <a
      href={`${link}`}
      target="_blank"
      className={`${
        theme === "dark"
          ? "text-slate-400 hover:text-white text-3xl"
          : "text-slate-700 hover:text-slate-900 text-3xl"
      }`}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

function SocialLinkIcon({ icon, link }) {
  return (
    <a
      href={`${link}`}
      target="_blank"
      className={`text-slate-700 hover:text-slate-900 text-2xl`}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
