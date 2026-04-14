import { Briefcase, Users, Target, TrendingUp, Calendar, Building, MapPin, Cpu, FlaskConical, DatabaseZap } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: <Cpu className="w-5 h-5 text-focus-indigo" />,
      title: "ML-Powered Telemetry Pipelines",
      description:
        "Built automated ML pipelines to ingest and process high-volume telemetry data from the Genuine Integrity Service, identifying non-genuine user cohorts with high accuracy across millions of machine IPs and license logs.",
      highlight: "Millions of IPs & license logs processed",
      tags: ["PySpark", "ML Classification", "AWS S3", "EC2", "ECR"],
    },
    {
      icon: <Target className="w-5 h-5 text-focus-pink" />,
      title: "Predictive Targeting & Revenue Recovery",
      description:
        "Designed and deployed predictive targeting workflows using classification models to segment non-genuine users, enabling personalized discount campaigns and automated software disablement triggers — directly impacting revenue recovery.",
      highlight: "Direct revenue recovery impact",
      tags: ["Classification Models", "Campaign Automation", "Revenue Growth"],
    },
    {
      icon: <FlaskConical className="w-5 h-5 text-focus-green" />,
      title: "A/B Testing & Conversion Optimization",
      description:
        "Architected and ran A/B testing frameworks to optimize the conversion funnel; introduced a strategic 7-day grace period that significantly increased legitimate license upgrades by converting at-risk users.",
      highlight: "40% increase in legitimate license upgrades",
      tags: ["A/B Testing", "Conversion Optimization", "User Retention"],
    },
    {
      icon: <DatabaseZap className="w-5 h-5 text-focus-cyan" />,
      title: "End-to-End Data Engineering",
      description:
        "Built production-grade data pipelines with PySpark and AWS (S3, EC2, ECR), achieving low-latency synchronization between client-side detection services and backend campaign execution systems.",
      highlight: "Low-latency, cloud-native data pipelines",
      tags: ["PySpark", "AWS", "Data Pipelines", "Backend Integration"],
    },
  ];

  const technicalSkills = [
    "Python", "PySpark", "Machine Learning", "AWS S3", "AWS EC2", "AWS ECR",
    "A/B Testing", "Data Pipelines", "Classification Models", "Telemetry Analytics",
    "AEM", "MILO", "AJO", "Figma", "Jira",
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Work Experience</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Driving measurable business outcomes through AI/ML-powered pipelines, predictive analytics,
            and data-driven campaign strategies at enterprise scale.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Job Header */}
          <div className="glass-card rounded-2xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-focus-indigo to-focus-purple flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Software Engineer — AI/ML & Data</h3>
                <div className="flex flex-wrap gap-4 text-foreground/60 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-focus-indigo/20 border border-focus-indigo/30">
                    <Building className="w-4 h-4 text-focus-indigo" />
                    <span className="font-semibold text-focus-indigo">HCLTech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 2022 - Present</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-focus-rose/20 border border-focus-rose/30">
                    <Users className="w-4 h-4 text-focus-rose" />
                    <span className="font-semibold text-focus-rose">Client: Adobe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card rounded-xl p-4 border-l-4 border-focus-purple">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-focus-purple" />
                  <span className="font-semibold">Scale</span>
                </div>
                <p className="text-sm text-foreground/60">Millions of machine IPs & license logs</p>
              </div>
              <div className="glass-card rounded-xl p-4 border-l-4 border-focus-pink">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-5 h-5 text-focus-pink" />
                  <span className="font-semibold">Revenue Impact</span>
                </div>
                <p className="text-sm text-foreground/60">Automated disablement & discount campaigns</p>
              </div>
              <div className="glass-card rounded-xl p-4 border-l-4 border-focus-cyan">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-focus-cyan" />
                  <span className="font-semibold">Conversion Lift</span>
                </div>
                <p className="text-sm text-foreground/60">40% increase in legitimate license upgrades</p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-focus-teal" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                let shadowColor = "purple";
                if (achievement.title.includes("Targeting")) shadowColor = "pink";
                if (achievement.title.includes("A/B")) shadowColor = "green";
                if (achievement.title.includes("Engineering")) shadowColor = "cyan";
                
                return (
                <div
                  key={achievement.title}
                  className={`glass-card rounded-xl p-6 space-y-4 hover-shadow-${shadowColor}`}
                >
                  <div className="flex items-center gap-3">
                    {achievement.icon}
                    <h4 className="text-lg font-semibold">{achievement.title}</h4>
                  </div>
                  <p className="text-sm text-foreground/65 leading-relaxed">{achievement.description}</p>
                  <div className="px-3 py-2 rounded-lg bg-focus-green/20 border border-focus-green/30 text-sm text-focus-green font-medium">
                    ✦ {achievement.highlight}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-background/50 text-xs text-foreground/70 border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-focus-yellow" />
              <h4 className="text-xl font-semibold">Technologies & Tools</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-focus-yellow/20 border border-focus-yellow/30 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
