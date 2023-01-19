import SDK from "weavedb-node-client";

export async function getServerSideProps({ query }) {
  const db = new SDK({
    contractTxId: "sPyXyPDKw9uKFs43y7HFvsnKUE7bht3DkBNKA5UcV_o",
    rpc: "localhost:9090",
  });
  return {
    props: {
      question: (
        await db.get("Questions", ["slug"], ["slug", "=", query.slug])
      )[0],
    },
  };
}

export default function Question({ question }) {
  return (
    <div>
      <div>{question.title}</div>
      <div>{question.question}</div>
    </div>
  );
}
