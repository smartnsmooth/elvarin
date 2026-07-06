const shopBase = process.env.NEXT_PUBLIC_SHOP_URL || "http://localhost:3001";
const redeemBase = process.env.NEXT_PUBLIC_REDEEM_URL || "http://localhost:3003";

/** @deprecated Use shopPath instead */
export function licenseStorePath(path: string) {
  return shopPath(path);
}

export function shopPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${shopBase}${normalized}`;
}

export function redeemPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${redeemBase}${normalized}`;
}
