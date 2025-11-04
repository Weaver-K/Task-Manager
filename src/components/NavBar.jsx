import { Link, NavLink } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-background shadow-sm sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          Task Tracker
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavLink to="/" end>
                {({ isActive }) => (
                  <Button variant={isActive ? "default" : "ghost"}>Dashboard</Button>
                )}
              </NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink to="/tasks">
                {({ isActive }) => (
                  <Button variant={isActive ? "default" : "ghost"}>Tasks</Button>
                )}
              </NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavLink to="/about">
                {({ isActive }) => (
                  <Button variant={isActive ? "default" : "ghost"}>About</Button>
                )}
              </NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Search + Theme Toggle */}
      <div className="flex items-center space-x-3">
        <Input placeholder="Search tasks..." className="w-48 md:w-64" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
