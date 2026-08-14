"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex relative flex-1 w-full justify-between items-center px-3.5 py-10">
      <div className="absolute top-0 h-px w-full bg-linear-to-r from-transparent via-brand to-transparent mb-12"></div>
      <p>© 2026 Guilherme Cesário.</p>
      <nav className="flex justify-between gap-3.5 items-center">
        <Link href={"https://github.com/Gu1san"}>
          <GitHubIcon
            className="text-foreground-muted hover:text-foreground transition-all"
            sx={{ fontSize: 35 }}
          />
        </Link>
        <Link href={"mailto:guilhermecesario1808@gmail.com"}>
          <EmailIcon
            className="text-foreground-muted hover:text-foreground transition-all"
            sx={{ fontSize: 40 }}
          />
        </Link>
        <Link href={"https://www.linkedin.com/in/guilherme-cesário-b5138221a/"}>
          <LinkedInIcon
            className="text-foreground-muted hover:text-foreground transition-all"
            sx={{ fontSize: 40 }}
          />
        </Link>
      </nav>
    </footer>
  );
}
