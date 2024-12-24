function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
      section.classList.add('hidden');
  });

  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  targetSection.classList.remove('hidden');
}
