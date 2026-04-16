import { useEffect } from "react";
import { ArrowLeft, Github, ExternalLink, AlertTriangle, Lightbulb, Cog, Zap, Code2, Play, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Image Imports
import flowchart from "@/assets/aps-workflow/APS Failure Classification High Level Code Flow.png";
import deploymentArch from "@/assets/aps-workflow/Deployment Architecture.png";
import cloudTraining from "@/assets/aps-screenshots/15-Cloud Training.png";
import predictionUI from "@/assets/aps-screenshots/16-predection UI.png";
import predictionOutput from "@/assets/aps-screenshots/19-prediction_output.png";
import streamlitUpload from "@/assets/aps-screenshots/17-streamlit ui upload file.png";
import githubActions from "@/assets/aps-screenshots/05-Running Job.png";
import ecrImage from "@/assets/aps-screenshots/10-ecr image latest.png";
import s3Artifacts from "@/assets/aps-screenshots/11-S3 artifacts and model.png";
import ec2Connect from "@/assets/aps-screenshots/07-EC2 connect.png";

const ProjectAPS = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/iamchandra21/APS-failure-classification" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Repository
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="container mx-auto px-6 mb-16 max-w-5xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            APS Failure Classification
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 font-light">
            Solving a 50:1 asymmetric cost problem with end-to-end Machine Learning pipelines.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="px-4 py-2 bg-focus-orange/10 text-focus-orange rounded-full text-sm font-semibold border border-focus-orange/20">
              Python
            </span>
            <span className="px-4 py-2 bg-focus-cyan/10 text-focus-cyan rounded-full text-sm font-semibold border border-focus-cyan/20">
              XGBoost
            </span>
            <span className="px-4 py-2 bg-focus-lime/10 text-focus-lime rounded-full text-sm font-semibold border border-focus-lime/20">
              AWS & Docker
            </span>
            <span className="px-4 py-2 bg-focus-purple/10 text-focus-purple rounded-full text-sm font-semibold border border-focus-purple/20">
              FastAPI
            </span>
          </div>

          <div className="flex justify-center gap-4 pt-6">
            <Button className="gradient-bg-primary" asChild>
              <a href="https://github.com/iamchandra21/APS-failure-classification" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> View GitHub
              </a>
            </Button>
            <Button variant="outline" className="border-border" asChild>
              <a href="https://nbviewer.org/github/iamchandra21/APS-failure-classification/blob/main/notebooks/Scania_APS_failure_prediction.ipynb" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-4 h-4 mr-2" /> Read EDA Notebook
              </a>
            </Button>
          </div>
        </section>

        {/* Highlight Architecture Image early */}
        <section className="container mx-auto px-6 mb-20 max-w-6xl">
          <div className="glass-card p-2 md:p-4 rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
            <img 
              src={flowchart} 
              alt="APS Classification Pipeline Flowchart" 
              className="w-full rounded-2xl"
            />
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-4xl space-y-20">
          {/* PROBLEM */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-focus-rose/20 text-focus-rose">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">The Business Problem</h2>
            </div>
            <div className="glass-card p-8 rounded-2xl bg-muted/20 border-border/50 space-y-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                I worked on a predictive maintenance problem for Scania heavy-duty trucks. The Air Pressure System (APS) is critical for braking and engine performance, and when it fails, it's expensive. However, the bigger challenge lies in correctly isolating the fault.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                If maintenance teams incorrectly treat a non-APS fault as an APS fault, that costs the business money in unnecessary labor and parts. But if they miss a real APS failure, a truck breaks down on the road, costing <strong>50 times more</strong>. 
              </p>
              <div className="p-4 border-l-4 border-focus-rose bg-focus-rose/5 text-focus-rose font-medium text-lg rounded-r-xl">
                The business constraint wasn't just accuracy — it was a heavily asymmetric cost problem.
              </div>
            </div>
          </section>

          {/* SOLUTION */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-focus-cyan/20 text-focus-cyan">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">The Solution & Pipeline</h2>
            </div>
            <div className="prose prose-invert max-w-none text-foreground/80 text-lg leading-relaxed">
              <p>
                I built a full end-to-end ML pipeline, entirely automated and production-ready. The system acts on a 6-stage lifecycle:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none pl-0">
                {["Data validation & Schema checks", "Drift detection against baseline", "Data transformation (RobustScaler & SMOTETomek)", "Model training (XGBoost)", "Model evaluation vs production model", "Model deployment"].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 glass-card p-4 rounded-xl border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-focus-cyan/20 text-focus-cyan flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                The pipeline is triggered via a dedicated FastAPI microservice interface. Hitting <code>GET /train</code> kicks off the entire retraining lifecycle, while <code>POST /predict</code> handles real-time inference on new sensor matrices.
              </p>
            </div>

            {/* FastAPI Screenshots */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">FastAPI /docs Swagger UI</h4>
                <div className="glass-card overflow-hidden rounded-xl border border-border/50">
                  <img src={cloudTraining} alt="FastAPI Swagger Cloud Training UI" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">Live Prediction Call Response</h4>
                <div className="glass-card overflow-hidden rounded-xl border border-border/50">
                  <img src={predictionUI} alt="FastAPI Prediction Endpoint" className="w-full h-auto object-cover border-b border-border/50" />
                  <img src={predictionOutput} alt="Prediction JSON Response" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
            
            {/* Streamlit Demo */}
            <div className="space-y-3 mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">Streamlit Bulk Prediction UI</h4>
                <div className="glass-card p-2 rounded-xl border border-border/50">
                  <img src={streamlitUpload} alt="Streamlit UI Bulk Prediction" className="w-full h-auto rounded-lg" />
                </div>
            </div>
          </section>

          {/* TECH CHOICES */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-focus-orange/20 text-focus-orange">
                <Cog className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Key Technical Decisions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold mb-3 text-focus-orange">Modeling: XGBoost</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Chosen for its high efficacy on complex tabular sensor data, rapid training performance, and native feature importance extraction spanning all 171 sensor features.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold mb-3 text-focus-cyan">Balancing: SMOTETomek</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  The dataset was 98.3% non-failures. I combined synthetic oversampling (SMOTE) with Tomek link cleaning to generate a highly refined and clean decision boundary.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold mb-3 text-focus-lime">Preprocessing</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Given that raw sensor readings naturally exhibit massive outliers during machine degradation, I employed <strong>RobustScaler</strong> to safely normalize data unaffected by extreme values.
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold mb-3 text-focus-purple">Serialization: Dill</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Both the trained model and preprocessor are wrapped in a unified <code>SensorModel</code> object and serialized via dill so production inference uses identically bounded transformations as training.
                </p>
              </div>
            </div>
          </section>

          {/* CHALLENGES & DEPLOYMENT */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-focus-purple/20 text-focus-purple">
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Deployment & Challenges</h2>
            </div>
            
            <div className="glass-card p-8 rounded-2xl bg-muted/20 border-border/50 mb-8 prose prose-invert max-w-none text-foreground/80">
              <p className="text-lg leading-relaxed">
                The hardest engineering challenge was the automated model evaluation logic. The system does not eagerly overwrite existing production models. Instead, before deployment, it asserts that the new model improves the weighted F1-score by <strong>at least 2%</strong> over the currently live model. 
              </p>
              <p className="text-lg leading-relaxed">
                I strictly guarded model rot: Before any pipeline execution, KS-test (Kolmogorov-Smirnov) based drift detection runs parallel checks across all 171 features to ensure feature distribution hasn't significantly shifted. 
              </p>
            </div>

            <div className="glass-card p-2 md:p-4 rounded-3xl overflow-hidden border border-border/50 shadow-lg mt-8">
              <img 
                src={deploymentArch} 
                alt="Deployment Architecture Diagram" 
                className="w-full rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {/* Cloud Assets */}
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">CI/CD: GitHub Actions</h4>
                    <img src={githubActions} alt="GitHub Actions Pipeline" className="w-full rounded-lg border border-border/50" />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Registry: AWS ECR</h4>
                    <img src={ecrImage} alt="Docker Image on ECR" className="w-full rounded-lg border border-border/50" />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Storage: AWS S3 Artifacts</h4>
                    <img src={s3Artifacts} alt="AWS S3 Saved Models & Artifacts" className="w-full rounded-lg border border-border/50" />
                </div>
                <div className="space-y-2 col-span-1 md:col-span-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">Compute: AWS EC2 Node</h4>
                    <img src={ec2Connect} alt="AWS EC2 Running Instance" className="w-full rounded-lg border border-border/50" />
                </div>
            </div>

          </section>

          {/* CTA Footer */}
          <section className="pt-12 pb-8 border-t border-border flex justify-between items-center">
            <h3 className="text-2xl font-bold text-foreground">Explore the Code</h3>
            <Button size="lg" className="gradient-bg-primary gap-2" asChild>
              <a href="https://github.com/iamchandra21/APS-failure-classification" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" /> View on GitHub
              </a>
            </Button>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ProjectAPS;
