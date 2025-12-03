"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
import { useState } from "react";

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => createEmotionCache());
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
