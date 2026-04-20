import Button from "../ui/Button";
import Link from "../ui/Link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mx-auto mt-auto after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-black/10 after:content-['']">
      <div className="max-w-360 mx-auto p-8 flex flex-col items-center">
        <div className="w-full grid grid-cols-4 gap-8 mb-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">About</h3>
            <ul className="flex flex-col gap-2 text-black/50">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Support</h3>
            <ul className="flex flex-col gap-2 text-black/50">
              <li><Link href="/support">Contact Us</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Legal</h3>
            <ul className="flex flex-col gap-2 text-black/50">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/returns">Returns</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Newsletter</h3>
            <form action="#" className="flex flex-col gap-2 text-black/50">
              <label htmlFor="subscribe">Subscribe for exclusive deals</label>
              <div className="flex flex-col gap-2 max-lg:flex-row">
                <input type='email' id="subscribe" placeholder="Enter your email" className=' w-full rounded-xl ring-1 ring-black/10 bg-black/5 focus:outline-none px-3 py-2'/>
                <Button variant='primary'>Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="relative w-full m-auto text-center text-black/50 mt-4 pt-8 after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-black/10 after:content-['']">
          <p>&copy; {currentYear}  TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;