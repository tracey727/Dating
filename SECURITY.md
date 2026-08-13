# GENEVIEVE Dating — security rules

## Non-negotiable production controls
1. 18+ only.
2. No profile enters discovery until identity verification succeeds.
3. Do not store raw driver-licence/passport images in the primary application database.
4. Prefer a vetted verification provider and store only result, provider reference and minimum necessary attributes.
5. Enforce MFA for moderators/admins.
6. Keep admin/moderator tooling on a separate privileged surface.
7. Rate-limit registration, login, likes, messages, reports and verification attempts.
8. Detect duplicate accounts using privacy-reviewed signals.
9. Use malware scanning and image moderation for uploads.
10. No exact public location; use coarse area/distance.
11. Block must stop contact immediately.
12. Reporting must preserve relevant evidence with restricted access.
13. High-severity safety decisions require trained human review.
14. Maintain an incident-response and eligible-data-breach process.
15. Encrypt in transit and at rest; rotate secrets; never commit .env.
16. Independent penetration test before public launch and after material security changes.
17. Maintain abuse-case testing for stalking, coercion, romance scams, sextortion, impersonation and mass messaging.
18. Safety features are not paywalled.

## Important
Identity verification reduces fake accounts but cannot guarantee a user is safe, truthful in every statement, or free of criminal intent. Marketing must not claim "100% safe", "scam free", or "all users are trustworthy".
