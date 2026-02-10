export enum UserRole {
  FreeUser = 'FreeUser',
  PaidUser = 'PaidUser',
  Admin = 'Admin'
}

export function hasRole(user: { role: string } | null, ...roles: UserRole[]): boolean {
  if (!user) return false;
  return roles.includes(user.role as UserRole);
}

export function isAdmin(user: { role: string } | null): boolean {
  return hasRole(user, UserRole.Admin);
}

export function isPaidUser(user: { role: string } | null): boolean {
  return hasRole(user, UserRole.PaidUser);
}

export function isFreeUser(user: { role: string } | null): boolean {
  return hasRole(user, UserRole.FreeUser);
}
