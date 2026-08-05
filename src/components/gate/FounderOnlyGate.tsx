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

export default function FounderOnlyGate({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  const allowed = ALWAYS_ALLOWED.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/")
  );

  if (allowed || isOwnerEmail(user?.email)) return <>{children}</>;

  return <Maintenance />;
}