// import SDK from "weavedb-node-client";
import WeaveDB from "weavedb-node-client";

export async function getServerSideProps({ query }) {
  // const db = new SDK({
  //   contractTxId: "NK6_OUCdQo3RbXMjBFJXIyZPBa4mgeIr_8bwHPCPtp8",
  //   rpc: "localhost:8080", // your.remote.node:443
  // });
  const db = new WeaveDB({
    contractTxId: "sPyXyPDKw9uKFs43y7HFvsnKUE7bht3DkBNKA5UcV_o",
    rpc: "localhost:8080",
  });
  return {
    props: { question: await db.get("Questions", query.id) },
  };
}

export default function Question({ question }) {}
