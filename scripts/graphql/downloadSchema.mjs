import { buildClientSchema, getIntrospectionQuery, printSchema } from "graphql";
import fs from "node:fs";
import path from "node:path";
import fetch from "node-fetch";

// The default introspection query leaves out deprecated arguments and input fields, and
// doesn't say which input objects are `@oneOf`: ask for both so the reference shows them.
const introspectionQuery = getIntrospectionQuery({
  inputValueDeprecation: true,
  oneOf: true,
});

fetch(`https://api.swan.io/live-partner/graphql`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query: introspectionQuery }),
})
  .then((res) => res.json())
  .then((res) =>
    buildClientSchema({ __schema: { ...res.data.__schema, directives: [] } })
  )
  .then((res) => printSchema(res))
  .then((schema) =>
    fs.writeFileSync(
      path.join(process.cwd(), "scripts/graphql/dist/partner-schema.gql"),
      schema,
      "utf-8"
    )
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
