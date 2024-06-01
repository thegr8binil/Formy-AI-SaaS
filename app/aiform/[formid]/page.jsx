"use client";
import FormUi from "@/app/edit-form/_components/FormUi";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LiveAiForm({ params }) {
  const [record, setRecord] = useState();
  const [jsonForm, setJsonForm] = useState([]);

  useEffect(() => {
    params && GetFormData();
  }, [params]);

  const GetFormData = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.id, Number(params?.formid)));

    setRecord(result[0]);
    setJsonForm(JSON.parse(result[0].jsonform));
    console.log(result);
  };
  return (
    <div
      className="flex items-center justify-center w-screen h-screen p-10 bg-fixed bg-opacity-50 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: record?.background,
      }}
    >
      {record && (
        <FormUi
          jsonForm={jsonForm}
          onFieldUpdate={() => console.log}
          deleteField={() => console.log}
          selectedStyle={JSON.parse(record?.style)}
          selectedTheme={record?.theme}
          editable={false}
          formId={record.id}
          enabledSignIn={record?.enabledSignIn}
        />
      )}
      <Link
        className="fixed flex items-center justify-center gap-2 px-3 py-1 border rounded-full shadow-lg cursor-pointer ounded-full bottom-5 left-5"
        href={"/"}
      >
        <Image src={"/logo.png"} width={80} height={80} />
        Build your own AI form
      </Link>
    </div>
  );
}

export default LiveAiForm;
