import { Service } from "./types";

export const services: Service[] = [
  {
    id: "machine-learning",
    title: "Machine Learning Engineering",
    description:
      "Classical and deep ML — classification, regression, forecasting, recommendation, and computer vision — taken from notebook to production with proper evaluation, MLOps and monitoring.",
    deliverables: [
      "Problem framing + data audit",
      "Trained, evaluated model with benchmarks",
      "Inference API + monitoring",
      "Handover docs + retraining plan",
    ],
    timeline: "2–6 weeks",
    outcomes: [
      "Reliable, measurable ML in production",
      "Clear baselines and improvement runway",
      "Reproducible training pipeline",
    ],
    techStack: ["PyTorch", "scikit-learn", "TensorFlow", "MLflow", "FastAPI"],
    icon: "cpu",
    highlight: true,
  },
  {
    id: "rag-systems",
    title: "RAG & Knowledge Systems",
    description:
      "Enterprise-grade Retrieval-Augmented Generation systems for intelligent document search, Q&A and knowledge management — with citations and source tracking.",
    deliverables: ["RAG pipeline architecture", "Vector DB integration", "Custom embedding models", "Production API"],
    timeline: "2–6 weeks",
    outcomes: ["Accurate domain-specific answers", "Reduced manual search time", "Scalable knowledge retrieval"],
    techStack: ["LangChain", "ChromaDB", "Pinecone", "Qdrant", "FastAPI"],
    icon: "search",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI & Multi-Agent Systems",
    description:
      "Production-ready autonomous agents with tool calling, stateful memory and multi-agent orchestration — fully observable.",
    deliverables: ["Multi-agent architecture", "Tool integration layer", "State management", "Monitoring dashboard"],
    timeline: "4–8 weeks",
    outcomes: ["Automated complex workflows", "Reduced manual intervention", "Scalable agent pipelines"],
    techStack: ["LangGraph", "OpenAI Agents SDK", "CrewAI", "AutoGen", "LangSmith"],
    icon: "bot",
  },
  {
    id: "llm-finetuning",
    title: "LLM Fine-Tuning & Custom Models",
    description:
      "Fine-tune open-source LLMs (or build small language models from scratch) for domain-specific tasks — on your data, your infra.",
    deliverables: ["Fine-tuned model", "Training pipeline", "Evaluation benchmarks", "Deployment package"],
    timeline: "3–8 weeks",
    outcomes: ["Domain-specific accuracy gains", "Reduced inference costs", "Custom model ownership"],
    techStack: ["PyTorch", "Hugging Face", "LoRA/QLoRA", "vLLM", "Ollama"],
    icon: "sparkles",
  },
  {
    id: "multimodal-ai",
    title: "Multimodal AI Solutions",
    description:
      "Systems that process and generate across text, image, audio and video — from chatbots to content analysis platforms.",
    deliverables: ["Multimodal pipeline", "API integration", "UI/UX prototype", "Production deployment"],
    timeline: "4–10 weeks",
    outcomes: ["Cross-modal understanding", "Enhanced user experiences", "Unified AI interface"],
    techStack: ["LLaVA", "Whisper", "Stable Diffusion", "OpenCV"],
    icon: "layers",
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Detection",
    description:
      "Real-time object detection, image classification, medical imaging, ANPR and visual recognition systems.",
    deliverables: ["Trained CV model", "Detection / classification API", "Real-time inference pipeline", "Web app"],
    timeline: "2–6 weeks",
    outcomes: ["Automated visual inspection", "Real-time processing", "High detection accuracy"],
    techStack: ["YOLOv8", "OpenCV", "PyTorch", "TensorFlow", "EfficientNet"],
    icon: "eye",
  },
  {
    id: "enterprise-chatbots",
    title: "Enterprise Chatbots & Assistants",
    description:
      "Conversational AI for customer support, internal knowledge bases, healthcare and domain-specific assistance.",
    deliverables: ["Chatbot architecture", "Knowledge base integration", "Conversation flows", "Analytics dashboard"],
    timeline: "2–6 weeks",
    outcomes: ["24/7 automated support", "Reduced support costs", "Improved response accuracy"],
    techStack: ["LangChain", "LLaMA", "Neo4j", "Elasticsearch", "Gradio"],
    icon: "message-circle",
  },
];

export const engagementModels = [
  { title: "Consulting", description: "Strategy sessions, architecture reviews and roadmap planning for AI initiatives.", icon: "compass" },
  { title: "Build", description: "End-to-end development of AI/ML solutions from prototype to production deployment.", icon: "hammer" },
  { title: "Retainer", description: "Ongoing AI engineering support, model maintenance and iterative improvement.", icon: "repeat" },
];
