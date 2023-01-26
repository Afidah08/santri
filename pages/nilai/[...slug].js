import React from "react";
import Error from "next/error";

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params.slug },
  };
}

const Edit = ({ slug }) => {
  if (slug.length != 2 || slug[1] != "edit") {
    return <Error statusCode={404} />;
  }

  console.log(slug);

  return <></>;
};

export default Edit;
