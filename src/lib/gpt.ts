import OpenAI from "openai";
import parseJson, { JSONError } from "parse-json";

const openai = new OpenAI();

interface OutputFormat {
    [key: string]: string | string[] | OutputFormat;
}

export async function gpt_output(
    system_prompt: string,
    user_prompt: string,
    output_format?: OutputFormat,
    temperature: number = 1.8,
    num_tries: number = 3
): Promise<any> {
    // if the user input is in a list, we also process the output as a list of json
    const list_input: boolean = Array.isArray(user_prompt);
    // if the output format contains dynamic elements of < or >, then add to the prompt to handle dynamic elements
    const dynamic_elements: boolean = /<.*?>/.test(
        JSON.stringify(output_format)
    );
    // if the output format contains list elements of [ or ], then we add to the prompt to handle lists
    const list_output: boolean = /\[.*?\]/.test(JSON.stringify(output_format));

    // start off with no error message
    let error_msg: string = "";

    for (let i = 0; i < num_tries; i++) {
        try {
            let output_format_prompt: string = `\nYou are to output the following in json format: ${JSON.stringify(
                output_format
            )}. \nDo not put quotation marks or escape character \\ in the output fields.`;

            if (list_output) {
                output_format_prompt += `\nIf output field is a list, classify output into the best element of the list.`;
            }

            // if output_format contains dynamic elements, process it accordingly
            if (dynamic_elements) {
                output_format_prompt += `\nAny text enclosed by < and > indicates you must generate content to replace it. Example input: Go to <location>, Example output: Go to the garden\nAny output key containing < and > indicates you must generate the key name to replace it. Example input: {'<location>': 'description of location'}, Example output: {school: a place for education}`;
            }

            // if input is in a list format, ask it to generate json in a list
            if (list_input) {
                output_format_prompt += `\nGenerate a list of json, one json for each input element.`;
            }

            const response = await openai.chat.completions.create({
                temperature: temperature,
                model: "gpt-3.5-turbo-1106",
                response_format: { type: "json_object" },
                messages: [
                    {
                        role: "system",
                        content:
                            system_prompt +
                            output_format_prompt +
                            (error_msg && "Got this error" + error_msg),
                    },
                    { role: "user", content: user_prompt },
                ],
            });

            let res: string =
                response?.choices[0].message?.content?.replace(/'/g, '"') ?? "";

            // ensure that we don't replace away apostrophes in text
            res = res.replace(/(\w)"(\w)/g, "$1'$2");

            console.log("🚀 ~ file: gpt.ts:66 ~ ̥:", res);

            const output = parseJson(res);
            console.log("🚀 ~ file: gpt.ts:74 ~ ̥:", output);
            return output;
        } catch (error) {
            if (error instanceof JSONError) {
                throw error;
            }

            console.log(error);
            error_msg = error as string;
        }
    }

    return [];
}
