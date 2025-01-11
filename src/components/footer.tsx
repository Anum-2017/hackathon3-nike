import Link from "next/link";
import Image from "next/image";
import twitterIcon from "../../public/icons/twitter.png";
import facebookIcon from "../../public/icons/facebook.png";
import youtubeIcon from "../../public/icons/youtube.png";
import instagramIcon from "../../public/icons/instagram.png";
import location from "../../public/icons/location.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Column 1: Find a Store */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
                        <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                        <li><Link href="#" className="hover:underline">Send Us a Feedback</Link></li>
                        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                    </ul>
                </div>

                {/* Column 2: Get Help */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3: About Nike */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Column 4: Social Media Icons */}
                <div className="flex justify-center md:justify-start space-x-4">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href='#'>
                                <Image src={twitterIcon} alt='Twitter Icon' width={24} height={24}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <Image src={facebookIcon} alt='Facebook Icon' width={24} height={24}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <Image src={youtubeIcon} alt='Youtube Icon' width={24} height={24}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <Image src={instagramIcon} alt='Instagram Icon' width={24} height={24}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Information */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
                <div className="flex mb-4 md:mb-0 gap-2">
                    <Image src={location} alt='Location Icon' width={16} height={16}/>
                    <p>India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;