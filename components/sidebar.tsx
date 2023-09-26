"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Code, ImageIcon, LayoutDashboard, LucidePenLine, MessageSquare, MusicIcon, Settings, VideoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
const montserrat = Montserrat({
     weight:"600", 
     subsets:["latin"]
    });

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-sky-500"
    },
    {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500"
    },
    {
        label: 'Image generation',
        icon: ImageIcon,
        href: '/image',
        color: "text-pink-700"
    },
    {
        label: 'Video generation',
        icon: VideoIcon,
        href: '/video',
        color: "text-orange-500"
    },
    {
        label: 'Music generation',
        icon:  MusicIcon,
        href: '/music',
        color: "text-emerald-500"
    },
    {
        label: 'Code generation',
        icon: Code,
        href: '/code',
        color: "text-green-700"
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    }
];

const Sidebar = () => {
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14 ">
                    <div className="relative w-8 h-8 mr-4">
                        <Image
                            src="/logo.png"
                            fill  // This is the default
                            alt="Logo"
                        />
                    </div>
                    <h1 className={cn('text-2xl font-bold', montserrat.className)}>
                        Genious
                    </h1>
                </Link>
                <div className='space-y-1'>
                    {routes.map((route) => (
                        <Link 
                            key={route.href}
                            href={route.href}
                            className={cn(
                                'flex items-center px-3 py-2 rounded-md',
                                'hover:bg-gray-700 hover:text-white',
                                'transition-colors duration-200',
                                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                            )}
                        >
                            <div className=' flex items-center flex-1'>
                                <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;