import React from "react";
import { useRouter } from "next/router";

export default function EditEmployeePage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Edit employee: {id}</div>;
}
