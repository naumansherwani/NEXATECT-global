const OWNER_EMAILS = [
  "naumansherwani.founder@nexatect.com",
  "naumankhansherwani@gmail.com",
];

export function isOwnerEmail(email?: string | null) {
  return !!email && OWNER_EMAILS.includes(email.toLowerCase().trim());
}
