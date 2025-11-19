import { useRef, useEffect } from "react";

interface NavbarProps {
  navOpen: boolean;
}

const Navbar = ({ navOpen }: NavbarProps) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;

    setTimeout(() => {
      if (!activeBox.current || !lastActiveLink.current) return;

      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }, 100);
  };

  const activeCurrentLink = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    lastActiveLink.current?.classList.remove("active");
    event.currentTarget.classList.add("active");
    lastActiveLink.current = event.currentTarget;
    initActiveBox();
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active grid",
      ref: lastActiveLink,
    },
    { label: "About", link: "#about", className: "nav-link grid" },
    { label: "Skills", link: "#skills", className: "nav-link grid" },
    { label: "Project", link: "#work", className: "nav-link grid" },
    { label: "Contact", link: "#contact", className: "nav-link grid" },
  ];

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const middle = window.innerHeight / 3;
      let activeId: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= middle && rect.bottom >= middle) {
          activeId = section.getAttribute("id");
        }
      });

      if (activeId) {
        const currentLink = document.querySelector(
          `a[href="#${activeId}"]`
        );

        if (
          currentLink &&
          currentLink !== lastActiveLink.current
        ) {
          lastActiveLink.current?.classList.remove("active");
          currentLink.classList.add("active");

          // Cast agar sesuai tipe
          lastActiveLink.current = currentLink as HTMLAnchorElement;

          initActiveBox();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", initActiveBox);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }) => (
        <a
          key={link}
          href={link}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
