import { personalInfo, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#040810]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-xs font-bold text-white">
                RK
              </div>
              <span className="font-semibold text-white">{personalInfo.name}</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Performance Marketing & Growth Analytics
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 transition-colors hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">{personalInfo.availability}</p>
        </div>
      </div>
    </footer>
  );
}
