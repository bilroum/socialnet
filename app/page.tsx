import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-4 flex items-center gap-2">
      <h1>home page content</h1>
    </div>
  );
}
