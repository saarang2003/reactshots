import React from 'react'
import { Github, Coffee, ArrowRight } from 'lucide-react';

function Footer(){
    return (

        <footer className="bg-[#0f1035] text-gray-300 border-t-0 rounded-t-md ">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
                    {/* Brand and description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 p-4">
          <img src="./public/logo.png" alt="logo" className="w-6 h-6" />
          <span className="font-bold text-white text-2xl">ReactShots</span>
        </div>
                        <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
                          Master React Interviews with Real-World Projects Sharpen your skills with a curated collection of React challenges inspired by real interview questions.
                        </p>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-3 gap-4 sm:max-w-md">
                            <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4 text-center">
                                <div className="text-xl font-bold text-white">30+</div>
                                <div className="text-xs text-gray-400">Projects</div>
                            </div>
                            <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4 text-center">
                                <div className="text-xl font-bold text-white">75K+</div>
                                <div className="text-xs text-gray-400">Developers</div>
                            </div>
                            <div className="rounded-lg border border-gray-800 bg-gray-800/30 p-4 text-center">
                                <div className="text-xl font-bold text-white">Free</div>
                                <div className="text-xs text-gray-400">Forever</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><a href="#" className="transition-colors hover:text-white">Home</a></li>
                            <li><a href="#" className="transition-colors hover:text-white">All Projects</a></li>
                            <li><a href="#" className="transition-colors hover:text-white">About</a></li>
                            <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Connect</h3>
                        <ul className="mt-4 space-y-4 text-sm">
                            <li>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-800/40 px-4 py-3 transition-colors hover:bg-gray-700 hover:text-white shadow-sm"
                                >
                                    <Github className="h-5 w-5 text-green-400 group-hover:text-green-300" />
                                    <div className="flex justify-between w-full items-center">
                                        <div className="font-semibold">GitHub</div>
                                        <div className="text-lg text-gray-400 group-hover:text-gray-300"><ArrowRight/></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.buymeacoffee.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-800/40 px-4 py-3 transition-colors hover:bg-gray-700 hover:text-white shadow-sm"
                                >
                                    <Coffee className="h-5 w-5 text-amber-400 group-hover:text-amber-300" />
                                    <div className="flex justify-between w-full items-center">
                                        <span className="font-semibold">Buy me a coffee</span>
                                        <span className="text-xs text-gray-400 group-hover:text-gray-300"><ArrowRight/></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-gray-800 pt-6">
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <p className="text-xs text-gray-400">
                            © 2025 ReactShots. Crafted with ❤️ for developers worldwide.
                        </p>
                        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400">
                            <a href="#" className="hover:text-white">Privacy</a>
                            <a href="#" className="hover:text-white">Terms</a>
                            <a href="#" className="hover:text-white">Cookies</a>
                            <a href="#" className="hover:text-white">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )   
}

export default Footer;
