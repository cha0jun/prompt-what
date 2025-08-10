"use client"
import { ModeToggle } from "./mode-toggle";
import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

//documentation: https://ui.shadcn.com/docs/components/navigation-menu


export default function Header() {
    return (
    <header className="flex items-center justify-between p-4 border-b">
        <div className="flex gap-6">
            <div className="flex">
                <h1 className="text-4xl font-extrabold tracking-tight text-balance">Prompt</h1><h1 className="text-4xl font-thin tracking-tight italic">What?</h1>
            </div>
        <NavigationMenu viewport={false}>
        <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuLink href="">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink href="">Library</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
        </div>
    
        <ModeToggle></ModeToggle>
        
    </header>
    );
}