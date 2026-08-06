import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { isOwnerEmail } from "@/lib/ownerIdentity";
import Maintenance from "@/pages/Maintenance";

/**
 * Public "work in progress" gate.
 * Everyone sees the Maintenance page except the founder (owner email, signed in).
 * Auth routes stay reachable so the founder can sign in.
 */
const ALWAYS_ALLOWED = [
  "/login",
  "/forgot-password",
  "/reset-password",
  "/maintenance",
  "/unsubscribe",
];

/**
 * Editing environments (Lovable sandbox / preview / localhost) always show the
 * real site so the founder can build without signing in.
 * The public production domains stay gated.
 */
function isEditingEnvironment() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return (
    h === "localhost" ||
    h === "127.0.0.1" ||
    h.startsWith("id-preview--") ||
    h.endsWith(".lovableproject.com") ||
    h.endsWith(".sandbox.lovable.dev") ||
    import.meta.env.DEV
  );
}

export default function FounderOnlyGate({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (isEditingEnvironment()) return <>{children}</>;

  if (loading) return null;

  const allowed = ALWAYS_ALLOWED.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/")
  );

  if (allowed || isOwnerEmail(user?.email)) return <>{children}</>;

  return <Maintenance />;
}