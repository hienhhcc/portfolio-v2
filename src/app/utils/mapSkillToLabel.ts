import { ESkill } from "@/app/constants";

export function mapSkillToLabel(text: ESkill) {
  switch (text) {
    case ESkill.Language:
      return "Languages";
    case ESkill.Frameworks:
      return "Libraries/Frameworks";
    case ESkill.Tools:
      return "Developer tools";
    case ESkill.Soft:
      return "Soft skill";
    default:
      throw new Error(`Invalid skills ${text satisfies never}`);
  }
}
