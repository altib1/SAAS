"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, User, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
{
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
},
{
    label: 'Image generation',
    icon: ImageIcon,
    href: '/image',
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
},
{
    label: 'Video generation',
    icon: VideoIcon,
    href: '/video',
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
},
{
    label: 'Music generation',
    icon:  Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
},
{
    label: 'Code generation',
    icon: Code,
    href: '/code',
    color: "text-green-700",
    bgColor: "bg-green-700/10",
},
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center">
              Explore the possibilities of AI with <span className="text-primary-500">AI-Playground</span>
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
              AI-Playground is a web app that allows you to generate images, videos, music, and code using artificial intelligence.
          </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
             <Card
             onClick={() => router.push(tool.href)}
             key={tool.href}
             className="flex items-center p-4 border-black/5 items-center justify-between hover:shadow-lg transition-all duration-200 cursor-pointer"
             >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                      <tool.icon className={cn("w-8 h-8", tool.color)}/>
                  </div>
                  <div className="font-semibold">
                      {tool.label}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5" />
             </Card>
          ))}
      </div>
    </div>
  )
}
export default DashboardPage;