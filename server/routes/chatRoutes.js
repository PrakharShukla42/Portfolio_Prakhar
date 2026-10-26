const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { PRAKHAR_PROFILE, SYSTEM_INSTRUCTION } = require('../data/knowledgeBase');

// Smart fallback generator if Gemini API key is not yet set or reaches quota
function generateFallbackResponse(userMessage) {
  const query = (userMessage || '').toLowerCase();

  if (query.includes('intern') || query.includes('ethara') || query.includes('work') || query.includes('experience')) {
    const exp = PRAKHAR_PROFILE.experience[0];
    return `### **Work Experience: ${exp.role} at ${exp.company}** (${exp.duration})\n\n` +
      `Prakhar completed a high-impact internship focusing on Large Language Models and evaluation pipelines:\n\n` +
      exp.highlights.map(h => `• ${h}`).join('\n') +
      `\n\nHe has direct, hands-on experience tuning prompt structures, analyzing model hallucinations/edge cases, and boosting inference reliability.`;
  }

  if (query.includes('education') || query.includes('college') || query.includes('university') || query.includes('gla') || query.includes('cgpa') || query.includes('degree')) {
    const edu = PRAKHAR_PROFILE.education;
    return `### **Education & Academics**\n\n` +
      `• **Degree**: ${edu.degree}\n` +
      `• **Institution**: ${edu.university}\n` +
      `• **Timeline**: ${edu.duration} (Graduation: 2026)\n` +
      `• **Academic Standing**: **CGPA: ${edu.cgpa}**\n\n` +
      `**Key Coursework**:\n` +
      edu.coursework.slice(0, 6).map(c => `• ${c}`).join('\n');
  }

  if (query.includes('project') || query.includes('build') || query.includes('portfolio') || query.includes('app')) {
    return `### **Prakhar's Featured Projects**\n\n` +
      PRAKHAR_PROFILE.projects.map((p, i) => 
        `**${i + 1}. ${p.title}** (${p.category})\n` +
        `• *Tech*: ${p.tech.join(', ')}\n` +
        `• *Overview*: ${p.overview}`
      ).join('\n\n') +
      `\n\nWhich project would you like to dive deeper into?`;
  }

  if (query.includes('aws') || query.includes('cloud') || query.includes('devops') || query.includes('docker') || query.includes('kubernetes')) {
    return `### **Cloud & DevOps Expertise**\n\n` +
      `Prakhar is an AWS & Cloud Specialist with hands-on multi-tier architecture experience:\n\n` +
      `• **AWS Services**: ${PRAKHAR_PROFILE.skills.cloudAndDevOps[0]}\n` +
      `• **Containerization & CI/CD**: Docker, Kubernetes, Terraform, Jenkins, and GitHub Actions\n` +
      `• **Linux & Infrastructure**: Ubuntu/Debian administration, Bash scripting, and Nginx/Apache load balancing\n` +
      `• **Certifications**: AWS Cloud Practitioner Essentials, AWS Getting Started with IoT, and Cisco Networking.`;
  }

  if (query.includes('skill') || query.includes('stack') || query.includes('language') || query.includes('tech')) {
    return `### **Technical Skills Overview**\n\n` +
      `• **Languages**: ${PRAKHAR_PROFILE.skills.programmingLanguages.join(', ')}\n` +
      `• **Backend & APIs**: Node.js, Express.js, FastAPI, REST, Microservices, JWT, RBAC, Redis, Kafka\n` +
      `• **Cloud & DevOps**: AWS (EC2, S3, RDS, Lambda, ECS, VPC), Docker, Kubernetes, Terraform, CI/CD\n` +
      `• **AI & LLMs**: LangChain, OpenAI APIs, Vector DBs, Prompt Engineering, Evaluation Pipelines\n` +
      `• **Databases**: MongoDB, MySQL, PostgreSQL, DynamoDB, Redis\n` +
      `• **Frontend**: React.js, Tailwind CSS, Framer Motion, HTML5, CSS3`;
  }

  if (query.includes('hire') || query.includes('job') || query.includes('role') || query.includes('offer') || query.includes('join') || query.includes('available')) {
    return `### **Why Hire Prakhar?**\n\n` +
      `${PRAKHAR_PROFILE.faq.whyHire}\n\n` +
      `• **Roles open to**: ${PRAKHAR_PROFILE.faq.rolesOpenTo}\n` +
      `• **Location flexibility**: ${PRAKHAR_PROFILE.faq.locationPreference}\n` +
      `• **Contact directly**: [${PRAKHAR_PROFILE.email}](mailto:${PRAKHAR_PROFILE.email}) or **${PRAKHAR_PROFILE.phone}**.\n\n` +
      `You can also download his updated resume directly from the top hero section!`;
  }

  if (query.includes('contact') || query.includes('email') || query.includes('phone') || query.includes('linkedin') || query.includes('github') || query.includes('reach')) {
    return `### **Contact Prakhar Shukla**\n\n` +
      `• **Email**: [${PRAKHAR_PROFILE.email}](mailto:${PRAKHAR_PROFILE.email})\n` +
      `• **Phone / WhatsApp**: ${PRAKHAR_PROFILE.phone}\n` +
      `• **LinkedIn**: [linkedin.com/in/prakhar-shukla-b2362a252](${PRAKHAR_PROFILE.linkedin})\n` +
      `• **GitHub**: [github.com/PrakharShukla42](${PRAKHAR_PROFILE.github})\n` +
      `• **Location**: ${PRAKHAR_PROFILE.location}`;
  }

  if (query.includes('certif') || query.includes('credential') || query.includes('badge')) {
    return `### **Prakhar's Certifications**\n\n` +
      PRAKHAR_PROFILE.certifications.map(c => `• **${c.name}** — *${c.issuer}* (${c.year})`).join('\n') +
      `\n\nAll verified credentials can be explored on his profile and GitHub!`;
  }

  if (query.includes('leader') || query.includes('club') || query.includes('secretary')) {
    const lead = PRAKHAR_PROFILE.leadership[0];
    return `### **Leadership & Extracurriculars**\n\n` +
      `• **Role**: **${lead.role}** of the ${lead.organization} (${lead.duration})\n` +
      `• **Impact**: ${lead.details}`;
  }

  return `Prakhar Shukla is a Solutions-oriented Software Engineer and Cloud Specialist (GLA University B.Tech CSE, CGPA 7.65) with practical experience at Ethara AI (LLM Post Training Intern) and extensive mastery over AWS, Node.js, LangChain, and Docker.\n\nFeel free to ask me specifically about:\n• His **work at Ethara AI**\n• His **AWS cloud architectures & projects**\n• His **skills in Node.js, React, or Python**\n• How to **hire or get in touch with him**!`;
}

// POST /api/chat
router.post('/', async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // If no Gemini API key configured, use our rich contextual knowledge engine fallback
  if (!apiKey) {
    const fallbackAnswer = generateFallbackResponse(message);
    return res.json({
      reply: fallbackAnswer,
      source: 'knowledge-engine'
    });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Choose model - gemini-1.5-flash is fast, capable, and cost-effective
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION
    });

    // Format chat history for Gemini SDK if provided
    let contents = [];
    if (Array.isArray(history) && history.length > 0) {
      contents = history.slice(-6).map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));
    }

    // Append the current user prompt
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const result = await model.generateContent({
      contents
    });

    const response = await result.response;
    const replyText = response.text();

    return res.json({
      reply: replyText,
      source: 'gemini-llm'
    });
  } catch (error) {
    console.error('Error querying Gemini API:', error.message || error);

    // Graceful fallback to knowledge base if API key is invalid, throttled, or network down
    const fallbackAnswer = generateFallbackResponse(message);
    return res.json({
      reply: fallbackAnswer,
      source: 'knowledge-engine-fallback'
    });
  }
});

module.exports = router;
