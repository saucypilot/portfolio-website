"use client";
import { useRef, useState } from "react";

export default function FooterLinksPopover() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openNow = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    // tiny delay prevents flicker when moving from button -> panel
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="footer-links-popover"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        className="links-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="footer-links-panel"
        onFocus={openNow}
        onBlur={closeSoon}
      >
        Links
      </button>

      <div
        id="footer-links-panel"
        role="menu"
        className={`links-popover ${open ? "open" : ""}`}
        onMouseEnter={openNow}
        onMouseLeave={closeSoon}
      >
        <div className="links-popover-inner">
          <ul>
            <li><a role="menuitem" href="https://www.linkedin.com/in/iriandurian/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a role="menuitem" href="https://github.com/saucypilot" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a role="menuitem" href="https://codepen.io/saucypilot" target="_blank" rel="noopener noreferrer">CodePen</a></li>
            <li><a role="menuitem" href="https://devpost.com/saucypilot?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">Devpost</a></li>
          </ul>
        </div>
        <span className="links-popover-caret" aria-hidden="true" />
      </div>
    </div>
  );
}
