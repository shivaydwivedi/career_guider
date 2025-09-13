// ===== CAREER GUIDER JAVASCRIPT =====

// === GLOBAL VARIABLES ===
let currentQuestion = 1;
const totalQuestions = 5;
let quizAnswers = {};

// === CAREER DATA ===
const careerDatabase = {
  "Software Engineering": {
    title: "Software Engineering",
    subtitle: "Build the future with code and innovation",
    description: "Software engineers design, develop, and maintain software applications and systems that power our digital world.",
    match: 95,
    tags: ["Technology", "Problem Solving", "Innovation", "High Salary"],
    overview: "Software engineering is a dynamic field that involves designing, developing, testing, and maintaining software applications and systems. Software engineers work on everything from mobile apps and websites to operating systems and enterprise software. This career offers excellent growth opportunities, competitive salaries, and the flexibility to work in various industries.",
    skills: [
      "Programming Languages", "Problem Solving", "System Design",
      "Database Management", "Version Control", "Testing & Debugging",
      "Algorithms & Data Structures", "Software Architecture"
    ],
    opportunities: [
      "Software Developer at Tech Companies (Google, Microsoft, Amazon)",
      "Full-Stack Web Developer",
      "Mobile App Developer (iOS/Android)",
      "DevOps Engineer",
      "Technical Architect",
      "Product Manager (Technical)",
      "Startup Founder/CTO",
      "Freelance Developer"
    ],
    futureScope: "The software engineering field is experiencing unprecedented growth with emerging technologies like AI, blockchain, IoT, and quantum computing. The demand for skilled developers continues to outpace supply, ensuring excellent job security and competitive salaries. Remote work opportunities are abundant, and the field offers excellent potential for entrepreneurship and innovation. With digital transformation accelerating across all industries, software engineers will remain in high demand for the foreseeable future.",
    educationPath: "Pursue a Bachelor's degree in Computer Science, Software Engineering, or related field. Alternatively, intensive coding bootcamps and online certifications can provide practical skills. Continuous learning through online platforms, contributing to open-source projects, and building a strong portfolio are essential for success."
  },

  "Data Science": {
    title: "Data Science",
    subtitle: "Turn data into actionable insights",
    description: "Data scientists extract meaningful insights from large datasets to help organizations make informed decisions.",
    match: 88,
    tags: ["Analytics", "AI/ML", "Research", "Innovation"],
    overview: "Data science combines statistics, programming, and domain expertise to extract insights from structured and unstructured data. Data scientists work with big data technologies, machine learning algorithms, and statistical models to solve complex business problems and drive strategic decisions.",
    skills: [
      "Python/R Programming", "Statistics & Mathematics", "Machine Learning",
      "Data Visualization", "SQL & Databases", "Big Data Technologies",
      "Business Analytics", "Communication Skills"
    ],
    opportunities: [
      "Data Scientist at Tech Companies",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Research Scientist",
      "Data Analytics Consultant",
      "AI Product Manager",
      "Quantitative Analyst",
      "Data Engineering Lead"
    ],
    futureScope: "Data science is one of the fastest-growing fields with applications across all industries. The explosion of digital data and AI adoption ensures strong job growth. Emerging areas include automated machine learning, ethical AI, and real-time analytics, creating new opportunities for specialization.",
    educationPath: "Bachelor's in Computer Science, Statistics, Mathematics, or related field. Many professionals transition from other fields through specialized data science programs, online courses, and bootcamps. Advanced degrees (Master's/PhD) are valuable for research positions."
  },

  "Medicine": {
    title: "Medicine",
    subtitle: "Heal, care, and save lives",
    description: "Medical professionals diagnose, treat, and prevent diseases to improve human health and wellbeing.",
    match: 92,
    tags: ["Healthcare", "Service", "Prestige", "Job Security"],
    overview: "Medicine is a noble profession focused on diagnosing, treating, and preventing diseases. Medical professionals work in various specializations including general practice, surgery, pediatrics, cardiology, and many others. The field offers job security, social prestige, and the satisfaction of making a direct impact on people's lives.",
    skills: [
      "Medical Knowledge", "Critical Thinking", "Communication",
      "Empathy & Compassion", "Manual Dexterity", "Stress Management",
      "Continuous Learning", "Ethical Decision Making"
    ],
    opportunities: [
      "General Practitioner",
      "Specialist Doctor (Cardiologist, Neurologist, etc.)",
      "Surgeon",
      "Emergency Medicine Physician",
      "Medical Researcher",
      "Hospital Administrator",
      "Medical Consultant",
      "Telemedicine Specialist"
    ],
    futureScope: "Healthcare is an evergreen field with growing demand due to aging populations and emerging health challenges. Digital health, telemedicine, and personalized medicine are creating new opportunities. Medical professionals will always be in demand.",
    educationPath: "Complete MBBS (5.5 years including internship) after clearing NEET entrance exam. Specialize with MD/MS (3 years). Continuous medical education and staying updated with latest treatments and technologies is essential."
  },

  "Commerce & Business": {
    title: "Commerce & Business",
    subtitle: "Drive economic growth and innovation",
    description: "Business professionals manage operations, strategy, and growth across various industries and sectors.",
    match: 85,
    tags: ["Management", "Finance", "Strategy", "Leadership"],
    overview: "Commerce and business fields encompass various roles including management, finance, marketing, and entrepreneurship. Professionals in this field drive economic growth, manage resources, and create value for organizations and society.",
    skills: [
      "Business Strategy", "Financial Management", "Leadership",
      "Communication", "Analytical Thinking", "Project Management",
      "Marketing & Sales", "Negotiation"
    ],
    opportunities: [
      "Business Manager",
      "Financial Analyst",
      "Marketing Manager",
      "Entrepreneur/Startup Founder",
      "Investment Banker",
      "Management Consultant",
      "Business Development Manager",
      "Operations Manager"
    ],
    futureScope: "Business roles are evolving with digital transformation, sustainability focus, and global markets. New opportunities in digital marketing, e-commerce, fintech, and sustainable business practices are emerging.",
    educationPath: "Bachelor's in Commerce, Business Administration, or Economics. MBA for advanced positions. Professional certifications like CA, CFA, or CPA enhance career prospects."
  },

  "Creative Arts & Design": {
    title: "Creative Arts & Design",
    subtitle: "Express creativity and inspire others",
    description: "Creative professionals use artistic skills to design, create, and communicate ideas across various media.",
    match: 78,
    tags: ["Creativity", "Expression", "Visual", "Innovation"],
    overview: "Creative arts and design encompass various fields including graphic design, fine arts, digital media, and creative writing. Professionals in this field combine artistic talent with technical skills to create compelling visual and written content.",
    skills: [
      "Artistic Ability", "Design Software", "Creativity",
      "Visual Communication", "Color Theory", "Typography",
      "Attention to Detail", "Client Management"
    ],
    opportunities: [
      "Graphic Designer",
      "UI/UX Designer",
      "Art Director",
      "Freelance Artist",
      "Creative Writer",
      "Digital Media Specialist",
      "Brand Designer",
      "Creative Director"
    ],
    futureScope: "Digital transformation is creating new opportunities in UX/UI design, digital art, and content creation. The creator economy and NFTs are opening new revenue streams for artists.",
    educationPath: "Bachelor's in Fine Arts, Design, or related field. Strong portfolio is more important than formal education. Continuous skill development in design tools and trends is essential."
  },

  "Computer Engineering": {
    title: "Computer Engineering",
    subtitle: "Design the hardware that powers technology",
    description: "Computer engineers design and develop computer hardware and software systems.",
    match: 82,
    tags: ["Hardware", "Systems", "Innovation", "Technical"],
    overview: "Computer engineering combines electrical engineering and computer science to design and develop computer hardware and software systems. Computer engineers work on processors, memory systems, networks, and embedded systems.",
    skills: [
      "Hardware Design", "Programming", "Circuit Analysis",
      "Embedded Systems", "Network Protocols", "System Architecture",
      "Digital Logic", "Microprocessors"
    ],
    opportunities: [
      "Hardware Engineer",
      "Embedded Systems Developer",
      "Network Engineer",
      "Systems Architect",
      "FPGA Designer",
      "IoT Developer",
      "Computer Systems Analyst",
      "Technical Consultant"
    ],
    futureScope: "Growing demand for IoT devices, edge computing, and 5G technology creates excellent opportunities. Quantum computing and neuromorphic engineering are emerging areas with high potential.",
    educationPath: "Bachelor's in Computer Engineering or related field. Master's degree beneficial for advanced positions. Stay updated with latest hardware technologies and industry trends."
  },

  "Cybersecurity": {
    title: "Cybersecurity",
    subtitle: "Protect the digital world from threats",
    description: "Cybersecurity professionals protect organizations and individuals from cyber threats and digital attacks.",
    match: 78,
    tags: ["Security", "Ethical Hacking", "High Demand", "Critical"],
    overview: "Cybersecurity is a critical field focused on protecting computer systems, networks, and data from digital attacks. With increasing digitization, cybersecurity professionals are in high demand across all industries.",
    skills: [
      "Network Security", "Ethical Hacking", "Risk Assessment",
      "Incident Response", "Cryptography", "Security Tools",
      "Compliance", "Forensics"
    ],
    opportunities: [
      "Cybersecurity Analyst",
      "Ethical Hacker",
      "Security Consultant",
      "Information Security Manager",
      "Penetration Tester",
      "Security Architect",
      "Cybersecurity Engineer",
      "Digital Forensics Specialist"
    ],
    futureScope: "Cybersecurity is one of the fastest-growing fields with excellent job security. Emerging threats from IoT, cloud computing, and AI create continuous demand for skilled professionals.",
    educationPath: "Bachelor's in Cybersecurity, Computer Science, or IT. Professional certifications like CISSP, CEH, or CISM are highly valued. Continuous learning about emerging threats is essential."
  },

  "Product Management": {
    title: "Product Management",
    subtitle: "Bridge technology and business strategy",
    description: "Product managers guide the development and strategy of products from conception to market success.",
    match: 75,
    tags: ["Strategy", "Leadership", "Communication", "Business"],
    overview: "Product management involves guiding the development, launch, and lifecycle of products. Product managers work at the intersection of business, technology, and user experience to create successful products.",
    skills: [
      "Strategic Thinking", "Market Research", "User Experience",
      "Data Analysis", "Communication", "Project Management",
      "Technical Understanding", "Leadership"
    ],
    opportunities: [
      "Product Manager",
      "Senior Product Manager",
      "Product Marketing Manager",
      "Technical Product Manager",
      "Product Owner",
      "VP of Product",
      "Product Strategy Consultant",
      "Growth Product Manager"
    ],
    futureScope: "Product management is growing rapidly with digital transformation and startup ecosystem growth. AI-driven products and data-focused roles are emerging trends.",
    educationPath: "Bachelor's in Engineering, Business, or related field. MBA beneficial but not required. Product management courses and certifications help build relevant skills."
  },

  "AI/ML Engineering": {
    title: "AI/ML Engineering",
    subtitle: "Build intelligent systems for the future",
    description: "AI/ML engineers develop and deploy artificial intelligence and machine learning systems.",
    match: 72,
    tags: ["Artificial Intelligence", "Machine Learning", "Future Tech", "Research"],
    overview: "AI/ML engineering focuses on building, training, and deploying artificial intelligence and machine learning models. This cutting-edge field is at the forefront of technological innovation.",
    skills: [
      "Machine Learning", "Deep Learning", "Python/TensorFlow",
      "Data Engineering", "Statistics", "Neural Networks",
      "MLOps", "Cloud Platforms"
    ],
    opportunities: [
      "ML Engineer",
      "AI Research Scientist",
      "Deep Learning Engineer",
      "Computer Vision Engineer",
      "NLP Engineer",
      "MLOps Engineer",
      "AI Product Manager",
      "Robotics Engineer"
    ],
    futureScope: "AI/ML is the future of technology with applications across all industries. Autonomous vehicles, healthcare AI, and AGI research offer tremendous growth potential.",
    educationPath: "Strong background in Computer Science, Mathematics, or Statistics. Specialized AI/ML courses, online certifications, and research experience are valuable."
  }
};

// === QUIZ LOGIC ===

// Career scoring system
const careerScoring = {
  "Software Engineering": {
    science: 3, commerce: 1, arts: 1, creative: 1,
    problem_solving: 3, helping_others: 1, creating: 2, leading: 2,
    office: 3, hospital: 0, creative_studio: 1, outdoor: 1,
    innovation: 3, service: 1, financial: 2, expression: 1,
    analytical: 3, interpersonal: 1, creative: 1, leadership: 2
  },
  "Data Science": {
    science: 3, commerce: 2, arts: 1, creative: 1,
    problem_solving: 3, helping_others: 1, creating: 1, leading: 2,
    office: 3, hospital: 0, creative_studio: 1, outdoor: 1,
    innovation: 3, service: 2, financial: 2, expression: 1,
    analytical: 3, interpersonal: 2, creative: 1, leadership: 2
  },
  "Medicine": {
    science: 3, commerce: 1, arts: 2, creative: 1,
    problem_solving: 2, helping_others: 3, creating: 1, leading: 2,
    office: 1, hospital: 3, creative_studio: 0, outdoor: 1,
    innovation: 2, service: 3, financial: 1, expression: 1,
    analytical: 2, interpersonal: 3, creative: 1, leadership: 2
  },
  "Commerce & Business": {
    science: 1, commerce: 3, arts: 2, creative: 1,
    problem_solving: 2, helping_others: 2, creating: 1, leading: 3,
    office: 3, hospital: 0, creative_studio: 1, outdoor: 2,
    innovation: 2, service: 2, financial: 3, expression: 1,
    analytical: 2, interpersonal: 3, creative: 1, leadership: 3
  },
  "Creative Arts & Design": {
    science: 1, commerce: 2, arts: 3, creative: 3,
    problem_solving: 2, helping_others: 1, creating: 3, leading: 1,
    office: 2, hospital: 0, creative_studio: 3, outdoor: 2,
    innovation: 2, service: 1, financial: 1, expression: 3,
    analytical: 1, interpersonal: 2, creative: 3, leadership: 1
  },
  "Computer Engineering": {
    science: 3, commerce: 1, arts: 1, creative: 1,
    problem_solving: 3, helping_others: 1, creating: 2, leading: 2,
    office: 3, hospital: 0, creative_studio: 1, outdoor: 1,
    innovation: 3, service: 1, financial: 2, expression: 1,
    analytical: 3, interpersonal: 1, creative: 1, leadership: 2
  },
  "Cybersecurity": {
    science: 3, commerce: 2, arts: 1, creative: 1,
    problem_solving: 3, helping_others: 2, creating: 1, leading: 2,
    office: 3, hospital: 0, creative_studio: 1, outdoor: 1,
    innovation: 2, service: 2, financial: 2, expression: 1,
    analytical: 3, interpersonal: 2, creative: 1, leadership: 2
  },
  "Product Management": {
    science: 2, commerce: 3, arts: 2, creative: 2,
    problem_solving: 2, helping_others: 2, creating: 2, leading: 3,
    office: 3, hospital: 0, creative_studio: 2, outdoor: 1,
    innovation: 3, service: 2, financial: 3, expression: 2,
    analytical: 2, interpersonal: 3, creative: 2, leadership: 3
  },
  "AI/ML Engineering": {
    science: 3, commerce: 1, arts: 1, creative: 1,
    problem_solving: 3, helping_others: 1, creating: 2, leading: 2,
    office: 3, hospital: 1, creative_studio: 1, outdoor: 1,
    innovation: 3, service: 2, financial: 2, expression: 1,
    analytical: 3, interpersonal: 1, creative: 2, leadership: 2
  }
};

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function () {
  // Check if we're on the quiz page
  if (document.getElementById('career-quiz')) {
    initializeQuiz();
  }

  // Check if we're on results page and load results
  if (document.getElementById('career-results')) {
    loadResults();
  }

  // Check if we're on career details page
  if (document.getElementById('career-title')) {
    loadCareerDetails();
  }

  // Add event listeners for option selection
  addOptionListeners();

  // Add mobile menu functionality
  setupMobileMenu();
});

// Initialize quiz functionality
function initializeQuiz() {
  currentQuestion = 1;
  updateProgressBar();
  updateQuestionCounter();
  showQuestion(1);
}

// Show specific question
function showQuestion(questionNum) {
  // Hide all questions
  const questions = document.querySelectorAll('.question');
  questions.forEach(q => {
    q.classList.remove('active');
  });

  // Show current question
  const currentQuestionEl = document.querySelector(`[data-question="${questionNum}"]`);
  if (currentQuestionEl) {
    currentQuestionEl.classList.add('active');
  }

  // Update navigation buttons
  updateNavigationButtons();

  // Update progress
  updateProgressBar();
  updateQuestionCounter();
}

// Add event listeners for option selection
function addOptionListeners() {
  document.addEventListener('change', function (e) {
    if (e.target.type === 'radio') {
      // Store the answer
      quizAnswers[e.target.name] = e.target.value;

      // Update visual feedback
      const options = e.target.closest('.question').querySelectorAll('.option');
      options.forEach(option => {
        option.classList.remove('selected');
      });
      e.target.closest('.option').classList.add('selected');

      // Enable next button if this is the current question
      updateNavigationButtons();
    }
  });
}

// Update navigation buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!prevBtn || !nextBtn) return;

  // Show/hide previous button
  if (currentQuestion > 1) {
    prevBtn.style.display = 'inline-flex';
  } else {
    prevBtn.style.display = 'none';
  }

  // Check if current question is answered
  const currentAnswer = quizAnswers[`q${currentQuestion}`];

  if (currentQuestion === totalQuestions) {
    // Last question - show submit button
    if (currentAnswer) {
      nextBtn.innerHTML = '<i class="fas fa-check"></i> Get Results';
      nextBtn.disabled = false;
    } else {
      nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
      nextBtn.disabled = true;
    }
  } else {
    // Regular next button
    nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    nextBtn.disabled = !currentAnswer;
  }
}

// Move to next question
function nextQuestion() {
  if (currentQuestion < totalQuestions) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    // Submit quiz and show results
    submitQuiz();
  }
}

// Move to previous question
function previousQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

// Update progress bar
function updateProgressBar() {
  const progressBar = document.getElementById('progress');
  if (progressBar) {
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
  }
}

// Update question counter
function updateQuestionCounter() {
  const counter = document.getElementById('question-counter');
  if (counter) {
    counter.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
  }
}

// Submit quiz and calculate results
function submitQuiz() {
  // Validate all questions are answered
  for (let i = 1; i <= totalQuestions; i++) {
    if (!quizAnswers[`q${i}`]) {
      alert(`Please answer question ${i} before submitting.`);
      currentQuestion = i;
      showQuestion(i);
      return;
    }
  }

  // Calculate career scores
  const careerScores = calculateCareerScores();

  // Store results in localStorage for results page
  const results = {
    scores: careerScores,
    answers: quizAnswers,
    timestamp: new Date().toISOString()
  };

  // For demo purposes, we'll use a simple object store
  window.quizResults = results;

  // Navigate to results page
  window.location.href = 'results.html';
}

// Calculate career scores based on answers
function calculateCareerScores() {
  const scores = {};

  // Initialize scores
  Object.keys(careerScoring).forEach(career => {
    scores[career] = 0;
  });

  // Calculate scores for each career
  Object.keys(careerScoring).forEach(career => {
    const scoring = careerScoring[career];

    // Add points based on answers
    Object.keys(quizAnswers).forEach(question => {
      const answer = quizAnswers[question];
      if (scoring[answer]) {
        scores[career] += scoring[answer];
      }
    });
  });

  // Convert to percentage match
  const maxPossibleScore = totalQuestions * 3; // Maximum 3 points per question
  Object.keys(scores).forEach(career => {
    scores[career] = Math.round((scores[career] / maxPossibleScore) * 100);
  });

  return scores;
}

// Load and display results
function loadResults() {
  let results = window.quizResults;

  // If no results found, show sample results
  if (!results) {
    results = {
      scores: {
        "Software Engineering": 95,
        "Data Science": 88,
        "Computer Engineering": 82,
        "Cybersecurity": 78,
        "Product Management": 75,
        "AI/ML Engineering": 72
      }
    };
  }

  displayResults(results.scores);
}

// Display career results
function displayResults(scores) {
  const resultsContainer = document.getElementById('career-results');
  if (!resultsContainer) return;

  // Sort careers by score
  const sortedCareers = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6); // Show top 6 results

  // Clear existing results
  resultsContainer.innerHTML = '';

  // Generate career cards
  sortedCareers.forEach(([careerName, score]) => {
    const career = careerDatabase[careerName];
    if (!career) return;

    const cardHTML = `
            <div class="career-card fade-in-up" onclick="showCareerDetails('${careerName}')">
                <div class="match-percentage">${score}% Match</div>
                <h3>${career.title}</h3>
                <p>${career.description}</p>
                <div class="career-tags">
                    ${career.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="btn btn-primary">
                    Learn More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;

    resultsContainer.innerHTML += cardHTML;
  });

  // Animate cards
  setTimeout(() => {
    const cards = document.querySelectorAll('.career-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      }, index * 150);
    });
  }, 100);
}

// Show career details
function showCareerDetails(careerName) {
  // Store selected career for details page
  window.selectedCareer = careerName;

  // Navigate to career details page
  window.location.href = 'career-details.html';
}

// Load career details page
function loadCareerDetails() {
  let careerName = window.selectedCareer;

  // Default to Software Engineering if no career selected
  if (!careerName || !careerDatabase[careerName]) {
    careerName = 'Software Engineering';
  }

  const career = careerDatabase[careerName];
  if (!career) return;

  // Update page content
  updateCareerDetailsContent(career);
}

// Update career details content
function updateCareerDetailsContent(career) {
  // Update header
  const title = document.getElementById('career-title');
  const subtitle = document.getElementById('career-subtitle');
  const overview = document.getElementById('career-overview');

  if (title) title.textContent = career.title;
  if (subtitle) subtitle.textContent = career.subtitle;
  if (overview) overview.textContent = career.overview;

  // Update skills grid
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid && career.skills) {
    skillsGrid.innerHTML = career.skills.map(skill =>
      `<div class="skill-item">${skill}</div>`
    ).join('');
  }

  // Update opportunities list
  const opportunitiesList = document.getElementById('opportunities-list');
  if (opportunitiesList && career.opportunities) {
    opportunitiesList.innerHTML = career.opportunities.map(opportunity =>
      `<li>${opportunity}</li>`
    ).join('');
  }

  // Update future scope
  const futureScope = document.getElementById('future-scope');
  if (futureScope) futureScope.textContent = career.futureScope;

  // Update education path
  const educationPath = document.getElementById('education-path');
  if (educationPath) {
    // For education path, we'll create a more structured display
    educationPath.innerHTML = `
            <div class="education-content">
                <p>${career.educationPath}</p>
            </div>
        `;
  }
}

// Show results page (back from career details)
function showResults() {
  window.location.href = 'results.html';
}

// Retake quiz
function retakeQuiz() {
  // Clear stored data
  quizAnswers = {};
  window.quizResults = null;
  window.selectedCareer = null;

  // Navigate to quiz page
  window.location.href = 'quiz.html';
}

// Download results functionality
function downloadResults() {
  const results = window.quizResults;
  if (!results) {
    alert('No results to download. Please take the quiz first.');
    return;
  }

  // Create results text
  let resultsText = "CAREER GUIDER - Your Results\n";
  resultsText += "================================\n\n";

  const sortedCareers = Object.entries(results.scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  resultsText += "Top Career Recommendations:\n";
  resultsText += "----------------------------\n";

  sortedCareers.forEach(([careerName, score], index) => {
    resultsText += `${index + 1}. ${careerName}: ${score}% match\n`;
    if (careerDatabase[careerName]) {
      resultsText += `   ${careerDatabase[careerName].description}\n\n`;
    }
  });

  resultsText += `\nGenerated on: ${new Date().toLocaleDateString()}\n`;
  resultsText += "Visit careerguider.com for more information";

  // Create and download file
  const blob = new Blob([resultsText], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'career-guider-results.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Share results functionality
function shareResults() {
  const results = window.quizResults;
  if (!results) {
    alert('No results to share. Please take the quiz first.');
    return;
  }

  const topCareer = Object.entries(results.scores)
    .sort(([, a], [, b]) => b - a)[0];

  const shareText = `I just discovered my perfect career path! My top match is ${topCareer[0]} with ${topCareer[1]}% compatibility. Find your perfect career at Career Guider! 🚀 #CareerGuider #CareerGoals`;

  if (navigator.share) {
    // Use native sharing if available
    navigator.share({
      title: 'My Career Guider Results',
      text: shareText,
      url: window.location.origin
    });
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Results copied to clipboard! Share on your social media.');
    }).catch(() => {
      // Final fallback - show text in alert
      alert(`Share your results:\n\n${shareText}`);
    });
  }
}

// Book consultation functionality
function bookConsultation() {
  alert('Thank you for your interest! Our career counselors will contact you soon. For immediate assistance, call +91 9876543210 or email info@careerguider.com');
}

// Mobile menu functionality
function setupMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      }
    });
  }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
  }
});

// Form validation and enhancement
document.addEventListener('DOMContentLoaded', function () {
  // Add loading state to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      // Add loading state for navigation buttons
      if (this.id === 'next-btn' || this.id === 'prev-btn') {
        return; // Skip loading for navigation buttons
      }

      // Add loading state for other buttons
      if (!this.classList.contains('loading')) {
        const originalText = this.innerHTML;
        this.classList.add('loading');
        this.innerHTML = '<span class="loading"></span> Loading...';

        setTimeout(() => {
          this.classList.remove('loading');
          this.innerHTML = originalText;
        }, 1000);
      }
    });
  });
});

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
  // In a real application, you would send this data to your analytics service
  console.log('Event tracked:', eventName, properties);

  // Example: Google Analytics 4
  // gtag('event', eventName, properties);
}

// Track quiz interactions
document.addEventListener('change', function (e) {
  if (e.target.type === 'radio') {
    trackEvent('quiz_answer_selected', {
      question: e.target.name,
      answer: e.target.value,
      question_number: currentQuestion
    });
  }
});

// Track quiz completion
function trackQuizCompletion(results) {
  const topCareer = Object.entries(results.scores)
    .sort(([, a], [, b]) => b - a)[0];

  trackEvent('quiz_completed', {
    top_career: topCareer[0],
    top_score: topCareer[1],
    completion_time: new Date().toISOString()
  });
}

// Error handling
window.addEventListener('error', function (e) {
  console.error('Application error:', e.error);
  // In production, you might want to report this to an error tracking service
});

// Service Worker registration (for future PWA capabilities)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    // Uncomment when you have a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //     .then(registration => console.log('SW registered'))
    //     .catch(error => console.log('SW registration failed'));
  });
}

// Accessibility enhancements
document.addEventListener('DOMContentLoaded', function () {
  // Add keyboard navigation for quiz options
  const options = document.querySelectorAll('.option');

  options.forEach(option => {
    option.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const radio = this.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          radio.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    });

    // Make options focusable
    option.setAttribute('tabindex', '0');
  });

  // Announce progress to screen readers
  const progressBar = document.getElementById('progress');
  if (progressBar) {
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-valuemin', '0');
    progressBar.setAttribute('aria-valuemax', '100');
  }
});

// Update progress bar accessibility
function updateProgressBar() {
  const progressBar = document.getElementById('progress');
  if (progressBar) {
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', Math.round(progress));
    progressBar.setAttribute('aria-label', `Question ${currentQuestion} of ${totalQuestions}`);
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
  const animateElements = document.querySelectorAll('.feature-card, .career-card, .detail-section');
  animateElements.forEach(el => observer.observe(el));
});

// Performance monitoring
const perfObserver = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
    }
  }
});

try {
  perfObserver.observe({ entryTypes: ['navigation'] });
} catch (e) {
  // PerformanceObserver not supported
}