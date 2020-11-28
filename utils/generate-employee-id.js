import kebabCase from "lodash.kebabcase";
import { v4 as uuidv4 } from "uuid";

export default function generateEmployeeId(name) {
  const slug = kebabCase(name);
  const uuid = uuidv4();

  return `${slug}-${uuid}`;
}

// TODO: Add test
