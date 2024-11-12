import Link from 'next/link';

const footerSections = {
  contact: {
    title: 'Contact Us',
    items: [
      'Email: icmi2024@iitj.ac.in',
      'IIT Jodhpur, Rajasthan',
      'India'
    ]
  },
  quickLinks: {
    title: 'Quick Links',
    items: ['Call for Papers', 'Registration', 'Program', 'Venue']
  },
  social: {
    title: 'Follow Us',
    items: ['Twitter', 'LinkedIn']
  }
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{footerSections.contact.title}</h3>
            {footerSections.contact.items.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{footerSections.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerSections.quickLinks.items.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{footerSections.social.title}</h3>
            <div className="flex space-x-4">
              {footerSections.social.items.map((item, i) => (
                <Link key={i} href="#" className="hover:text-white">{item}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 ICMI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}