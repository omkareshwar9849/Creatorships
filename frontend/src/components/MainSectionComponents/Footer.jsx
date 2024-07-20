import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-200 p-6 md:py-12 w-full">
      <div className="container mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <a href="/">About Us</a>
          <a href="/">Our Team</a>
          <a href="/">Careers</a>
          <a href="/">News</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Partnerships</h3>
          <a href="/">For Businesses</a>
          <a href="/">For Creators</a>
          <a href="/">Success Stories</a>
          <a href="/">FAQs</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <a href="/">Blog</a>
          <a href="/">Guides</a>
          <a href="/">Webinars</a>
          <a href="/">Templates</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Cookie Policy</a>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <a href="/">Support</a>
          <a href="/">Sales</a>
          <a href="/">Partnerships</a>
          <a href="/">Media</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
