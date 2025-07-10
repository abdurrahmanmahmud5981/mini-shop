import React from 'react';
import { Link } from 'react-router';
import {
    Store,
    Heart,
    CreditCard,
} from 'lucide-react';
import { ROUTES } from '../../constants/routes';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-emerald-900 text-white">


            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col  justify-between items-center space-y-4 ">
                        <div className="flex items-center space-x-8">
                            <Link to={ROUTES.HOME} className="flex-shrink-0 flex items-center space-x-2">
                                <Store className="w-8 h-8 text-emerald-100" />
                                <h1 className="text-2xl font-bold text-emerald-100">Mini Shop</h1>
                            </Link>

                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <CreditCard className="w-5 h-5 text-gray-300" />
                                <span className="text-gray-300 text-sm">Secure payments</span>
                            </div>
                            <div className="flex space-x-4 text-sm text-gray-300">
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                        <div className="text-gray-300 text-sm">
                            © {currentYear} ShopHub. All rights reserved. Made with{' '}
                            <Heart className="w-4 h-4 inline text-red-500" /> By Abdur Rahman Mahmud.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};