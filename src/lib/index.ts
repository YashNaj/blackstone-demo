// place files you want to import through the `$lib` alias in this folder
import {
  Home,
  Gavel,
  Computer,
  User,
  Star,
  Dumbbell,
  Flag,
  type Icon as IconType,
} from "lucide-svelte";

interface Route {
  url: string;
  title: string;
  icon: typeof IconType;
}

export const ROUTES: Route[] = [
  {
    url: "/",
    title: "Home",
    icon: Home,
  },
  {
    url: "/legal",
    title: "Legal",
    icon: Gavel,
  },
  {
    url: "/it",
    title: "IT",
    icon: Computer,
  },
  {
    url: "/human-resources",
    title: "Human Resources",
    icon: User,
  },
  {
    url: "/marketing",
    title: "Marketing",
    icon: Star,
  },
  {
    url: "/training",
    title: "Training",
    icon: Dumbbell,
  },
  {
    url: "/compliance",
    title: "Compliance",
    icon: Flag,
  },
];
