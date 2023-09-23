import { NextResponse } from "next/server";
const { Logging } = require("@google-cloud/logging");

const PROJECT_ID = "manscaped-us-production";

const logging = new Logging({ projectId: PROJECT_ID });

const filterItems = [
  `logName="projects/manscaped-us-production/logs/stdout"`,

  `timestamp >= "2023-09-01T01:00:00Z"`,

  `timestamp < "2023-09-01T01:20:00Z"`,

  "password did match",
];

const filters = filterItems.join(" AND ");

export async function GET(request) {
  const result = await logging.getEntries({
    filter: filters,
  });

  const entryList = await result[0];

  return NextResponse.json(JSON.stringify(entryList));
}
