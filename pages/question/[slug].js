import SDK from "weavedb-node-client";

export async function getServerSideProps({ query }) {
  const db = new SDK({
    contractTxId: "NK6_OUCdQo3RbXMjBFJXIyZPBa4mgeIr_8bwHPCPtp8",
    rpc: "localhost:8080", // your.remote.node:443
  });
  return {
    props: { question: await db.get("Questions", query.id) },
  };
}

export default function Question({ question }) {}
