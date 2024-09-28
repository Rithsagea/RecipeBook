import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export default function Navigation() {
  return <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            RecipeBook
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/recipe" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Recipe List
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>;
}
