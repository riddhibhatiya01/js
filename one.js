function evaluateEmployee(employee) {
  const { name, role, experience, projectsCompleted, rating } = employee;

  if (rating < 3) {
    if (role === 'Intern') {
      return "Underperforming Intern";
    } else {
      return "Needs Improvement";
    }
  } else if (rating === 3 || rating === 4) {
    if (role === 'Intern') {
      return "Average Intern";
    } else {
      if (experience < 2) {
        return "Promising Newcomer";
      } else if (experience >= 2 && experience < 5) {
        return "Solid Performer";
      } else {
        return "Experienced Professional";
      }
    }
  } else if (rating === 5) {
    if (role === 'Intern') {
      return "Star Intern";
    } else {
      if (projectsCompleted < 5) {
        return "Potential Star";
      } else if (projectsCompleted >= 5 && projectsCompleted <= 15) {
        return "Star Performer";
      } else {
        return "Top Performer";
      }
    }
  }
}

const employee1 = {
  name: 'selina',
  role: 'Developer',
  experience: 4,
  projectsCompleted: 29,
  rating: 5
};

console.log(evaluateEmployee(employee1)); 

