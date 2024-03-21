"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div className="">Error {error.message}</div>;
}
