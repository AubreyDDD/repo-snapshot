import fs from "fs";
import path from "path";
import { parse } from "smol-toml";

export function parseTomlConfig<T = unknown>(
  tomlConfigFile = ".repo-snapshot.toml",
): T {
  const tomlConfigPath = path.resolve(tomlConfigFile);

  if (!fs.existsSync(tomlConfigPath)) return {} as T;
  else {
    console.info("Found config file:", tomlConfigPath);

    const doc = fs.readFileSync(tomlConfigPath, "utf-8");

    try {
      return parse(doc) as T;
    } catch {
      throw new Error("Failed to parse config file");
    }
  }
}
