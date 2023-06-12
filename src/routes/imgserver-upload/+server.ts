import { CDN_ENDPOINT, IMGSERVER_SECRET, STORAGE_ENDPOINT, STORAGE_NAME, STORAGE_PASSWORD } from "$env/static/private";
import {extension} from "mime-types"
import { error } from "@sveltejs/kit";
import {randomBytes} from "crypto";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {

  const data = await request.formData();
  
  const secret = data.get("secret");

  if (secret != IMGSERVER_SECRET) {
    throw error(403, "Invalid Secret")
  }

  const file = data.get("file");
  if (!isFile(file)) {
    throw error(400, "Not a file");
  }
  const fileExtension = extension(file?.type);
  const name = randomBytes(4).toString('hex');
  await fetch(`${STORAGE_ENDPOINT}/${STORAGE_NAME}/${name}.${fileExtension}`, {
    method: 'PUT',
    headers: {
      'Accept': '*/*',
      'AccessKey': STORAGE_PASSWORD
    },
    body: file,
  });
    
  return new Response(`${CDN_ENDPOINT}/${name}.${fileExtension}`)
}

const isFile = (file: any): file is File => {
  return file instanceof File;
}