import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Generative AI & LLMs",
    icon: "brain",
    skills: [
      { name: "LLMs (GPT, Gemini, LLaMA, Falcon, DeepSeek)", level: 95 },
      { name: "Prompt Engineering & Guardrails", level: 95 },
      { name: "RAG Pipelines & Knowledge Retrieval", level: 95 },
      { name: "Multi-Agent Orchestration", level: 90 },
      { name: "Fine-Tuning & RLHF", level: 90 },
      { name: "Structured Outputs & Tool Integration", level: 90 },
    ],
  },
  {
    name: "Machine Learning & Deep Learning",
    icon: "cpu",
    skills: [
      { name: "Classification, Regression, Clustering", level: 95 },
      { name: "Deep Learning & Neural Networks", level: 90 },
      { name: "Transfer Learning & Quantization", level: 90 },
      { name: "Computer Vision (OpenCV, YOLO)", level: 88 },
      { name: "NLP & Text Analytics", level: 92 },
      { name: "Time Series & Forecasting", level: 85 },
    ],
  },
  {
    name: "Agentic Frameworks",
    icon: "workflow",
    skills: [
      { name: "LangChain", level: 95 },
      { name: "LangGraph", level: 92 },
      { name: "LlamaIndex", level: 88 },
      { name: "OpenAI Agents SDK", level: 85 },
      { name: "CrewAI / AutoGen", level: 85 },
      { name: "Semantic Kernel / Haystack", level: 82 },
    ],
  },
  {
    name: "Infrastructure & Databases",
    icon: "database",
    skills: [
      { name: "Neo4j (Knowledge Graphs)", level: 90 },
      { name: "Vector DBs (Pinecone, ChromaDB, Qdrant, FAISS, Milvus)", level: 92 },
      { name: "Elasticsearch", level: 88 },
      { name: "PostgreSQL, MongoDB, MySQL", level: 85 },
      { name: "Ollama, vLLM, llama.cpp", level: 90 },
      { name: "FastAPI, Flask, Streamlit, Gradio", level: 92 },
    ],
  },
  {
    name: "Languages & Frameworks",
    icon: "code",
    skills: [
      { name: "Python", level: 98 },
      { name: "PyTorch", level: 92 },
      { name: "TensorFlow", level: 88 },
      { name: "Scikit-Learn", level: 95 },
      { name: "Hugging Face Transformers", level: 92 },
      { name: "Git & Linux", level: 90 },
    ],
  },
];
