/**
 * Kiro Code skill templates
 *
 * Kiro uses the same SKILL.md format as Codex.
 * We reuse Codex skill templates and write them to .kiro/skills/.
 */

import {
  getAllSkills as getAllCodexSkills,
  type SkillTemplate,
} from "../codex/index.js";

export type { SkillTemplate } from "../codex/index.js";

export function getAllSkills(): SkillTemplate[] {
  return getAllCodexSkills();
}
