"use server";

const OUTPUT_BLOCK_ID = "output"; // TODO: update to the block id of the LLM block
const WORKFLOW_ID = "wf_cm18jvw3z000109s6vsrvzsgc"; // TODO: update to the workflow id

import { streamText } from "ai";
// import { openai } from "@ai-sdk/openai";
import { createStreamableValue, getMutableAIState } from "ai/rsc";
import { ScoutClient, ScoutError } from "scoutos";
import { WorkflowRunEventNames } from "scoutos/api/types";

export async function runWorkflow(input: string) {
  const stream = createStreamableValue("");
  const client = new ScoutClient();

  // const history = getMutableAIState();

  try {
    // console.log("HISTORY!", history.get());
    const scoutStream = await client.workflows.runStream(WORKFLOW_ID, {
      inputs: {
        user_message: input,
      },
      environment: "console", // Most recently published
    });

    (async () => {
      for await (const { name, data } of scoutStream) {
        console.log("name", name);
        const { block_id } = data;

        // console.log("block_id: name", block_id, name);

        if (
          name == WorkflowRunEventNames.BlockStateUpdated &&
          block_id == OUTPUT_BLOCK_ID
        ) {
          if (data?.update_type === "partial") {
            stream.update(data?.update_data?.output);
          }
          if (data?.update_type === "complete") {
            stream.done();
          }
        }
      }

      stream.done();
    })();
  } catch (err) {
    if (err instanceof ScoutError) {
      console.log(err.statusCode);
      console.log(err.message);
      console.log(err.body);
    } else {
      console.error("An unexpected error occurred:", err);
    }
  }

  return { output: stream.value };
}

export async function getWorkflow(workflow_id: string) {
  "use server";

  const response = await fetch(
    `https://api-prod.scoutos.com/v2/workflows/${workflow_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SCOUT_API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    console.log("response", response);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}
