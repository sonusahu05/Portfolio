import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import CarouselSection from "./components/CarouselSection";
import Footer from "./components/Footer";

// Images
import collegeImg from "../src/assets/barclays.jpeg";
import jpmcImg from "../src/assets/jpmc.jpeg";
import freelance1 from "../src/assets/freelance1.png";
import freelance2 from "../src/assets/freelance2.png";
import freelance3 from "../src/assets/freelance3.png";
import freelance4 from "../src/assets/freelance4.png";
import freelance5 from "../src/assets/freelance5.png";
import nocode from "../src/assets/nocode.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section
        title="Alkermes, Massachusetts, USA"
        points={[
          "As a Machine Learning Intern, I advanced drug discovery by utilizing a BERT-based LLM model to analyze gene expression shifts in Schizophrenia patients.",
          "I tokenized 50,000 single-cell RNA data, representing cells as sequences of gene tokens, and achieved a 0.88 F1 score in classifying cell disease states using a Distributed Data Multi-GPU approach.",
          "I also identified two drug target genes that, when modified, successfully altered diseased cells to a healthy state.",
          "This can save 6 years of research time and around millions of dollars of the company.",
        ]}
        image={collegeImg}
      />
      <Section
        title="Duarte Lab, San Diego, CA, USA"
        points={[
          "At Duarte Lab, I contributed as a Deep Learning Student Researcher by enhancing particle identification through the integration of physics-informed features into a Self-Attention mechanism.",
          "My work involved visualizing attention weights to uncover particle interactions, achieving a 0.92 mean AUC in classifying rare particles.",
          "I also optimized the model, reducing its size by 70% and inference time by 40%.",
          "I will present these findings at NeurIPS 2024.",
        ]}
        image={jpmcImg}
        reverse
      />
      <Section
        title="Shiley Eye Institute, San Diego, CA, USA"
        points={[
          "During my internship at Shiley Eye Institute, I focused on diagnosing Glaucoma types through semantic segmentation and image classification of retinal images.",
          "I achieved a mean IoU of 0.76 in segmenting cups and discs using the DeepLabv3+ model and classified discs with 0.82 precision using MobileNetV2.",
          "My efforts also led to a 60% reduction in model size, making it suitable for deployment on smaller devices in clinical settings.",
        ]}
        image={jpmcImg}
      />
      <Section
        title="Berg Lab, San Diego, CA, USA"
        points={[
          "As the NLP Project Lead at Berg Lab, I developed an autocomplete system by creating a GPT-like model trained on a dataset of 220,000 movie dialogues.",
          "Through tokenization and experimentation with Sparse Attention patterns, I achieved a perplexity score of 32.",
          "My work also resulted in a 22% increase in typing speed by providing adaptive generative word suggestions.",
        ]}
        image={jpmcImg}
        reverse
      />
      <Section
        title="LTIMindtree, Mumbai, Maharashtra, India"
        points={[
          "At LTIMindtree, I served as a Senior Data Engineer, where I established data pipelines using ETL tools, managed databases with SQL, and built machine learning models.",
          "I also created interactive visualizations with dashboard software and led research projects focused on delivering machine learning solutions.",
        ]}
        image={jpmcImg}
      />
      <CarouselSection
        title="Freelancing and Skills"
        text="Highlights of my freelancing work and technical skills:"
        images={[freelance1, freelance2, freelance3, freelance4, freelance5]}
        points={[
          "Helped businesses digitize their operations.",
          "Solved problems regardless of complexity.",
          "Skilled in Web Development, Mobile Development, Cloud, DevOps, and Blockchain.",
        ]}
      />
      <Section
        title="Machine Learning Intern"
        points={[
          "As a Machine Learning Intern, I advanced drug discovery by utilizing a BERT-based LLM model to analyze gene expression shifts in Schizophrenia patients.",
          "I tokenized 50,000 single-cell RNA data, representing cells as sequences of gene tokens, and achieved a 0.88 F1 score in classifying cell disease states using a Distributed Data Multi-GPU approach.",
          "I also identified two drug target genes that, when modified, successfully altered diseased cells to a healthy state.",
          "This can save 6 years of research time and around millions of dollars of the company.",
        ]}
        image={nocode}
      />
      <Footer />
    </div>
  );
};

export default App;