export default function Footer() {
  return (
    <footer className="bg-deep-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-1.5">
                <span className="material-symbols-outlined text-white text-xl">campaign</span>
              </div>
              <span className="text-xl font-black uppercase tracking-tighter">PR Hub</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              The world's leading platform for professional communications development and
              international career placement.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a href="mailto:info@prhub.org" className="text-white hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href="tel:+1234567890" className="text-white hover:text-primary transition-colors">
                <span className="material-symbols-outlined">call</span>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-primary">
              Resources
            </h5>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Scholarship Directory', 'Internship Programs', 'Fellowship Guidelines', 'Industry Partnerships'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-primary">
              Company
            </h5>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About Foundation', 'Executive Team', 'Annual Reports', 'Contact Support'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-primary">
              Newsletter
            </h5>
            <p className="text-slate-400 text-sm mb-6">
              Stay informed about upcoming international opportunities.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border-none px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full text-white placeholder-slate-500"
              />
              <button className="bg-primary hover:bg-primary-dark px-4 py-3 transition-colors flex-shrink-0">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} PR Hub Opportunity Network. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
