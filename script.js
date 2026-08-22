/* ==========================================================================
   JOEL SINGH - ROBOTICS & AUTOMATION ENGINEERING PORTFOLIO
   Vanilla JavaScript - Core Functionality & Interactive Engines
   ========================================================================== */

// ==========================================
// 1. CONFIGURATION AREA FOR USER CUSTOMIZATION
// ==========================================
const CONFIG = {
  // REPLACE WITH YOUR ACTUAL LINKS & CONTACT DETAILS
  githubUrl: "https://github.com/joelsingh",         // // REPLACE WITH YOUR GITHUB LINK
  linkedinUrl: "https://linkedin.com/in/joelsingh",   // // REPLACE WITH YOUR LINKEDIN LINK
  email: "joel.singh.robotics@gmail.com",            // // REPLACE WITH YOUR EMAIL
  phone: "+91 98765 43210",                            // // REPLACE WITH YOUR PHONE
  resumePdf: "assets/Joel_Singh_Resume.pdf",           // // REPLACE WITH YOUR RESUME FILE
  location: "Punjab, India"
};

// ==========================================
// 2. DETAILED PROJECT CASE STUDIES DATA ENGINE
// ==========================================
const PROJECT_CASE_STUDIES = {
  1: {
    title: "Autonomous Warehouse Mobile Robot",
    category: "robotics",
    subtitle: "ROS2, Gazebo, Nav2, SLAM Toolbox & RViz2",
    overview: "Developed a comprehensive autonomous mobile robot (AMR) simulation tailored for modern smart warehouse environments. The system uses ROS2 Humble to integrate real-time mapping, localization, adaptive path planning, and autonomous obstacle avoidance.",
    problemStatement: "Manual material handling in warehouses is prone to human error, inefficiency, and safety hazards. Standard static guided vehicles lack flexibility when encountering dynamic obstacles or changing floor layouts.",
    objective: "To design a fully autonomous differential-drive mobile robot capable of building 2D occupancy grid maps of unknown warehouse environments using SLAM and navigating reliably using ROS2 Nav2 stack.",
    technologies: ["ROS2 Humble", "Python", "Gazebo Simulator", "Nav2 (Navigation2)", "SLAM Toolbox", "RViz2", "TF2 Transform Library", "LiDAR Raycasting"],
    architectureDesc: "The software architecture relies on ROS2 nodes communicating over standard topics, services, and action servers. The SLAM node processes 2D LiDAR scan data and robot odometry (`/odom`) to produce the map-to-odom tf tree transform.",
    hardware: [
      "2D Solid-State LiDAR (Simulated Hokuyo/RPLiDAR - 360° coverage, 10Hz)",
      "Differential Drive Wheel Encoders (High resolution wheel odometry)",
      "9-DOF IMU (Inertial Measurement Unit for sensor fusion)",
      "Onboard Compute: NVIDIA Jetson Orin Nano / Raspberry Pi 4 (Simulated architecture)"
    ],
    software: [
      "ROS2 Humble Hawksbill on Ubuntu 22.04 LTS",
      "Nav2 Costmap2D (Global & Local Costmaps with obstacle, inflation layers)",
      "Nav2 Regulated Pure Pursuit Controller & DWB Local Planner",
      "Gazebo Ignition Simulator with custom warehouse environment world"
    ],
    methodology: [
      "1. Created URDF / Xacro robot model with proper inertial matrices, joint transforms, and Gazebo plugin tags.",
      "2. Teleoperated the AMR using ROS2 teleop_twist_keyboard while executing SLAM Toolbox to generate an occupancy grid map.",
      "3. Configured Nav2 stack including AMCL (Adaptive Monte Carlo Localization) and behavior trees for recovery behaviors.",
      "4. Validated autonomous goal dispatch via RViz2 2D Goal Pose and custom Python ROS2 Action Clients."
    ],
    contribution: "Engineered the entire ROS2 workspace from scratch, authored custom URDF/Xacro models, fine-tuned inflation radii and costmap parameters, and integrated Nav2 navigation behavior trees for reliable warehouse navigation.",
    results: [
      { label: "Map Resolution", value: "0.05 m/px" },
      { label: "Nav Accuracy", value: "±2.5 cm" },
      { label: "Obstacle Avoidance", value: "< 120 ms" },
      { label: "Goal Success", value: "98.5%" }
    ],
    challenges: "Costmap oscillation and sensor noise during high-speed turns caused dynamic obstacle collision false-positives.",
    solutions: "Tuned DWB local planner path distance weights, added IMU-Odometry Extended Kalman Filter (EKF) via `robot_localization`, and adjusted costmap inflation layers.",
    futureImprovements: "Integration of 3D LiDAR SLAM (Cartographer/FAST-LIO), multi-robot fleet management using ROS2 Zenoh/DDS, and AprilTag visual docking for automated charging.",
    githubLink: "https://github.com/joelsingh/ros2-warehouse-amr" // REPLACE WITH YOUR GITHUB LINK
  },
  2: {
    title: "MRI Brain Tumor Detection Using Deep Learning",
    category: "aiml",
    subtitle: "Python, TensorFlow, Keras, OpenCV & Transfer Learning",
    overview: "Developed a deep learning medical imaging classifier designed to identify four distinct categories of MRI brain tumors: Glioma, Meningioma, Pituitary Tumor, and No Tumor. This academic research project evaluates state-of-the-art CNN architectures.",
    problemStatement: "Manual interpretation of MRI scans by radiologists is time-consuming and subjective. Automated computer-aided decision support systems can assist in preliminary triage and classification.",
    objective: "To train and benchmark multiple Convolutional Neural Network (CNN) architectures (Xception, InceptionResNetV2, VGG16, VGG19) on a dataset of 6,368 MRI images to achieve high diagnostic accuracy.",
    technologies: ["Python", "TensorFlow 2.x", "Keras API", "OpenCV", "Scikit-Learn", "NumPy & Pandas", "Matplotlib / Seaborn"],
    architectureDesc: "Preprocessing pipeline standardizes 6,368 MRI scans (224x224 RGB). Applied dataset split of 70% Training, 20% Validation, and 10% Testing. Data augmentation included rotation (±15°), horizontal flipping, zoom (0.15), brightness adjustments, and Gaussian blur filter.",
    hardware: [
      "GPU Acceleration: NVIDIA CUDA with TensorRT",
      "Compute Target: High-performance workstation GPU",
      "Memory: 16GB VRAM for batch training"
    ],
    software: [
      "Python 3.10 runtime environment",
      "TensorFlow 2.12 / Keras Deep Learning Framework",
      "OpenCV image processing primitives",
      "Confusion Matrix & ROC-AUC metric calculation scripts"
    ],
    methodology: [
      "1. Cleaned and preprocessed 6,368 raw DICOM/PNG MRI images into normalized tensor arrays.",
      "2. Implemented Transfer Learning with ImageNet pretrained weights across Xception, InceptionResNetV2, VGG16, VGG19.",
      "3. Applied Adam optimizer with dynamic learning rate reduction on plateau (`ReduceLROnPlateau`) and EarlyStopping.",
      "4. Evaluated performance metrics on an isolated 10% test set (637 unseen MRI scans)."
    ],
    contribution: "Designed the deep learning pipeline, implemented image augmentation strategies, benchmarked four deep learning network architectures, generated class activation mapping (Grad-CAM), and compiled detailed classification reports.",
    results: [
      { label: "Train Accuracy", value: "99.88%" },
      { label: "Val Accuracy", value: "99.08%" },
      { label: "Test Accuracy", value: "98.17%" },
      { label: "Precision/F1", value: "98.25%" }
    ],
    challenges: "Class imbalance and overfitting on complex medical feature structures.",
    solutions: "Used heavy data augmentation, Dropout layers (p=0.4), L2 regularization, and transfer learning fine-tuning.",
    futureImprovements: "3D volumetric MRI segmentation using U-Net architecture, model deployment via ONNX runtime on edge AI hardware, and Grad-CAM visual heatmaps for clinical interpretable AI.",
    githubLink: "https://github.com/joelsingh/mri-brain-tumor-dl" // REPLACE WITH YOUR GITHUB LINK
  },
  3: {
    title: "Smart Irrigation & Water Management System",
    category: "embedded",
    subtitle: "ESP32, Arduino, Soil & Water Level Sensors, Embedded C/C++",
    overview: "Built an intelligent closed-loop automated irrigation and overhead tank water management system. Combining soil moisture sensing with dual-level tank monitoring, the system automates agricultural motor control to prevent crop under-watering and water wastage.",
    problemStatement: "Traditional agricultural irrigation relies on manual scheduling, leading to over-watering, soil degradation, high energy consumption, and frequent borewell pump dry-runs.",
    objective: "To create an autonomous microcontroller-based system that monitors soil moisture and overhead tank levels, triggering irrigation and borewell pumps based on threshold logic.",
    technologies: ["ESP32 Microcontroller", "Embedded C/C++", "Capacitive Moisture Sensor", "Ultrasonic Water Level Sensor", "Relay Module", "OLED Display", "FreeRTOS Tasks"],
    architectureDesc: "System decision engine continuously samples capacitive soil sensors and ultrasonic tank level sensors. The tank control algorithm executes strict hysteresis rules: if water level < 30%, borewell motor ON; when level reaches 80-85%, borewell motor OFF.",
    hardware: [
      "ESP32 Microcontroller (Dual-core 240MHz, Wi-Fi/BLE)",
      "Capacitive Soil Moisture Sensors v1.2 (Corrosion resistant)",
      "HC-SR04 Ultrasonic Distance Sensor for tank water level",
      "Optocoupler Isolated 4-Channel 5V Relay Module for AC motors",
      "Float switches for emergency hardware interlocks",
      "12V DC Water Pump & 0.96 inch I2C OLED Display"
    ],
    software: [
      "Arduino IDE / VS Code PlatformIO",
      "Embedded C++ state machine architecture",
      "Non-blocking millis() timer polling and task scheduling",
      "Blynk / ThingSpeak IoT telemetry dashboard integration"
    ],
    methodology: [
      "1. Calibrated capacitive soil moisture sensors for dry air (100%) vs submerged water (0%) baseline readings.",
      "2. Programmed ESP32 ultrasonic range equation (`distance = (time * 0.0343)/2`) to calculate precise tank water volume percentage.",
      "3. Implemented logic: Water Level < 30% -> Trigger Relay ON; Water Level >= 85% -> Trigger Relay OFF.",
      "4. Added safety interlock: If soil moisture < threshold BUT tank level < 20%, disable irrigation to prevent pump cavitation."
    ],
    contribution: "Designed circuit schematics, built hardware breadboard and PCB layout, authored C++ microcontroller firmware with non-blocking logic, and integrated safety interlocks.",
    results: [
      { label: "Water Savings", value: "~35%" },
      { label: "Motor Response", value: "< 500 ms" },
      { label: "Uptime Stability", value: "99.9%" },
      { label: "Sensor Accuracy", value: "±1 cm" }
    ],
    challenges: "Sensor calibration drift due to soil salinity changes and relay electrical noise causing MCU resets.",
    solutions: "Replaced resistive sensors with capacitive corrosion-proof probes and added flyback diodes and optocoupler isolation.",
    futureImprovements: "LoRaWAN long-range wireless sensor nodes, weather forecast API integration for predictive rain inhibition, and solar panel power integration.",
    githubLink: "https://github.com/joelsingh/smart-irrigation-esp32" // REPLACE WITH YOUR GITHUB LINK
  },
  4: {
    title: "Smart Waste Segregation Dustbin",
    category: "automation",
    subtitle: "ESP32, Inductive & Capacitive Probes, Servo Motors, IoT",
    overview: "Designed an automated waste segregation system capable of identifying and sorting solid waste into four primary categories: Plastic, Metal, E-Waste, and General Waste.",
    problemStatement: "Improper municipal waste disposal exacerbates environmental pollution and increases manual recycling costs due to mixed waste contamination.",
    objective: "To engineer an intelligent dustbin mechanism using sensor fusion to classify waste items on a turntable mechanism and route them to designated bin compartments.",
    technologies: ["ESP32 MCU", "Inductive Proximity Sensor", "Capacitive Sensor", "IR Obstacle Sensor", "Servo Motors (MG996R)", "Embedded C++"],
    architectureDesc: "When waste is deposited, an IR sensor triggers the sorting sequence. The item moves onto a detection plate equipped with an inductive sensor (detects metal) and capacitive sensor (detects moisture/organic/plastic differences). Servos rotate the chute accordingly.",
    hardware: [
      "ESP32 Development Board",
      "LJ12A3-4-Z/BX Inductive Proximity Sensor (Metal detection)",
      "LKN-18 Capacitive Proximity Sensor",
      "MG996R High-Torque Metal Gear Servo Motors",
      "Ultrasonic Bin Fill-Level Sensors (4x)",
      "Custom 3D Printed Mechanical Turntable & Chute"
    ],
    software: [
      "Embedded C++ state machine",
      "Blynk IoT Cloud app for bin fill-level alerts",
      "PWM servo control algorithms"
    ],
    methodology: [
      "1. Assembled 4-compartment mechanical chassis with servo-driven dynamic chute.",
      "2. Programmed sequential sensor evaluation algorithm: Check Metal -> Check Density/Moisture -> Sort.",
      "3. Configured IoT notifications when any compartment exceeds 90% bin capacity."
    ],
    contribution: "Built mechanical chute assembly, integrated inductive/capacitive sensor interfaces, and developed the ESP32 control logic.",
    results: [
      { label: "Sorting Speed", value: "2.5 sec/item" },
      { label: "Metal Accuracy", value: "99%" },
      { label: "Overall Accuracy", value: "92%" },
      { label: "Bin Monitoring", value: "Real-time" }
    ],
    challenges: "Thin metallic foils or laminated plastic items occasionally misclassified.",
    solutions: "Fine-tuned sensor sensitivity thresholds and introduced multi-stage sensor sampling delays.",
    futureImprovements: "Edge-AI visual sorting using ESP32-CAM with lightweight MobileNet model for high-resolution visual waste classification.",
    githubLink: "https://github.com/joelsingh/smart-waste-dustbin" // REPLACE WITH YOUR GITHUB LINK
  },
  5: {
    title: "Smart Library Seat Allocation & Energy System",
    category: "embedded",
    subtitle: "ESP32/Arduino, PIR Motion, IR Beam Sensors, IoT Energy Management",
    overview: "Developed a smart library monitoring system that tracks real-time seat occupancy and automates lighting/HVAC equipment to minimize building energy waste.",
    problemStatement: "University libraries frequently face energy wastage when lighting and air conditioning remain ON in unoccupied study zones or when students hold seats without presence.",
    objective: "To detect individual desk seat occupancy and control localized lighting/projector/AC power relays based on real-time presence.",
    technologies: ["ESP32", "PIR Motion Sensors", "Infrared Beam Sensors", "Solid State Relays", "MQTT Protocol", "Web Dashboard"],
    architectureDesc: "Each study booth contains dual IR/PIR presence detection. The ESP32 aggregates occupancy state over MQTT to a centralized dashboard. If no motion is detected for 10 minutes, local desk lamp and socket relays cut off automatically.",
    hardware: [
      "ESP32 Wi-Fi Node",
      "HC-SR501 PIR Motion Sensors",
      "Infrared Beam Break Pair Sensors",
      "SSR-40DA Solid State Relays for HVAC/Lighting interlocks",
      "16x2 I2C LCD Status Display"
    ],
    software: [
      "Embedded C++ firmware",
      "MQTT PubSubClient library",
      "Node-RED / HTML Web Telemetry Dashboard"
    ],
    methodology: [
      "1. Placed dual PIR + IR sensor pairs at desk seating areas to eliminate motion false-negatives when students sit still.",
      "2. Programmed presence debouncing logic and timeout timers.",
      "3. Interlocked desk power outlets and zone lighting with solid-state relay triggers."
    ],
    contribution: "Implemented sensor fusion logic for sitting presence detection and created the real-time MQTT seat availability dashboard.",
    results: [
      { label: "Energy Cut", value: "~28%" },
      { label: "Occupancy Accuracy", value: "96.4%" },
      { label: "Latency", value: "< 200 ms" },
      { label: "Timeout Logic", value: "Dynamic" }
    ],
    challenges: "Static student seated posture causing PIR motion sensors to report false unoccupied status.",
    solutions: "Combined PIR motion with IR beam break sensors under the desk desk-leg area to ensure continuous presence detection.",
    futureImprovements: "Mobile app QR-code seat reservation integration and thermal camera occupant counting.",
    githubLink: "https://github.com/joelsingh/smart-library-energy-system" // REPLACE WITH YOUR GITHUB LINK
  },
  6: {
    title: "Robotic Pick-and-Place Simulation",
    category: "simulation",
    subtitle: "RoboDK, FANUC S-430iL Industrial Robot, OnRobot VGP20 Gripper",
    overview: "Engineered a high-fidelity industrial robotic pick-and-place simulation using RoboDK. Configured a 6-axis FANUC S-430iL articulated industrial arm paired with an OnRobot VGP20 vacuum gripper for automated conveyor material handling.",
    problemStatement: "Designing industrial robot cells directly on physical plant floors risks costly robot collisions, cycle time bottlenecks, and cell downtime during commissioning.",
    objective: "To model, program, optimize, and simulate an industrial 6-DOF robot cell trajectory for workpiece pick-and-place operations.",
    technologies: ["RoboDK Simulation Software", "FANUC S-430iL (6-DOF Robot Arm)", "OnRobot VGP20 Vacuum Gripper", "Python RoboDK API", "Offline Programming (OLP)"],
    architectureDesc: "The engineering workflow follows: Object Detection on Conveyor -> Robot Approach Motion (Joint Move) -> Precise Linear Approach (Linear Move) -> Gripper Actuation (Vacuum ON) -> Retract & Transfer Trajectory -> Destination Placement -> Return to Home Position.",
    hardware: [
      "FANUC S-430iL 6-Axis Industrial Robot Arm (Payload 125kg, Reach 2.6m)",
      "OnRobot VGP20 Electric Vacuum Gripper",
      "Optical Conveyor Part Sensor & Dual Conveyor Belt Rig"
    ],
    software: [
      "RoboDK Offline Programming & Kinematics Engine",
      "Python Scripting for RoboDK API automation",
      "FANUC KAREL / TP (Teach Pendant) Code Exporter"
    ],
    methodology: [
      "1. Imported 3D CAD geometry (STEP files) of FANUC robot, vacuum gripper, conveyors, and parts into RoboDK environment.",
      "2. Defined Tool Center Point (TCP) offset for the OnRobot VGP20 vacuum suction pad.",
      "3. Placed Reference Frames for Conveyor Entry and Palletizing Drop Station.",
      "4. Authored collision-free joint trajectories (MoveJ) and precise linear pick motions (MoveL).",
      "5. Generated native FANUC TP program code for physical deployment readiness."
    ],
    contribution: "Formulated the 3D cell layout, defined TCP and reference frames, programmed kinematics trajectory scripts, optimized cycle time, and generated industrial TP code.",
    results: [
      { label: "Cycle Time", value: "4.2 sec/part" },
      { label: "Joint Clearance", value: "> 100 mm" },
      { label: "Singularity Risk", value: "0%" },
      { label: "Repeatability", value: "±0.1 mm" }
    ],
    challenges: "Wrist singularity (Gimbal Lock) when orienting the gripper vertically over the pallet drop frame.",
    solutions: "Adjusted robot base placement relative to conveyor height and modified arm approach vector angle by 12 degrees.",
    futureImprovements: "Integration with OpenCV camera visual servoing for random orientation part picking and RoboDK Python digital twin physical PLC synchronization.",
    githubLink: "https://github.com/joelsingh/robodk-fanuc-pick-and-place" // REPLACE WITH YOUR GITHUB LINK
  }
};

// ==========================================
// 3. INITIALIZATION ON DOM CONTENT LOADED
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypingEffect();
  initHeroCanvas();
  initStatsCounters();
  initProjectFilters();
  initCertFilters();
  initModals();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
});

// ==========================================
// 4. NAVBAR & MOBILE MENU ENGINE
// ==========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Highlight
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Hamburger Toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close Menu on Nav Link Click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ==========================================
// 5. HERO TYPING EFFECT ENGINE
// ==========================================
function initTypingEffect() {
  const targetElement = document.getElementById('heroTypingText');
  if (!targetElement) return;

  const phrases = [
    "B.Tech Robotics & Automation Engineer",
    "ROS2 & Autonomous AMRs Specialist",
    "Embedded Systems & Control Developer",
    "Industrial Automation & PLC Enthusiast"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      targetElement.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      targetElement.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ==========================================
// 6. HERO INTERACTIVE ROBOTICS CANVAS ENGINE
// ==========================================
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resizeCanvas() {
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Robotics Nodes & Particles Grid
  const nodes = [];
  const nodeCount = 35;

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1.5
    });
  }

  // Robot Kinematics 2-Link Arm variables
  let angle1 = 0;
  let angle2 = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Background Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Draw Network Nodes & LiDAR Scanner rays
    for (let i = 0; i < nodes.length; i++) {
      let n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;

      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;

      ctx.fillStyle = '#06B6D4';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();

      // Connect nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        let n2 = nodes[j];
        let dist = Math.hypot(n.x - n2.x, n.y - n2.y);
        if (dist < 110) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.25 * (1 - dist / 110)})`;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }
    }

    // 3. Draw Simulated 2-DOF Robotic Kinematic Arm Overlay
    const originX = width * 0.75;
    const originY = height * 0.7;
    const link1Len = 90;
    const link2Len = 70;

    angle1 += 0.015;
    angle2 += 0.025;

    const jointX = originX + link1Len * Math.cos(angle1);
    const jointY = originY + link1Len * Math.sin(angle1);

    const eeX = jointX + link2Len * Math.cos(angle1 + angle2);
    const eeY = jointY + link2Len * Math.sin(angle1 + angle2);

    // Robot Base
    ctx.fillStyle = '#1F2937';
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(originX, originY, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Link 1
    ctx.strokeStyle = '#2563EB';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(jointX, jointY);
    ctx.stroke();

    // Joint 1
    ctx.fillStyle = '#06B6D4';
    ctx.beginPath();
    ctx.arc(jointX, jointY, 8, 0, Math.PI * 2);
    ctx.fill();

    // Link 2
    ctx.strokeStyle = '#06B6D4';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(jointX, jointY);
    ctx.lineTo(eeX, eeY);
    ctx.stroke();

    // End-Effector / Tool Point
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(eeX, eeY, 6, 0, Math.PI * 2);
    ctx.fill();

    // LiDAR Sweep Arc from End Effector
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(eeX, eeY, 45, angle1, angle1 + 1.2);
    ctx.stroke();

    requestAnimationFrame(draw);
  }

  draw();
}

// ==========================================
// 7. STATS NUMERICAL COUNTER ANIMATION ENGINE
// ==========================================
function initStatsCounters() {
  const stats = document.querySelectorAll('.stat-num');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        stats.forEach(stat => {
          const target = parseFloat(stat.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 1500;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            stat.textContent = isDecimal ? current.toFixed(2) : Math.floor(current) + "+";
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) observer.observe(statsSection);
}

// ==========================================
// 8. PROJECT FILTERING ENGINE
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('#projectFilters .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 250);
        }
      });
    });
  });
}

// ==========================================
// 9. CERTIFICATION FILTERING ENGINE
// ==========================================
function initCertFilters() {
  const filterBtns = document.querySelectorAll('#certFilters .filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      certCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 250);
        }
      });
    });
  });
}

// ==========================================
// 10. MODAL CONTROLLER (PROJECT CASE STUDY & CERTS)
// ==========================================
function initModals() {
  const projectModal = document.getElementById('projectModal');
  const certModal = document.getElementById('certModal');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  // Open Project Modal
  document.querySelectorAll('.btn-view-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-id');
      const data = PROJECT_CASE_STUDIES[projectId];

      if (data) {
        populateProjectModal(data);
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Open Certificate Preview Modal
  document.querySelectorAll('.btn-view-cert').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title');
      const imgSrc = btn.getAttribute('data-img');

      document.getElementById('certModalTitle').textContent = title;
      document.getElementById('certModalImg').src = imgSrc;
      document.getElementById('certModalDownload').href = imgSrc;

      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close Modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close on outside overlay click
  [projectModal, certModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    }
  });

  // Close on Escape Key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));
  document.body.style.overflow = 'auto';
}

function populateProjectModal(data) {
  const modalBody = document.getElementById('projectModalContent');
  document.getElementById('projectModalTitle').textContent = data.title;

  let resultsHtml = '';
  if (data.results && data.results.length > 0) {
    resultsHtml = `
      <div class="metric-grid">
        ${data.results.map(r => `
          <div class="metric-box">
            <div class="metric-val">${r.value}</div>
            <div class="metric-lbl">${r.label}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  let hardwareHtml = data.hardware ? `
    <div class="case-study-section">
      <h4><i class="fas fa-microchip"></i> 6. Hardware Specifications</h4>
      <ul class="case-study-list">
        ${data.hardware.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  let softwareHtml = data.software ? `
    <div class="case-study-section">
      <h4><i class="fas fa-code"></i> 7. Software & Frameworks</h4>
      <ul class="case-study-list">
        ${data.software.map(s => `<li>${s}</li>`).join('')}
      </ul>
    </div>
  ` : '';

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-badge-tag">${data.subtitle}</span>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-info-circle"></i> 1. Project Overview</h4>
      <p>${data.overview}</p>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-exclamation-triangle"></i> 2. Problem Statement</h4>
      <p>${data.problemStatement}</p>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-bullseye"></i> 3. Objective</h4>
      <p>${data.objective}</p>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-tools"></i> 4. Technologies Used</h4>
      <div class="project-tech">
        ${data.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-sitemap"></i> 5. System Architecture</h4>
      <p>${data.architectureDesc}</p>
    </div>

    ${hardwareHtml}
    ${softwareHtml}

    <div class="case-study-section">
      <h4><i class="fas fa-tasks"></i> 8. Methodology & Engineering Workflow</h4>
      <ul class="case-study-list">
        ${data.methodology.map(m => `<li>${m}</li>`).join('')}
      </ul>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-user-check"></i> 9. My Engineering Contribution</h4>
      <p>${data.contribution}</p>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-chart-line"></i> 10. Key Results & Performance</h4>
      ${resultsHtml}
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-bug"></i> 11. Engineering Challenges</h4>
      <p>${data.challenges}</p>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-lightbulb"></i> 12. Solutions Implemented</h4>
      <p>${data.solutions}</p>
    </div>

    <div class="case-study-section">
      <h4><i class="fas fa-rocket"></i> 13. Future Scope & Improvements</h4>
      <p>${data.futureImprovements}</p>
    </div>

    <div style="margin-top: 2rem; pt-1rem; border-top: 1px solid var(--border-color); display: flex; gap: 1rem;">
      <a href="${data.githubLink}" target="_blank" class="btn btn-primary">
        <i class="fab fa-github"></i> View GitHub Repository
      </a>
      <button class="btn btn-secondary modal-close-btn-action" onclick="closeAllModals()">
        Close Case Study
      </button>
    </div>
  `;
}

// ==========================================
// 11. CONTACT FORM VALIDATION & TOAST FEEDBACK
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toastNotification');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    let isValid = true;

    [name, email, subject, message].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('invalid');
        isValid = false;
      } else {
        input.classList.remove('invalid');
      }
    });

    if (email.value && !validateEmail(email.value)) {
      email.classList.add('invalid');
      isValid = false;
    }

    if (isValid) {
      showToast("Message Sent! Thank you for getting in touch. (Note: Replace with Formspree endpoint in script.js)");
      form.reset();
    } else {
      showToast("Please fill in all required fields accurately.");
    }
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

// ==========================================
// 12. BACK TO TOP BUTTON ENGINE
// ==========================================
function initBackToTop() {
  const backBtn = document.getElementById('backToTop');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================
// 13. SMOOTH SCROLL FOR NAV LINKS
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
