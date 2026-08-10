const OWNER_EMAILS = [
  "naumansherwani.founder@nexatect.com",
  "naumankhansherwani@gmail.com",
  // legacy auth account — keep until the auth email is migrated
  "naumansherwani@hostflowai.net",
];

export function isOwnerEmail(email?: string | null) {
  return !!email && OWNER_EMAILS.includes(email.toLowerCase().trim());
}
