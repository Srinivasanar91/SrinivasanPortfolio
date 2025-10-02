import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mr. A. Srinivasan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Empowering innovation and fostering lifelong learning
            <Heart className="h-4 w-4 text-accent fill-accent" />
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: October 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
