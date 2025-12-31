import { useState } from "react";
import { motion } from "motion/react";
import {
  Server,
  Box,
  Network,
  Shield,
  Zap,
  ArrowRight,
  Globe,
  Lock,
  Database,
  Cpu,
  HardDrive,
  Radio,
  Upload,
  FileCode,
  Send,
  Filter,
  Trophy,
  CheckCircle,
  XCircle,
  AlertCircle,
  Factory,
  GitBranch,
  Eye,
  RefreshCw,
  Package,
} from "lucide-react";

interface ComponentCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  delay?: number;
}

const ComponentCard = ({
  icon,
  title,
  subtitle,
  description,
  color,
  delay = 0,
}: ComponentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`p-4 rounded-lg border-2 ${color} bg-white shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-start gap-3">
        <div className={`p-2 rounded ${color.replace("border", "bg").replace("500", "100")}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3>{title}</h3>
            <span className="text-gray-500">{subtitle}</span>
          </div>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FlowArrow = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="flex justify-center my-2"
    >
      <ArrowRight className="text-blue-500" size={32} />
    </motion.div>
  );
};

export const KubernetesArchitecture = () => {
  const [activeFlow, setActiveFlow] = useState<"incoming" | "outgoing" | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Kubernetes Architecture 🕸️</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A visual guide to understanding the Kubernetes ecosystem - from the
            physical infrastructure to application deployment and service mesh
            networking.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mb-8"
        >
          <h2 className="mb-4">Mental Map 🗺️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <span>🕸️</span>
              <span>Cluster = Port Facility</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💻</span>
              <span>Node = Docking Pier</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🍬</span>
              <span>Pod = Shipping Container</span>
            </div>
            <div className="flex items-center gap-2">
              <span>☸️</span>
              <span>Kubernetes = Port Authority</span>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {/* Layer 1: Infrastructure */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 flex items-center gap-2"
            >
              <HardDrive className="text-purple-600" />
              🏗️ Infrastructure Layer
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComponentCard
                icon={<Network size={24} className="text-purple-600" />}
                title="Cluster"
                subtitle="🕸️"
                description="The entire Port facility. The collection of all resources working together to run your applications."
                color="border-purple-500"
                delay={0.4}
              />
              <ComponentCard
                icon={<Server size={24} className="text-purple-600" />}
                title="Node"
                subtitle="💻"
                description="A single Docking Pier - usually an EC2 instance. Provides CPU and memory, downloads Images, creates Containers, and places them in Pods."
                color="border-purple-500"
                delay={0.5}
              />
              <ComponentCard
                icon={<Database size={24} className="text-purple-600" />}
                title="NodeGroup"
                subtitle="📁"
                description="A row of identical Piers managed as one unit. Groups multiple Nodes for easier management."
                color="border-purple-500"
                delay={0.6}
              />
              <ComponentCard
                icon={<Zap size={24} className="text-purple-600" />}
                title="Karpenter"
                subtitle="🏎️"
                description="The modern autoscaler. Scales Nodes directly via EC2 API in seconds (not minutes). Uses bin-packing to pick the cheapest, smallest instance that fits your Pods exactly. Installed via Helm."
                color="border-purple-500"
                delay={0.7}
              />
            </div>
          </section>

          <FlowArrow delay={0.8} />

          {/* Helm and Karpenter Deep Dive */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              className="mb-6 flex items-center gap-2"
            >
              <Package className="text-indigo-600" />
              📦 Helm: The App Store for Kubernetes
            </motion.h2>
            <div className="bg-white rounded-lg p-6 shadow-md mb-6">
              <p className="text-gray-700 mb-4">
                Think of <strong>Helm</strong> as the App Store or Homebrew for Kubernetes.
                Instead of manually writing and applying many different YAML files (Deployment, Service, Permissions, etc.), Helm packages everything into a single <strong>Chart</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Package className="text-blue-600" size={20} />
                    Helm (The Tool)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    The command-line program (helm) that manages these apps.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileCode className="text-purple-600" size={20} />
                    Helm Chart
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A collection of YAML files bundled into a template. Install complex systems with one command.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Box className="text-green-600" size={20} />
                    Release
                  </h4>
                  <p className="text-gray-600 text-sm">
                    An actual instance of a chart running in your cluster (e.g., "Production" or "Staging").
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-gray-700">
                  <strong>Example:</strong> <strong>Karpenter</strong> is a package that can be installed from Helm. Instead of manually creating all the YAML files needed for Karpenter (Deployment, Service, RBAC, etc.), you can simply install it using a Helm Chart.
                </p>
              </div>
            </div>
          </section>

          <FlowArrow delay={1.0} />

          {/* Layer 2: Application */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-6 flex items-center gap-2"
            >
              <Box className="text-blue-600" />
              📦 Application Layer
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComponentCard
                icon={<Box size={24} className="text-blue-600" />}
                title="Pod"
                subtitle="🍬"
                description="A shipping container sitting on a pier. The smallest unit in K8s, usually containing one Docker container running your app."
                color="border-blue-500"
                delay={1.0}
              />
              <ComponentCard
                icon={<Cpu size={24} className="text-blue-600" />}
                title="Kubernetes"
                subtitle="☸️"
                description="The Port Authority (the brain). Manages Pods declaratively: 'I want 3 copies running.' It automatically maintains this desired state."
                color="border-blue-500"
                delay={1.1}
              />
              <ComponentCard
                icon={<Radio size={24} className="text-blue-600" />}
                title="Service"
                subtitle="🚦"
                description="Permanent front door with a stable IP/DNS. Since Pods are ephemeral, the Service provides a consistent access point."
                color="border-blue-500"
                delay={1.2}
              />
              <ComponentCard
                icon={<Box size={24} className="text-blue-600" />}
                title="Sidecar Pattern"
                subtitle="🤝"
                description="A helper container in the same Pod. When Istio is injected, the Envoy sidecar hijacks networking to add security and monitoring."
                color="border-blue-500"
                delay={1.3}
              />
            </div>
          </section>

          <FlowArrow delay={1.4} />

          {/* Layer 3: Control Plane */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="mb-6 flex items-center gap-2"
            >
              <Cpu className="text-green-600" />
              🎮 Control Plane (The Brains)
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComponentCard
                icon={<Server size={24} className="text-green-600" />}
                title="Kubelet"
                subtitle="👷"
                description="Site Manager on every Node. Executes instructions from the Control Plane to start, stop, and monitor Pods."
                color="border-green-500"
                delay={1.6}
              />
              <ComponentCard
                icon={<Database size={24} className="text-green-600" />}
                title="Kube-scheduler"
                subtitle="📅"
                description="The matchmaker. Looks at available Nodes and decides which one has enough resources to run a new Pod."
                color="border-green-500"
                delay={1.7}
              />
              <ComponentCard
                icon={<Network size={24} className="text-green-600" />}
                title="Kube-proxy"
                subtitle="🚦"
                description="Traffic cop on each Node. Handles networking rules so traffic can reach the right Pod."
                color="border-green-500"
                delay={1.8}
              />
            </div>
          </section>

          <FlowArrow delay={1.9} />

          {/* Layer 4: Connectivity & Security */}
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0 }}
              className="mb-6 flex items-center gap-2"
            >
              <Shield className="text-orange-600" />
              🌐 Connectivity &amp; Security Layer
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ComponentCard
                icon={<Shield size={24} className="text-orange-600" />}
                title="Istio"
                subtitle="🕸️"
                description="Service Mesh with sidecar proxies. Internal security guards managing encryption, authentication, and monitoring between services."
                color="border-orange-500"
                delay={2.1}
              />
              <ComponentCard
                icon={<Globe size={24} className="text-orange-600" />}
                title="Egress Proxy"
                subtitle="📤"
                description="Gateway for traffic leaving the cluster. Controls and inspects which external websites or APIs your apps can access."
                color="border-orange-500"
                delay={2.2}
              />
            </div>
          </section>

          {/* Traffic Flow Visualization */}
          <section className="mt-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3 }}
              className="mb-6 text-center"
            >
              🔄 Traffic Flow with Istio Sidecar
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Incoming Traffic */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4 }}
                className="bg-white rounded-lg p-6 border-2 border-green-400 shadow-lg"
                onMouseEnter={() => setActiveFlow("incoming")}
                onMouseLeave={() => setActiveFlow(null)}
              >
                <h3 className="mb-4 flex items-center gap-2">
                  <Lock className="text-green-600" />
                  Incoming Traffic 📥
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      1
                    </div>
                    <p className="text-gray-700">
                      Request arrives at the Pod
                    </p>
                  </div>
                  <ArrowRight
                    className={`mx-auto text-green-500 transition-all ${
                      activeFlow === "incoming" ? "animate-pulse" : ""
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      2
                    </div>
                    <p className="text-gray-700">
                      Sidecar Proxy intercepts and validates: "Is this allowed?
                      Is it encrypted?"
                    </p>
                  </div>
                  <ArrowRight
                    className={`mx-auto text-green-500 transition-all ${
                      activeFlow === "incoming" ? "animate-pulse" : ""
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      3
                    </div>
                    <p className="text-gray-700">
                      Proxy passes request to your app on localhost
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Outgoing Traffic */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5 }}
                className="bg-white rounded-lg p-6 border-2 border-blue-400 shadow-lg"
                onMouseEnter={() => setActiveFlow("outgoing")}
                onMouseLeave={() => setActiveFlow(null)}
              >
                <h3 className="mb-4 flex items-center gap-2">
                  <Globe className="text-blue-600" />
                  Outgoing Traffic 📤
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      1
                    </div>
                    <p className="text-gray-700">
                      Your app tries to call api.external.com
                    </p>
                  </div>
                  <ArrowRight
                    className={`mx-auto text-blue-500 transition-all ${
                      activeFlow === "outgoing" ? "animate-pulse" : ""
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      2
                    </div>
                    <p className="text-gray-700">
                      iptables trap catches the request and redirects to Sidecar
                      Proxy
                    </p>
                  </div>
                  <ArrowRight
                    className={`mx-auto text-blue-500 transition-all ${
                      activeFlow === "outgoing" ? "animate-pulse" : ""
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      3
                    </div>
                    <p className="text-gray-700">
                      Proxy checks policy, wraps request, and sends to Egress
                      Gateway if configured
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Declarative Model Explanation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white shadow-xl"
          >
            <h2 className="mb-4 flex items-center gap-2">
              <Cpu className="text-white" size={32} />
              The Declarative Model ⚡
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-2">❌ Old-School IT</h3>
                <p className="text-indigo-100">
                  "Hey server, start this app."
                  <br />
                  Manual intervention required when things fail.
                </p>
              </div>
              <div>
                <h3 className="mb-2">✅ Kubernetes</h3>
                <p className="text-indigo-100">
                  "I want 3 copies running at all times."
                  <br />
                  If a Pod dies, K8s automatically starts a new one to match
                  your desired state.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-indigo-100">
                <strong>How it works:</strong> The Control Plane constantly
                compares Current State vs Desired State. If they don't match,
                Kube-scheduler finds a Node and Kubelet starts a new Pod.
              </p>
            </div>
          </motion.section>

          {/* Complete Architecture Flow */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7 }}
            className="bg-white rounded-lg p-8 shadow-xl border-2 border-gray-200"
          >
            <h2 className="mb-6 text-center">
              🔄 Complete Request Lifecycle
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <strong>Cluster Setup:</strong>
                  <p className="text-gray-600">
                    AWS provisions Nodes (EC2 instances) organized in NodeGroups. Karpenter (installed via Helm) monitors Pod requirements and automatically adds Nodes in seconds when needed, using bin-packing to select the most cost-effective instance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <strong>Application Deployment:</strong>
                  <p className="text-gray-600">
                    You declare "I want 3 app instances." Kube-scheduler selects
                    Nodes. Kubelet downloads the Docker Image, creates
                    Containers, and wraps them in Pods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <strong>Service Creation:</strong>
                  <p className="text-gray-600">
                    A Service is created with a stable IP. Kube-proxy configures
                    networking rules on each Node to route traffic to the right
                    Pods.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <strong>Istio Injection:</strong>
                  <p className="text-gray-600">
                    Envoy sidecar is injected into each Pod. It intercepts all
                    network traffic using iptables for security, encryption, and
                    observability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">
                  5
                </div>
                <div>
                  <strong>Traffic Routing:</strong>
                  <p className="text-gray-600">
                    Incoming requests → Sidecar validates → App processes.
                    Outgoing requests → Sidecar intercepts → Egress Gateway
                    (optional) → External API.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  6
                </div>
                <div>
                  <strong>Self-Healing:</strong>
                  <p className="text-gray-600">
                    If a Pod crashes, Kubernetes detects the mismatch between
                    desired (3) and current (2) state. It immediately schedules a
                    new Pod to maintain the desired count.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Deployment Journey */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-center flex items-center justify-center gap-2">
              <Upload className="text-blue-600" size={32} />
              🚀 Deployment Journey: From Your Laptop to Running Pod
            </h2>

            {/* Part 1: Journey of Your Code */}
            <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-blue-300 mb-8">
              <h3 className="mb-6 flex items-center gap-2">
                <FileCode className="text-blue-600" />
                Part 1: The Journey of Your Code
              </h3>
              <p className="text-gray-600 mb-6">
                Kubernetes doesn't run your "code" directly; it runs your
                Container Image. Here's the typical flow:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.9 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Upload className="text-blue-600" size={20} />
                    <h4>1. Build & Push</h4>
                  </div>
                  <p className="text-gray-600">
                    Build your Docker image and push it to a registry like
                    Amazon ECR.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.0 }}
                  className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FileCode className="text-purple-600" size={20} />
                    <h4>2. The Manifest</h4>
                  </div>
                  <p className="text-gray-600">
                    Write a Deployment YAML: "I want 3 replicas of my-app:v2
                    running."
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.1 }}
                  className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Send className="text-green-600" size={20} />
                    <h4>3. The Hand-off</h4>
                  </div>
                  <p className="text-gray-600">
                    Run <code className="bg-gray-800 text-white px-1 rounded">kubectl apply</code>. 
                    Sends manifest to the Kube-apiserver (cluster's front desk).
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2 }}
                  className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border-2 border-orange-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="text-orange-600" size={20} />
                    <h4>4. Creation</h4>
                  </div>
                  <p className="text-gray-600">
                    Cluster creates "Pending" Pods with no assigned Node. The
                    Scheduler wakes up!
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Part 2: Scheduler Decision Process */}
            <div className="bg-white rounded-lg p-8 shadow-xl border-2 border-green-300">
              <h3 className="mb-6 flex items-center gap-2">
                <Database className="text-green-600" />
                Part 2: How Kube-scheduler Picks the Spot
              </h3>
              <p className="text-gray-600 mb-6">
                The Kube-scheduler watches for "Pending" Pods and uses a
                two-step process to find the perfect home - like a high-stakes
                game of musical chairs with strict rules:
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Filtering */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.3 }}
                  className="p-6 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border-2 border-red-300"
                >
                  <h4 className="mb-4 flex items-center gap-2">
                    <Filter className="text-red-600" size={24} />
                    Step 1: Filtering (Predicates) 🔍
                  </h4>
                  <p className="text-gray-600 mb-4">
                    The scheduler disqualifies Nodes that can't handle the Pod:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 shrink-0 mt-1" size={18} />
                      <div>
                        <strong>Resource Check:</strong>
                        <p className="text-gray-600">
                          Does this Node have enough free CPU and Memory?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 shrink-0 mt-1" size={18} />
                      <div>
                        <strong>Taints & Tolerations:</strong>
                        <p className="text-gray-600">
                          Is this Node "tainted" (reserved for special work)?
                          Does the Pod have the "toleration" to go there?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 shrink-0 mt-1" size={18} />
                      <div>
                        <strong>Node Selector:</strong>
                        <p className="text-gray-600">
                          Did you specifically ask for a Node with a label like
                          disk=ssd?
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Scoring */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.4 }}
                  className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-300"
                >
                  <h4 className="mb-4 flex items-center gap-2">
                    <Trophy className="text-yellow-600" size={24} />
                    Step 2: Scoring (Priorities) 🏆
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Ranks the "Feasible Nodes" to find the best match:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Trophy className="text-yellow-600 shrink-0 mt-1" size={18} />
                      <div>
                        <strong>Image Locality:</strong>
                        <p className="text-gray-600">
                          Prefers Nodes that already have your Docker image
                          downloaded (faster startup!).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Trophy className="text-yellow-600 shrink-0 mt-1" size={18} />
                      <div>
                        <strong>Balanced Resource Use:</strong>
                        <p className="text-gray-600">
                          Prefers Nodes that aren't already overloaded.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Trophy className="text-yellow-600 shrink-0 mt-1" size={18} />
                      <div>
                        <strong>Affinity Rules:</strong>
                        <p className="text-gray-600">
                          Follows rules like "Put these two apps on different
                          Nodes for safety."
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 rounded border border-yellow-300">
                    <p className="text-gray-700">
                      <strong>Winner:</strong> The Node with the highest score
                      wins! Scheduler "binds" the Pod to that Node, and Kubelet
                      takes over.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Interactive Scenario */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="mt-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-8 text-white shadow-xl"
          >
            <h2 className="mb-4 flex items-center gap-2">
              <AlertCircle className="text-white" size={32} />
              💡 Challenge Scenario: No Feasible Nodes!
            </h2>
            <div className="bg-white/10 rounded-lg p-6 mb-4">
              <p className="mb-4">
                <strong>The Problem:</strong> You have a Pod that requires 4GB
                of RAM, but all your current Nodes only have 2GB of RAM free.
              </p>
              <p className="mb-4">
                The Kube-scheduler goes through the Filtering step and realizes
                it has <strong>ZERO "Feasible Nodes"</strong> to pick from.
              </p>
              <div className="flex items-center gap-2">
                <XCircle className="text-red-300" size={24} />
                <p>Pod Status: PENDING (No Node can fit it!)</p>
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-6">
              <h3 className="mb-3 flex items-center gap-2">
                <Zap className="text-yellow-300" size={24} />
                The Hero: Karpenter 🏎️
              </h3>
              <p className="text-white/90 mb-3">
                Remember Karpenter (installed via Helm) from the Infrastructure Layer? This is where it shines!
              </p>
              <div className="space-y-2 text-white/90">
                <p>
                  ✅ <strong>Karpenter</strong> detects the PENDING Pod that can't be scheduled
                </p>
                <p>
                  ✅ It analyzes the Pod's requirements (4GB RAM needed) and uses bin-packing logic
                </p>
                <p>
                  ✅ It quickly provisions a new EC2 Node (in seconds, not minutes!) with sufficient resources from AWS
                </p>
                <p>
                  ✅ Unlike Cluster Autoscaler, it doesn't need a pre-configured NodeGroup - it picks the perfect instance from the entire AWS catalog
                </p>
                <p>
                  ✅ The new Node joins the cluster, and Kube-scheduler immediately binds the Pod to it
                </p>
                <p className="mt-4 p-3 bg-green-500/30 rounded border border-green-300">
                  <strong>Result:</strong> Your Pod goes from PENDING to RUNNING automatically! This is the power of declarative infrastructure + modern autoscaling with Karpenter.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CI/CD Pipeline: Buildkite and ArgoCD */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-center flex items-center justify-center gap-2">
              <RefreshCw className="text-indigo-600" size={32} />
              🔄 CI/CD Pipeline: Buildkite + ArgoCD
            </h2>

            <p className="text-gray-700 text-center max-w-4xl mx-auto mb-8">
              In a modern AWS environment, <strong>Buildkite</strong> and{" "}
              <strong>ArgoCD</strong> are the two halves of your delivery
              pipeline. They split the responsibilities of{" "}
              <strong>"Continuous Integration"</strong> (building) and{" "}
              <strong>"Continuous Delivery"</strong> (deploying) using very
              different philosophies.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Buildkite - CI Engine */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.7 }}
                className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-8 text-white shadow-xl"
              >
                <h3 className="mb-4 flex items-center gap-2">
                  <Factory className="text-white" size={28} />
                  🏗️ Buildkite: The CI Engine (The Factory)
                </h3>
                <p className="text-blue-50 mb-6">
                  Buildkite is responsible for the{" "}
                  <strong>Integration phase</strong>. It's the engine that takes
                  your raw code and transforms it into a deployable asset.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <GitBranch className="text-cyan-200 shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block">Where it sits:</strong>
                        <p className="text-blue-100">
                          Right after you push code to GitHub.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <Package className="text-cyan-200 shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block">What it does:</strong>
                        <p className="text-blue-100">
                          Runs unit tests, security scans, and finally "bakes"
                          your Docker Image.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <Upload className="text-cyan-200 shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block">The Output:</strong>
                        <p className="text-blue-100">
                          Pushes the finished image to Amazon ECR (your
                          registry).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ArgoCD - CD Controller */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.8 }}
                className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-8 text-white shadow-xl"
              >
                <h3 className="mb-4 flex items-center gap-2">
                  <Eye className="text-white" size={28} />
                  ☸️ ArgoCD: The CD Controller (The Guardian)
                </h3>
                <p className="text-orange-50 mb-6">
                  ArgoCD is responsible for the <strong>Deployment phase</strong>
                  . It is a "GitOps" tool, meaning it lives inside your
                  Kubernetes cluster and treats your Git repository as the single
                  source of truth.
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <Server className="text-orange-200 shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block">Where it sits:</strong>
                        <p className="text-orange-100">
                          Inside your EKS Cluster, watching your Git repos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <Eye className="text-orange-200 shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block">What it does:</strong>
                        <p className="text-orange-100">
                          Constantly watches a specific Git repo (the "Manifest
                          Repo"). When it sees a change—like a new image
                          version—it "pulls" those changes and updates your Pods
                          to match.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                    <div className="flex items-start gap-3">
                      <Shield className="text-orange-200 shrink-0 mt-1" size={20} />
                      <div>
                        <strong className="block">Unique Feature:</strong>
                        <p className="text-orange-100">
                          If someone manually changes something in AWS (like
                          deleting a Pod), ArgoCD will notice the "drift" and
                          automatically recreate it to match what's in Git.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* The Handoff Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.9 }}
              className="bg-white rounded-lg p-8 shadow-xl border-2 border-indigo-300"
            >
              <h3 className="mb-6 flex items-center gap-2">
                <ArrowRight className="text-indigo-600" size={28} />
                🔄 The Handoff: Where Buildkite Ends and ArgoCD Begins
              </h3>
              <p className="text-gray-700 mb-6">
                There is a specific moment where Buildkite's job ends and
                ArgoCD's job begins. This is usually called the{" "}
                <strong>Image Update</strong>.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-blue-900">
                      Buildkite Builds the Image
                    </strong>
                    <p className="text-gray-700 mt-1">
                      Buildkite finishes building the image{" "}
                      <code className="bg-blue-100 px-2 py-1 rounded">
                        v2.0
                      </code>{" "}
                      and pushes it to Amazon ECR.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-indigo-500" size={32} />
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-purple-900">
                      Update Manifest Repo
                    </strong>
                    <p className="text-gray-700 mt-1">
                      Buildkite (or a developer) then updates a YAML file in
                      your Manifest Repo to say{" "}
                      <code className="bg-purple-100 px-2 py-1 rounded">
                        image: v2.0
                      </code>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="text-indigo-500" size={32} />
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-orange-900">
                      ArgoCD Detects & Syncs
                    </strong>
                    <p className="text-gray-700 mt-1">
                      ArgoCD sees that Git change and says, "The cluster is on{" "}
                      <code className="bg-orange-100 px-2 py-1 rounded">
                        v1.0
                      </code>
                      , but Git says{" "}
                      <code className="bg-orange-100 px-2 py-1 rounded">
                        v2.0
                      </code>
                      . Let's sync!" It automatically updates the Pods in your
                      cluster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                <p className="text-gray-700">
                  <strong className="text-indigo-900">Key Insight:</strong> This
                  handoff creates a clean separation of concerns. Buildkite never
                  touches your cluster directly, and ArgoCD never builds images.
                  The Git repository becomes the "contract" between them,
                  embodying the GitOps philosophy: <em>"Git is the source of truth."</em>
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};