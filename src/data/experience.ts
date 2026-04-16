import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "nstp",
    role: "Machine Learning Engineer",
    company: "NSTP-RESOLVE",
    location: "Islamabad, Pakistan",
    startDate: "Apr 2018",
    endDate: "Present",
    type: "fulltime",
    achievements: [
      "Led end-to-end design and development of 15+ enterprise AI/ML solutions, partnering with cross-functional teams to deliver production-grade systems",
      "Built production-ready multi-agent AI systems with tool calling, stateful memory, and autonomous workflow orchestration — improving automation capability across complex enterprise use cases",
      "Designed and developed an end-to-end Data Loss Prevention (DLP) solution for data center environments, protecting sensitive data at rest and enforcing secure, policy-based document printing",
      "Built a Small Language Model (SLM) from scratch, trained on 40M documents and fine-tuned for domain-specific tasks",
      "Developed OmniMind AI — a multimodal assistant supporting RAG-based Q&A, image analysis/generation, and text/voice/image interactions",
      "Built a multi-agent LLM system interacting with SQL and vector databases through tool-integrated workflows",
      "Developed a real-time multilingual meeting analyzer with Urdu/English transcription, speaker diarization, and automated minutes-of-meeting generation",
      "Developed an intelligent medical chatbot using Azure OpenAI and Neo4j, creating knowledge graphs from unstructured medical transcripts",
      "Designed and implemented Graph RAG-powered healthcare chatbots for domain-specific knowledge retrieval",
      "Developed an enterprise chatbot using a fine-tuned Llama model for secure, accurate company-specific information retrieval",
      "Designed a multimodal semantic search engine with Elasticsearch-based ETL pipelines for optimized storage, search, and real-time analytics",
      "Built a computer vision-based image classification system for HR — automated quality assessment of employee-submitted photographs",
      "Developed a real-time ship detection and classification web application with improved performance in low-visibility conditions",
    ],
    tools: [
      "Python", "PyTorch", "TensorFlow", "LangChain", "LangGraph", "Azure OpenAI",
      "Neo4j", "Elasticsearch", "ChromaDB", "FastAPI", "OpenCV", "Hugging Face",
    ],
  },
  {
    id: "freelance",
    role: "Freelance AI/ML Engineer",
    company: "Upwork / Fiverr",
    location: "Remote",
    startDate: "Apr 2022",
    endDate: "Present",
    type: "freelance",
    achievements: [
      "Delivered 38+ custom AI/ML solutions for international clients across NLP, computer vision, multimodal AI, generative AI, and agentic AI domains",
      "Built and deployed RAG-based applications for domain-specific document intelligence, search, Q&A, and automated report generation",
      "Fine-tuned large language models for customer support, summarization, sentiment analysis, and specialized business workflows",
      "Architected agentic AI applications using LangGraph for opinion search, polling, multi-agent coordination, and autonomous workflow execution",
      "Delivered multimodal AI solutions for authentication, content analysis, and classification across text, image, audio, and video data",
      "Built computer vision applications for real-time recognition, medical imaging, and database-integrated intelligent systems",
      "Managed end-to-end freelance AI project execution — solution design, model development, deployment, testing, and client communication",
    ],
    tools: [
      "LangChain", "LangGraph", "Ollama", "Llama", "Gradio", "FastAPI",
      "Flask", "Pinecone", "ChromaDB", "Qdrant", "Streamlit",
    ],
  },
];
