function calculateSum(skill) {
  return skill.skills.reduce((sum, subSkill) => {
    return sum + (subSkill.level || 0);
  }, 0);
}