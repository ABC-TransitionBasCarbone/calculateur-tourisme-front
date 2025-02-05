"use client";

import dynamic from "next/dynamic";

const ClientErrorContent = dynamic(
  () => import('@/components/error/ErrorContent'),
  { ssr: false }
);

export default ClientErrorContent;
