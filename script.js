const planetData = [
  { name: "水星", tag: "Mercury", texture: "mercury.jpg", size: 0.38, distance: 7.5, period: 88, angle: 0.4, color: ["#b8b2a6", "#5c5852"], text: "离太阳最近的岩石行星，体积最小，公转最快，表面布满撞击坑。", facts: [["最小行星", "水星是太阳系最小的行星。", "直径约为地球的38%。", "几乎没有浓厚大气保护表面。"], ["公转最快", "绕太阳一圈约88个地球日。", "真实公转周期在八大行星中最短。", "轨道比地球轨道更椭圆。"], ["极端温差", "白天表面温度可超过400°C。", "夜晚会降到零下170°C左右。", "温差来自稀薄大气和慢自转。"], ["撞击坑地貌", "表面保留大量古老撞击坑。", "卡洛里盆地是著名大型撞击结构。", "极区永久阴影处可能存在水冰。"]] },
  { name: "金星", tag: "Venus", texture: "venus.jpg", size: 0.95, distance: 11, period: 225, angle: 1.5, color: ["#e4c08a", "#9f6939"], text: "大小接近地球，却被高压二氧化碳大气和硫酸云层包裹。", facts: [["高温表面", "表面温度可超过460°C。", "强温室效应让热量难以散出。", "它比离太阳更近的水星还热。"], ["浓厚大气", "大气主要是二氧化碳。", "云层含硫酸成分。", "地表气压远高于地球。"], ["逆向自转", "自转方向与多数行星相反。", "自转非常缓慢。", "金星上一天比一年还长。"], ["地球姊妹星", "半径和质量与地球接近。", "表面环境却完全不同。", "常用于理解温室效应边界。"]] },
  { name: "地球", tag: "Earth", texture: "earth.jpg", size: 1, distance: 15, period: 365, angle: 2.5, color: ["#2e72d6", "#1d3f90"], earth: true, moon: true, text: "已知唯一存在生命的行星，液态水、大气层、磁场共同构成宜居环境。", facts: [["液态水", "地球表面约71%被水覆盖。", "液态水是生命存在的重要条件。", "海洋帮助调节全球气候。"], ["大气层", "大气层提供氧气并维持气压。", "臭氧层能吸收部分紫外线。", "适度温室效应让温度适宜。"], ["磁场保护", "地球磁场能偏转部分太阳风。", "磁层保护大气不易被剥离。", "极光是太阳风与磁场互动的可见现象。"], ["月球系统", "月球是地球唯一的天然卫星。", "月球引力影响潮汐。", "它也稳定了地球自转轴。"]] },
  { name: "火星", tag: "Mars", texture: "mars.jpg", size: 0.53, distance: 19.5, period: 687, angle: 3.4, color: ["#c75b32", "#5b251b"], text: "红色岩石行星，保留着火山、峡谷、古河道等丰富地貌。", facts: [["红色表面", "富含氧化铁而呈红色。", "表面有沙尘和岩石地貌。", "大气非常稀薄。"], ["奥林匹斯山", "太阳系最高火山。", "高度约21千米。", "是火星火山活动地貌。"], ["水的线索", "两极存在水冰和干冰。", "古河道暗示过去可能有液态水。", "水资源是未来探测重点。"], ["探测前沿", "火星车会分析岩石和土壤。", "轨道器持续绘制地形和气候。", "它是载人深空任务的重要目标。"]] },
  { name: "木星", tag: "Jupiter", texture: "jupiter.jpg", size: 3.0, distance: 31, period: 4333, angle: 4.3, color: ["#d4b389", "#7b563d"], text: "太阳系最大行星，强大引力、云带和大红斑构成最醒目的气态巨行星景观。", facts: [["最大行星", "木星是太阳系最大行星。", "直径约为地球的11倍。", "质量约为其他七颗行星总和的2.5倍。"], ["大红斑", "大红斑是巨大风暴。", "已被观测数百年。", "风暴尺度可超过地球。"], ["快速自转", "木星约10小时自转一周。", "快速自转拉伸出明显云带。", "强磁场也十分突出。"], ["伽利略卫星", "木卫一、二、三、四最著名。", "木卫二冰层下可能有海洋。", "木卫三是太阳系最大卫星。"]] },
  { name: "土星", tag: "Saturn", texture: "saturn.jpg", size: 2.55, distance: 43, period: 10759, angle: 5.0, color: ["#d7bd86", "#8c7048"], ring: true, text: "以宽阔明亮的行星环闻名，是最具辨识度的气态巨行星。", facts: [["土星光环", "主要由冰块和岩石碎片组成。", "很宽但厚度很薄。", "不同环带亮度不同。"], ["低密度", "土星平均密度低于水。", "主要由氢和氦组成。", "整体非常蓬松。"], ["土卫六", "拥有浓厚大气。", "表面存在甲烷湖泊。", "是研究有机化学的重要目标。"], ["六边形风暴", "北极有著名六边形环流结构。", "这是大气动力学形成的长期现象。", "说明土星大气活动非常复杂。"]] },
  { name: "天王星", tag: "Uranus", texture: "uranus.jpg", size: 1.75, distance: 56, period: 30687, angle: 5.65, color: ["#8fd9e2", "#3c8d9d"], text: "蓝绿色冰巨星，自转轴倾斜极大，像侧躺着绕太阳运行。", facts: [["侧躺自转", "自转轴倾斜约98°。", "几乎像躺着自转。", "季节变化非常特别。"], ["甲烷颜色", "甲烷吸收红光。", "因此呈蓝绿色。", "属于冰巨星。"], ["遥远轨道", "距离太阳很遥远。", "公转一圈约84年。", "接收到的太阳光很弱。"], ["暗淡光环", "天王星也拥有环系统。", "光环比土星环暗得多。", "主要由深色尘埃和碎块组成。"]] },
  { name: "海王星", tag: "Neptune", texture: "neptune.jpg", size: 1.72, distance: 69, period: 60190, angle: 0.1, color: ["#496fca", "#14265d"], text: "距离太阳最远的行星，拥有强烈风暴、深蓝色大气和漫长公转周期。", facts: [["最远行星", "海王星距离太阳最远。", "公转一圈约165年。", "太阳光非常微弱。"], ["高速风", "拥有极强高速风。", "大气中会出现巨大风暴。", "深蓝色来自甲烷和大气结构。"], ["冰巨星", "内部含水、氨、甲烷等物质。", "属于冰巨星。", "不同于木星、土星。"], ["特里同", "特里同是海王星最大卫星。", "它可能是被捕获的柯伊伯带天体。", "表面存在极低温冰冻环境。"]] }
];

const sunData = {
  name: "太阳",
  tag: "Sun",
  text: "太阳是太阳系的引力与能量中心，近距观察可看到强烈光效、日冕感和持续自转。",
  facts: [
    ["能量核心", "太阳通过核聚变释放光和热。", "太阳能量维持地球气候系统。", "它是太阳系最主要的能量来源。"],
    ["引力中心", "太阳质量占太阳系总质量99.8%以上。", "八大行星都围绕太阳公转。", "行星轨道都受太阳引力主导。"],
    ["太阳活动", "太阳耀斑和太阳风会影响空间环境。", "强太阳活动可能影响通信和卫星。", "地球极光也与太阳风有关。"]
  ]
};

const host = document.getElementById("sceneHost");
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.62;
host.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x02040a);
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 240);
camera.position.set(-30, 14, 86);
scene.add(camera);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.rotateSpeed = 0.62;
controls.zoomSpeed = 0.72;
controls.panSpeed = 0.45;
controls.maxDistance = 130;
controls.minDistance = 4;
controls.target.set(-14, 0, 0);

scene.add(new THREE.AmbientLight(0x8fa2bd, 0.58));
const sunLight = new THREE.PointLight(0xffd28a, 19, 215, 1.02);
sunLight.position.set(0, 0, 0);
scene.add(sunLight);
const fillLight = new THREE.DirectionalLight(0x87a9ff, 0.18);
fillLight.position.set(-12, 10, 18);
scene.add(fillLight);

const solarRoot = new THREE.Group();
scene.add(solarRoot);
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const planetMeshes = [];
let sunMesh = null;
let selectedIndex = -1;
let cameraGoal = null;
let targetGoal = null;
let isFlying = false;
let glowTexture = null;
const textureLoader = new THREE.TextureLoader();
const clock = new THREE.Clock();
const ORBIT_SPEED = 0.032;
const J2000 = Date.UTC(2000, 0, 1, 12, 0, 0);
const REALTIME_ORBITS = true;
let audioContext = null;
let musicNodes = null;
let pointerDown = null;
let isScanning = false;
let briefingTimer = null;
const completedTargets = new Set();

let missionCelebrated = false;
let currentSpeechText = "";
let currentUtterance = null;
let selectedSpeechVoice = null;
let speechPaused = false;
let musicDucked = false;

const missionTargets = [
  { name: sunData.name, tag: sunData.tag, index: -2 },
  ...planetData.map((planet, index) => ({ name: planet.name, tag: planet.tag, index }))
];

const aiGuide = {
  Overview: { message: "欢迎进入太阳系探索计划。点击任意行星开始扫描任务。", tips: ["选择路线节点可直接飞行", "右侧数据层可打开科普档案", "完成全部扫描可结束任务"] },
  Sun: { message: "太阳是本次探索的能量核心。建议先了解它如何控制整个系统。", tips: ["能量核心", "引力中心", "太阳活动"] },
  Mercury: { message: "水星最靠近太阳，表面保留大量撞击坑。", tips: ["撞击坑地貌", "极端温差", "公转最快"] },
  Venus: { message: "金星被浓厚云层包裹，是强温室效应的典型样本。", tips: ["浓厚大气", "高温表面", "逆向自转"] },
  Earth: { message: "地球是已知生命家园，建议观察水、大气、磁场与月球系统。", tips: ["液态水", "大气层", "磁场保护", "月球系统"] },
  Mars: { message: "火星曾经可能拥有液态水，是人类深空探测的重要目标。", tips: ["奥林匹斯山", "水的线索", "极地冰盖"] },
  Jupiter: { message: "木星拥有太阳系最大的风暴系统，也保护着复杂的卫星家族。", tips: ["大红斑", "伽利略卫星", "快速自转"] },
  Saturn: { message: "土星的行星环是本次任务最清晰的结构目标。", tips: ["土星光环", "低密度", "土卫六"] },
  Uranus: { message: "天王星像侧躺着自转，拥有非常特殊的季节变化。", tips: ["侧躺自转", "甲烷颜色", "暗淡光环"] },
  Neptune: { message: "海王星遥远、寒冷，却拥有强烈风暴和高速风。", tips: ["高速风", "冰巨星", "特里同"] }
};

function realtimeAngle(data) {
  if (!REALTIME_ORBITS) return data.angle;
  const days = (Date.now() - J2000) / 86400000;
  return data.angle + (days / data.period) * Math.PI * 2;
}

function loadTexture(file, fallbackData) {
  const fallback = makeTexture(fallbackData || { color: ["#888", "#333"] });
  if (!file) return fallback;
  const source = window.SOLAR_TEXTURES && window.SOLAR_TEXTURES[file] ? window.SOLAR_TEXTURES[file] : `assets/textures/${file}`;
  const texture = textureLoader.load(source, (loaded) => {
    loaded.encoding = THREE.sRGBEncoding;
    loaded.anisotropy = 8;
  });
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 8;
  return file ? texture : fallback;
}

function makeRingTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 96;
  const g = c.getContext("2d");
  g.clearRect(0, 0, c.width, c.height);
  for (let x = 0; x < c.width; x += 1) {
    const edge = Math.min(x / 120, (c.width - x) / 120, 1);
    const band = 0.35 + Math.sin(x * 0.035) * 0.18 + Math.sin(x * 0.11) * 0.08;
    g.fillStyle = `rgba(${170 + band * 70}, ${155 + band * 55}, ${125 + band * 40}, ${Math.max(0, edge) * 0.78})`;
    g.fillRect(x, 0, 1, c.height);
  }
  const texture = new THREE.CanvasTexture(c);
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 8;
  return texture;
}

function makeTexture(data, w = 1024, h = 512) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, data.color[0]);
  grad.addColorStop(1, data.color[1]);
  g.fillStyle = grad;
  g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 8) {
    const wave = Math.sin(y * 0.035) * 26;
    g.globalAlpha = data.bands ? 0.38 : 0.12;
    g.fillStyle = y % 32 < 16 ? "#ffffff" : "#000000";
    g.fillRect(wave, y, w, 4 + Math.random() * 7);
  }
  if (data.bands) {
    const palette = data.tag === "Jupiter"
      ? ["rgba(246,229,197,0.55)", "rgba(146,96,62,0.46)", "rgba(98,65,47,0.38)", "rgba(210,188,154,0.5)"]
      : ["rgba(245,224,180,0.42)", "rgba(135,112,82,0.34)", "rgba(220,198,156,0.44)"];
    for (let y = 18; y < h; y += 30) {
      g.globalAlpha = 1;
      g.fillStyle = palette[Math.floor(y / 30) % palette.length];
      const height = data.tag === "Jupiter" ? 13 + (y % 3) * 4 : 8;
      g.fillRect(0, y + Math.sin(y * 0.08) * 5, w, height);
      g.fillStyle = "rgba(255,255,255,0.18)";
      g.fillRect(Math.sin(y) * 35, y + height + 4, w, 3);
    }
  }
  if (data.earth) {
    g.globalAlpha = 0.88;
    g.fillStyle = "#2f8d55";
    [[230, 190, 90, 130], [540, 245, 105, 160], [690, 145, 80, 95], [390, 330, 80, 70]].forEach(([x, y, rx, ry]) => {
      g.beginPath(); g.ellipse(x, y, rx, ry, Math.random(), 0, Math.PI * 2); g.fill();
    });
    g.globalAlpha = 0.24;
    g.strokeStyle = "#ffffff";
    g.lineWidth = 16;
    for (let i = 0; i < 7; i++) { g.beginPath(); g.ellipse(512, 70 + i * 62, 430, 22, i * 0.2, 0, Math.PI * 2); g.stroke(); }
  }
  if (data.tag === "Jupiter") {
    g.globalAlpha = 0.65;
    g.fillStyle = "#8f3d2f";
    g.beginPath(); g.ellipse(690, 285, 86, 42, -0.2, 0, Math.PI * 2); g.fill();
    g.globalAlpha = 0.22;
    g.fillStyle = "#fff2d0";
    g.beginPath(); g.ellipse(710, 278, 38, 16, -0.2, 0, Math.PI * 2); g.fill();
  }
  g.globalAlpha = 0.18;
  for (let i = 0; i < 260; i++) {
    g.fillStyle = Math.random() > 0.5 ? "#fff" : "#000";
    g.beginPath(); g.arc(Math.random() * w, Math.random() * h, Math.random() * 2.8, 0, Math.PI * 2); g.fill();
  }
  const texture = new THREE.CanvasTexture(c);
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 8;
  return texture;
}

function makeGlow(color, scale) {
  if (!glowTexture) {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, "rgba(255,255,255,0.9)");
    grad.addColorStop(0.28, "rgba(255,255,255,0.28)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    glowTexture = new THREE.CanvasTexture(c);
  }
  const mat = new THREE.SpriteMaterial({ map: glowTexture, color, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.setScalar(scale);
  return sprite;
}

function makeAtmosphere(color, scale, opacity = 0.18) {
  const sprite = makeGlow(color, scale);
  sprite.material.opacity = opacity;
  return sprite;
}

function makeCloudTexture() {
  const c = document.createElement("canvas");
  c.width = 1024;
  c.height = 512;
  const g = c.getContext("2d");
  g.clearRect(0, 0, c.width, c.height);
  g.filter = "blur(7px)";
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * c.width;
    const y = Math.random() * c.height;
    const rx = 28 + Math.random() * 110;
    const ry = 8 + Math.random() * 26;
    g.globalAlpha = 0.18 + Math.random() * 0.28;
    g.fillStyle = "#ffffff";
    g.beginPath();
    g.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2);
    g.fill();
  }
  g.filter = "none";
  g.globalAlpha = 0.22;
  g.strokeStyle = "#ffffff";
  g.lineWidth = 6;
  for (let i = 0; i < 14; i++) {
    const y = 50 + Math.random() * 410;
    g.beginPath();
    for (let x = -80; x < 1100; x += 90) {
      const py = y + Math.sin(x * 0.012 + i) * 8;
      if (x < 0) g.moveTo(x, py);
      else g.lineTo(x, py);
    }
    g.stroke();
  }
  const texture = new THREE.CanvasTexture(c);
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = 8;
  return texture;
}

function makeHazeTexture(colorA = "rgba(255,255,255,0.5)", colorB = "rgba(255,255,255,0)") {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 512;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(256, 256, 80, 256, 256, 250);
  grad.addColorStop(0, colorA);
  grad.addColorStop(1, colorB);
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 512);
  const texture = new THREE.CanvasTexture(c);
  texture.encoding = THREE.sRGBEncoding;
  return texture;
}

function makeTiltRing(radius, color, opacity) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius * 0.92, radius, 128),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = Math.PI / 2.15;
  ring.rotation.z = -0.32;
  return ring;
}

function makeStormMark(size) {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 128;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(128, 64, 10, 128, 64, 110);
  grad.addColorStop(0, "rgba(255,185,130,0.72)");
  grad.addColorStop(0.45, "rgba(178,70,48,0.82)");
  grad.addColorStop(1, "rgba(178,70,48,0)");
  g.fillStyle = grad;
  g.beginPath();
  g.ellipse(128, 64, 92, 36, -0.15, 0, Math.PI * 2);
  g.fill();
  const texture = new THREE.CanvasTexture(c);
  texture.encoding = THREE.sRGBEncoding;
  const mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.78, depthWrite: false }));
  mark.scale.set(size * 0.72, size * 0.34, 1);
  mark.position.set(size * 0.45, -size * 0.12, size * 0.88);
  return mark;
}

function addOrbit(radius) {
  const pts = [];
  for (let i = 0; i <= 160; i++) {
    const a = (i / 160) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
  }
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color: 0x9fb3d9, transparent: true, opacity: 0.22 }));
  solarRoot.add(line);
}

function createScene() {
  const stars = new THREE.BufferGeometry();
  const starPos = [];
  const starColor = [];
  for (let i = 0; i < 1700; i++) {
    const r = 108 + Math.random() * 72;
    const a = Math.random() * Math.PI * 2;
    const b = Math.acos(Math.random() * 2 - 1);
    starPos.push(Math.sin(b) * Math.cos(a) * r, Math.cos(b) * r, Math.sin(b) * Math.sin(a) * r);
    const warm = Math.random();
    starColor.push(warm > 0.92 ? 0.95 : 0.62, warm > 0.92 ? 0.86 : 0.76, warm > 0.92 ? 0.62 : 1);
  }
  stars.setAttribute("position", new THREE.Float32BufferAttribute(starPos, 3));
  stars.setAttribute("color", new THREE.Float32BufferAttribute(starColor, 3));
  scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ size: 0.1, vertexColors: true, transparent: true, opacity: 0.82 })));

  const dust = new THREE.BufferGeometry();
  const dustPos = [];
  for (let i = 0; i < 460; i++) {
    const x = -95 + Math.random() * 190;
    const y = -14 + Math.random() * 24 + Math.sin(i * 0.09) * 4;
    const z = -118 + Math.random() * 62;
    dustPos.push(x, y, z);
  }
  dust.setAttribute("position", new THREE.Float32BufferAttribute(dustPos, 3));
  scene.add(new THREE.Points(dust, new THREE.PointsMaterial({ color: 0x5a78a2, size: 0.24, transparent: true, opacity: 0.16, depthWrite: false })));

  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(3.35, 96, 48),
    new THREE.MeshBasicMaterial({ map: loadTexture("sun.jpg", { color: ["#ffca48", "#c75a16"] }), color: 0xffd67a })
  );
  sun.userData.index = -2;
  sun.add(makeGlow(0xffb238, 12.5));
  const corona = makeGlow(0xff8f2c, 17);
  corona.material.opacity = 0.28;
  sun.add(corona);
  const coronaOuter = makeGlow(0xffd08a, 26);
  coronaOuter.material.opacity = 0.14;
  sun.add(coronaOuter);
  sunMesh = sun;
  solarRoot.add(sun);

  planetData.forEach((data, index) => {
    addOrbit(data.distance);
    const angle = realtimeAngle(data);
    const group = new THREE.Group();
    group.position.set(Math.cos(angle) * data.distance, 0, Math.sin(angle) * data.distance);
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(data.size, 96, 48),
      new THREE.MeshStandardMaterial({ map: loadTexture(data.texture, data), roughness: 0.92, metalness: 0, emissive: new THREE.Color(data.tag === "Venus" ? 0x2a1606 : 0x000000), emissiveIntensity: data.tag === "Venus" ? 0.08 : 0 })
    );
    mesh.userData.index = index;
    group.add(mesh);
    const effectGroup = new THREE.Group();
    group.add(effectGroup);
    const atmosphereColor = data.tag === "Venus" ? 0xe8c98d : data.tag === "Mars" ? 0xd76642 : data.tag === "Neptune" ? 0x3f71ff : data.tag === "Uranus" ? 0x83f1ff : 0x78d8ff;
    effectGroup.add(makeAtmosphere(atmosphereColor, data.size * 3.1, data.tag === "Earth" ? 0.28 : 0.18));
    let clouds = null;
    let storm = null;
    let ringMesh = null;
    let featureRing = null;
    let hazeSprite = null;
    if (data.tag === "Earth") {
      clouds = new THREE.Mesh(
        new THREE.SphereGeometry(data.size * 1.045, 96, 48),
        new THREE.MeshBasicMaterial({ map: makeCloudTexture(), transparent: true, opacity: 0.62, depthWrite: false })
      );
      effectGroup.add(clouds);
      featureRing = makeTiltRing(data.size * 2.05, 0x79d7ff, 0.18);
      effectGroup.add(featureRing);
    }
    if (data.tag === "Venus") {
      clouds = new THREE.Mesh(
        new THREE.SphereGeometry(data.size * 1.06, 96, 48),
        new THREE.MeshBasicMaterial({ map: makeCloudTexture(), color: 0xf1d9a4, transparent: true, opacity: 0.44, depthWrite: false })
      );
      effectGroup.add(clouds);
      hazeSprite = makeAtmosphere(0xf0c777, data.size * 4.2, 0.18);
      effectGroup.add(hazeSprite);
    }
    if (data.tag === "Mars") {
      hazeSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeHazeTexture("rgba(218,92,54,0.42)", "rgba(218,92,54,0)"), transparent: true, opacity: 0.32, depthWrite: false }));
      hazeSprite.scale.setScalar(data.size * 4.3);
      effectGroup.add(hazeSprite);
    }
    if (data.tag === "Jupiter") {
      featureRing = makeTiltRing(data.size * 1.18, 0xffdfbd, 0.14);
      featureRing.rotation.x = Math.PI / 2;
      effectGroup.add(featureRing);
    }
    if (data.tag === "Uranus" || data.tag === "Neptune") {
      featureRing = makeTiltRing(data.size * 1.65, data.tag === "Uranus" ? 0x93f3ff : 0x527bff, 0.16);
      featureRing.rotation.z = data.tag === "Uranus" ? 1.22 : -0.48;
      effectGroup.add(featureRing);
    }
    if (data.ring) {
      const ringTexture = makeRingTexture();
      const ring = new THREE.Mesh(new THREE.RingGeometry(data.size * 1.35, data.size * 2.25, 160), new THREE.MeshBasicMaterial({ map: ringTexture, side: THREE.DoubleSide, transparent: true, opacity: 0.86 }));
      ring.rotation.x = Math.PI / 2.4;
      group.add(ring);
      ringMesh = ring;
    }
    let moonPivot = null;
    let moonMesh = null;
    let moonAngle = 0;
    if (data.moon) {
      moonPivot = new THREE.Group();
      moonAngle = Math.PI * 0.25;
      moonMesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 48, 24), new THREE.MeshBasicMaterial({ map: loadTexture("moon.jpg", { color: ["#bfc0ba", "#4f4f4b"] }) }));
      moonMesh.position.set(data.size * 2.05, 0.12, 0);
      moonPivot.rotation.y = moonAngle;
      moonPivot.add(moonMesh);
      group.add(moonPivot);
    }
    solarRoot.add(group);
    planetMeshes.push({
      data,
      group,
      mesh,
      angle,
      speed: ORBIT_SPEED * (365 / data.period),
      baseScale: 1,
      moonPivot,
      moonMesh,
      moonSpeed: 0.85,
      clouds,
      storm,
      ringMesh,
      featureRing,
      hazeSprite,
      effectGroup
    });
  });
}

function focusPlanet(index, playMusic = true) {
  hideIntro(playMusic);
  selectedIndex = index;
  setCameraFlight(getPlanetCamera(index));
  completeMissionTarget(index);
  updatePanels();
}

function focusSun(playMusic = true) {
  hideIntro(playMusic);
  selectedIndex = -2;
  setCameraFlight(getSunCamera());
  completeMissionTarget(-2);
  updatePanels();
}

function showOverview(playMusic = true) {
  hideIntro(playMusic);
  selectedIndex = -1;
  setCameraFlight({
    pos: new THREE.Vector3(-28, 18, 86),
    target: new THREE.Vector3(0, 0, 0),
    minDistance: 10,
    maxDistance: 130
  });
  updatePanels();
}

function setCameraFlight(goal) {
  cameraGoal = goal.pos;
  targetGoal = goal.target;
  isFlying = true;
  controls.minDistance = goal.minDistance;
  controls.maxDistance = goal.maxDistance;
}

function getSunCamera() {
  return {
    pos: new THREE.Vector3(0, 8.8, 15.5),
    target: new THREE.Vector3(0, -1.8, 0),
    minDistance: 5.2,
    maxDistance: 46
  };
}

function getPlanetCamera(index) {
  const item = planetMeshes[index];
  const p = item.group.position.clone();
  const dir = p.clone().normalize();
  const side = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
  const viewDir = side.multiplyScalar(0.78).add(new THREE.Vector3(0, 0.38, 0)).add(dir.clone().multiplyScalar(0.22)).normalize();
  const distance = item.data.size * 5 + 7;
  return {
    pos: p.clone().add(viewDir.multiplyScalar(distance)),
    target: p.clone(),
    minDistance: Math.max(1.25, item.data.size * 1.45),
    maxDistance: Math.max(12, item.data.size * 9 + 8)
  };
}

function updatePanels() {
  const data = selectedIndex === -2 ? sunData : selectedIndex >= 0 ? planetData[selectedIndex] : null;
  document.body.classList.toggle("overview-mode", selectedIndex === -1);
  document.body.classList.toggle("target-mode", selectedIndex !== -1);
  document.getElementById("viewMode").textContent = data ? data.tag : "SOLAR SYSTEM";
  document.getElementById("viewTitle").textContent = data ? `${data.name} / 目标视角` : "太阳系空间总览";
  document.getElementById("panelTag").textContent = selectedIndex === -2 ? "Primary Star" : data ? `Planet ${String(selectedIndex + 1).padStart(2, "0")}` : "Overview";
  document.getElementById("panelTitle").textContent = data ? `${data.name}观察` : "太阳系空间总览";
  document.getElementById("panelText").textContent = data ? data.text : "点击太阳进入中心观察视角，点击行星进入近距轨道视角。拖动可环绕，滚轮可缩放，右侧数据层可展开科普信息。";
  renderStrip();
  renderHotspots(data);
  renderRoute();
  updateMissionPanel();
  updateAIPanel(data);
}

function targetOrderIndex(index) {
  return index === -2 ? 0 : index + 1;
}

function completeMissionTarget(index) {
  if (index < -2) return;
  completedTargets.add(targetOrderIndex(index));
  if (completedTargets.size === missionTargets.length) {
    const panel = document.getElementById("missionPanel");
    document.getElementById("missionStatus").textContent = "MISSION COMPLETE";
    panel.classList.add("complete");
    if (!missionCelebrated) {
      missionCelebrated = true;
      launchMissionCelebration();
    }
  }
}

function launchMissionCelebration() {
  const burst = document.createElement("div");
  burst.className = "celebration-burst";
  burst.innerHTML = Array.from({ length: 28 }, (_, i) => `<span style="--i:${i}"></span>`).join("");
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 2200);
}

function updateMissionPanel() {
  const target = selectedIndex === -1 ? "待选择" : missionTargets[targetOrderIndex(selectedIndex)].name;
  document.getElementById("missionTarget").textContent = target;
  document.getElementById("missionProgress").textContent = `${completedTargets.size} / ${missionTargets.length}`;
  if (completedTargets.size !== missionTargets.length) {
    document.getElementById("missionStatus").textContent = "探索太阳系";
    document.getElementById("missionPanel").classList.remove("complete");
  }
  const names = [...completedTargets].sort((a, b) => a - b).map((i) => missionTargets[i].name);
  document.getElementById("scanList").innerHTML = names.length ? `已完成扫描：<br>${names.join(" / ")}` : "等待首次扫描";
}

function updateAIPanel(data) {
  const tag = data ? data.tag : "Overview";
  const guide = aiGuide[tag] || aiGuide.Overview;
  const panel = document.getElementById("aiPanel");
  document.getElementById("aiMessage").textContent = guide.message;
  document.getElementById("aiTips").innerHTML = guide.tips.map((tip) => `<span>${tip}</span>`).join("");
  panel.classList.remove("updating");
  void panel.offsetWidth;
  panel.classList.add("updating");
}

function renderRoute() {
  const route = document.getElementById("routeList");
  route.innerHTML = "";
  missionTargets.forEach((target, i) => {
    const btn = document.createElement("button");
    btn.className = `route-node${target.index === selectedIndex ? " active" : ""}${completedTargets.has(i) ? " done" : ""}`;
    btn.dataset.targetIndex = String(target.index);
    btn.setAttribute("aria-label", `飞向${target.name}`);
    btn.innerHTML = `<span>${String(i + 1).padStart(2, "0")}</span>${target.name}`;
    btn.addEventListener("click", () => requestTarget(target.index));
    route.appendChild(btn);
  });
}

function renderHotspots(data) {
  const list = document.getElementById("hotspotList");
  list.innerHTML = "";
  if (!data) return;
  const facts = data.facts;
  facts.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "hotspot-item";
    btn.textContent = item[0];
    btn.addEventListener("click", () => openFact(item, data));
    list.appendChild(btn);
  });
}

function renderStrip() {
  const strip = document.getElementById("planetStrip");
  strip.innerHTML = "";
  const sunBtn = document.createElement("button");
  sunBtn.className = `planet-chip${selectedIndex === -2 ? " active" : ""}`;
  sunBtn.textContent = sunData.name;
  sunBtn.addEventListener("click", () => requestTarget(-2));
  strip.appendChild(sunBtn);
  planetData.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = `planet-chip${i === selectedIndex ? " active" : ""}`;
    btn.textContent = p.name;
    btn.addEventListener("click", () => requestTarget(i));
    strip.appendChild(btn);
  });
}

function openFact(item, data) {
  stopVoice(false);
  document.getElementById("factKicker").textContent = data ? data.tag : "Overview";
  document.getElementById("factTitle").textContent = item[0];
  document.getElementById("factCaption").textContent = item[1] || "从当前视角观察太阳系结构与天体特征。";
  document.getElementById("factList").innerHTML = item.slice(1).map((f) => `<li>${f}</li>`).join("");
  const planet = document.getElementById("factPlanet");
  const imageUrl = getHotspotImage(item, data);
  planet.style.backgroundImage = `url("${imageUrl}")`;
  planet.style.boxShadow = "inset 0 -30px 52px rgba(0, 0, 0, 0.28), 0 0 46px rgba(214, 192, 122, 0.16)";
  planet.classList.toggle("photo", true);
  const modal = document.getElementById("factModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  startVoiceNarration(item, data);
}

function getHotspotImage(item, data) {
  const title = item[0];
  const tag = data ? data.tag : "Overview";
  const map = {
    "Sun:能量核心": "keyword/sun-core-fusion.jpg",
    "Sun:引力中心": "keyword/sun-gravity-orbits.jpg",
    "Sun:太阳活动": "keyword/sun-flare-sdo.jpg",
    "Mercury:最小行星": "keyword/mercury-global.jpg",
    "Mercury:公转最快": "keyword/mercury-orbit.jpg",
    "Mercury:极端温差": "keyword/mercury-terminator.jpg",
    "Mercury:撞击坑地貌": "keyword/mercury-caloris.jpg",
    "Venus:高温表面": "keyword/venus-hot-surface.jpg",
    "Venus:浓厚大气": "keyword/venus-clouds.jpg",
    "Venus:逆向自转": "keyword/venus-rotation.jpg",
    "Venus:地球姊妹星": "keyword/venus-earth-comparison.jpg",
    "Earth:液态水": "keyword/earth-ocean.jpg",
    "Earth:大气层": "keyword/earth-atmosphere-limb.jpg",
    "Earth:磁场保护": "keyword/earth-magnetosphere.jpg",
    "Earth:月球系统": "keyword/earth-moon.jpg",
    "Mars:红色表面": "keyword/mars-red-surface.jpg",
    "Mars:奥林匹斯山": "keyword/mars-olympus.jpg",
    "Mars:水的线索": "keyword/mars-water-ice.jpg",
    "Mars:探测前沿": "keyword/mars-rover.jpg",
    "Jupiter:最大行星": "keyword/jupiter-full.jpg",
    "Jupiter:大红斑": "keyword/jupiter-great-red-spot.jpg",
    "Jupiter:快速自转": "keyword/jupiter-cloud-bands.jpg",
    "Jupiter:伽利略卫星": "keyword/jupiter-galilean-moons.jpg",
    "Saturn:土星光环": "keyword/saturn-rings.jpg",
    "Saturn:低密度": "keyword/saturn-full.jpg",
    "Saturn:土卫六": "keyword/saturn-titan.jpg",
    "Saturn:六边形风暴": "keyword/saturn-hexagon.jpg",
    "Uranus:侧躺自转": "keyword/uranus-tilt.jpg",
    "Uranus:甲烷颜色": "keyword/uranus-methane.jpg",
    "Uranus:遥远轨道": "keyword/uranus-voyager.jpg",
    "Uranus:暗淡光环": "keyword/uranus-rings.jpg",
    "Neptune:最远行星": "keyword/neptune-voyager.jpg",
    "Neptune:高速风": "keyword/neptune-dark-spot.jpg",
    "Neptune:冰巨星": "keyword/neptune-ice-giant.jpg",
    "Neptune:特里同": "keyword/neptune-triton.jpg",
    "Overview:空间导航": "keyword/sun-gravity-orbits.jpg",
    "Overview:比例与轨道": "keyword/sun-gravity-orbits.jpg"
  };
  return `assets/hotspots/${map[`${tag}:${title}`] || "sun-gravity.jpg"}`;
}

// ===== Voice Narration + IP Guide =====
function speechSupported() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function buildSpeechText(item, data) {
  const name = data ? data.name : "太阳系";
  return `${name}，${item[0]}。${item.slice(1).join("。")}`;
}

function getChineseVoice() {
  if (!speechSupported()) return null;
  const voices = speechSynthesis.getVoices();
  const preferred = ["xiaoxiao", "tingting", "google 中文", "google 普通话", "mandarin", "chinese", "zh-cn", "zh_cn"];
  return voices.find((voice) => {
    const haystack = `${voice.name} ${voice.lang}`.toLowerCase();
    return preferred.some((key) => haystack.includes(key));
  }) || voices.find((voice) => /zh|cmn|chinese|mandarin/i.test(`${voice.name} ${voice.lang}`)) || null;
}

function updateVoiceStatus(text, speaking = false) {
  const status = document.getElementById("voiceStatus");
  if (status) status.textContent = text;
  document.querySelectorAll(".guide-copy").forEach((copy) => {
    copy.textContent = speaking ? "星导员小轨正在讲解" : "星导员小轨待命";
  });
  document.body.classList.toggle("voice-speaking", speaking);
}

function duckMusic() {
  if (!musicNodes || !musicNodes.active || !audioContext || musicDucked) return;
  musicNodes.master.gain.setTargetAtTime(0.025, audioContext.currentTime, 0.16);
  musicDucked = true;
}

function restoreMusic() {
  if (!musicNodes || !audioContext || !musicDucked) return;
  musicNodes.master.gain.setTargetAtTime(musicNodes.active ? 0.08 : 0, audioContext.currentTime, 0.22);
  musicDucked = false;
}

function speakText(text) {
  if (!speechSupported()) {
    updateVoiceStatus("当前浏览器不支持语音解说", false);
    return;
  }
  speechSynthesis.cancel();
  selectedSpeechVoice = selectedSpeechVoice || getChineseVoice();
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = "zh-CN";
  currentUtterance.rate = 0.92;
  currentUtterance.pitch = 1.05;
  currentUtterance.volume = 1;
  if (selectedSpeechVoice) currentUtterance.voice = selectedSpeechVoice;
  const utterance = currentUtterance;
  currentUtterance.onstart = () => {
    if (currentUtterance !== utterance) return;
    duckMusic();
    updateVoiceStatus("星导员小轨正在讲解", true);
  };
  currentUtterance.onend = () => {
    if (currentUtterance !== utterance) return;
    restoreMusic();
    updateVoiceStatus("讲解结束，可点击重播", false);
    currentUtterance = null;
  };
  currentUtterance.onerror = () => {
    if (currentUtterance !== utterance) return;
    restoreMusic();
    updateVoiceStatus("语音服务暂不可用，可点击重播", false);
    currentUtterance = null;
  };
  speechPaused = false;
  document.getElementById("voicePause").textContent = "暂停";
  speechSynthesis.speak(currentUtterance);
}

function startVoiceNarration(item, data) {
  currentSpeechText = buildSpeechText(item, data);
  speakText(currentSpeechText);
}

function replayVoice() {
  if (!currentSpeechText) return;
  speakText(currentSpeechText);
}

function toggleVoicePause() {
  if (!speechSupported() || !currentSpeechText) return;
  const btn = document.getElementById("voicePause");
  if (speechSynthesis.paused) {
    speechSynthesis.resume();
    speechPaused = false;
    btn.textContent = "暂停";
    duckMusic();
    updateVoiceStatus("星导员小轨正在讲解", true);
  } else if (speechSynthesis.speaking) {
    speechSynthesis.pause();
    speechPaused = true;
    btn.textContent = "继续";
    restoreMusic();
    updateVoiceStatus("讲解已暂停", false);
  }
}

function stopVoice(clearText = false) {
  if (speechSupported()) speechSynthesis.cancel();
  currentUtterance = null;
  speechPaused = false;
  if (clearText) currentSpeechText = "";
  restoreMusic();
  const pauseBtn = document.getElementById("voicePause");
  if (pauseBtn) pauseBtn.textContent = "暂停";
  updateVoiceStatus(clearText ? "星导员小轨待命" : "准备新的讲解", false);
}

function closeFact() {
  const modal = document.getElementById("factModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  stopVoice(true);
}

function onPick(event) {
  if (pointerDown) {
    const moved = Math.hypot(event.clientX - pointerDown.x, event.clientY - pointerDown.y);
    if (moved > 6) return;
  }
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const pickables = [sunMesh, ...planetMeshes.map((p) => p.mesh)].filter(Boolean);
  const hits = raycaster.intersectObjects(pickables, false);
  if (hits[0]) {
    const index = hits[0].object.userData.index;
    requestTarget(index);
  }
}

function nextPlanet() {
  if (selectedIndex === -2) requestTarget(0);
  else if (selectedIndex < 0) requestTarget(-2);
  else requestTarget((selectedIndex + 1) % planetData.length);
}

function prevPlanet() {
  if (selectedIndex === -2) requestTarget(planetData.length - 1);
  else if (selectedIndex < 0) requestTarget(planetData.length - 1);
  else if (selectedIndex === 0) requestTarget(-2);
  else requestTarget(selectedIndex - 1);
}

function requestTarget(index) {
  if (isScanning) return;
  const target = missionTargets[targetOrderIndex(index)];
  isScanning = true;
  document.body.classList.add("scanning-target");
  const overlay = document.getElementById("scanOverlay");
  const bar = document.getElementById("scanBar");
  const percent = document.getElementById("scanPercent");
  document.getElementById("scanTarget").textContent = target.name;
  bar.style.width = "0%";
  percent.textContent = "0%";
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  const start = performance.now();
  const duration = 760;
  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    const value = Math.round(progress * 100);
    bar.style.width = `${value}%`;
    percent.textContent = `${value}%`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      overlay.classList.remove("active");
      overlay.setAttribute("aria-hidden", "true");
      isScanning = false;
      document.body.classList.remove("scanning-target");
      if (index === -2) focusSun(true);
      else focusPlanet(index, true);
    }
  }
  requestAnimationFrame(tick);
}

function startBriefing() {
  hideIntro(true);
  const overlay = document.getElementById("briefingOverlay");
  const line = document.getElementById("briefingLine");
  const count = document.getElementById("briefingCount");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  const steps = [
    ["MISSION START", "3"],
    ["Calibrating solar navigation...", "2"],
    ["Helmet view calibrated.", "1"],
    ["Launching expedition.", "GO"]
  ];
  let i = 0;
  function next() {
    line.textContent = steps[i][0];
    count.textContent = steps[i][1];
    i += 1;
    if (i < steps.length) {
      briefingTimer = setTimeout(next, 780);
    } else {
      briefingTimer = setTimeout(() => {
        overlay.classList.remove("active");
        overlay.setAttribute("aria-hidden", "true");
        showOverview(false);
      }, 620);
    }
  }
  next();
}

function skipBriefing() {
  if (briefingTimer) clearTimeout(briefingTimer);
  document.getElementById("briefingOverlay").classList.remove("active");
  showOverview(false);
}

createScene();
updatePanels();
const hashName = decodeURIComponent(location.hash.replace("#", ""));
const hashIndex = planetData.findIndex((p) => p.name === hashName || p.tag.toLowerCase() === hashName.toLowerCase());
if (hashName === sunData.name || hashName.toLowerCase() === sunData.tag.toLowerCase()) {
  focusSun(false);
} else if (hashIndex >= 0) {
  document.getElementById("introPanel").classList.add("hidden");
  focusPlanet(hashIndex, false);
}

document.getElementById("startBtn").addEventListener("click", startBriefing);
document.getElementById("skipBriefing").addEventListener("click", skipBriefing);
document.getElementById("overviewBtn").addEventListener("click", showOverview);
document.getElementById("nextRoute").addEventListener("click", nextPlanet);
document.getElementById("nextPlanet").addEventListener("click", nextPlanet);
document.getElementById("prevPlanet").addEventListener("click", prevPlanet);
document.getElementById("closeFact").addEventListener("click", closeFact);
document.getElementById("factModal").addEventListener("click", (e) => { if (e.target.id === "factModal") closeFact(); });
document.getElementById("voiceReplay").addEventListener("click", replayVoice);
document.getElementById("voicePause").addEventListener("click", toggleVoicePause);
document.getElementById("voiceStop").addEventListener("click", () => stopVoice(true));
document.getElementById("musicBtn").addEventListener("click", toggleMusic);
renderer.domElement.addEventListener("pointerdown", (event) => {
  pointerDown = { x: event.clientX, y: event.clientY };
});
renderer.domElement.addEventListener("click", onPick);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeFact();
  if (e.key === "ArrowRight") nextPlanet();
  if (e.key === "ArrowLeft") prevPlanet();
});

if (speechSupported()) {
  speechSynthesis.onvoiceschanged = () => {
    selectedSpeechVoice = getChineseVoice();
  };
}

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  if (sunMesh) {
    sunMesh.rotation.y += 0.0035;
    sunMesh.children.forEach((child, i) => {
      if (child.material) {
        if (i === 1) child.material.opacity = 0.26 + Math.sin(clock.elapsedTime * 0.8) * 0.045;
        if (i === 2) child.material.opacity = 0.12 + Math.sin(clock.elapsedTime * 0.55) * 0.025;
      }
    });
  }
  planetMeshes.forEach((item, index) => {
    if (index !== selectedIndex) item.angle += item.speed * delta;
    item.group.position.set(Math.cos(item.angle) * item.data.distance, 0, Math.sin(item.angle) * item.data.distance);
    item.mesh.rotation.y += 0.004 + index * 0.0005;
    if (item.moonPivot && item.moonMesh) {
      item.moonPivot.rotation.y += item.moonSpeed * delta;
      item.moonMesh.rotation.y += 0.018;
    }
    if (item.clouds) item.clouds.rotation.y += item.data.tag === "Venus" ? 0.0022 : 0.0034;
    if (item.storm) item.storm.rotation.y += 0.004;
    if (item.ringMesh) item.ringMesh.rotation.z += 0.0006;
    if (item.featureRing) item.featureRing.rotation.z += item.data.tag === "Earth" ? 0.0012 : 0.0008;
    if (item.hazeSprite && item.hazeSprite.material) item.hazeSprite.material.opacity = 0.24 + Math.sin(clock.elapsedTime * 0.9 + index) * 0.08;
    if (item.effectGroup) {
      const pulse = 1 + Math.sin(clock.elapsedTime * 0.75 + index) * 0.012;
      item.effectGroup.scale.setScalar(pulse);
    }
    const target = index === selectedIndex ? Math.min(1.35, Math.max(1.08, 1.18 / item.data.size)) : 1;
    item.group.scale.lerp(new THREE.Vector3(target, target, target), 0.08);
  });
  if (isFlying && cameraGoal && targetGoal) {
    camera.position.lerp(cameraGoal, 0.14);
    controls.target.lerp(targetGoal, 0.16);
    if (camera.position.distanceTo(cameraGoal) < 0.06 && controls.target.distanceTo(targetGoal) < 0.06) {
      isFlying = false;
    }
  }
  controls.update();
  renderer.render(scene, camera);
}
animate();

function hideIntro(playMusic = false) {
  document.body.classList.add("exploring");
  const panel = document.getElementById("introPanel");
  panel.classList.add("hidden");
  panel.style.display = "none";
  if (playMusic && !musicNodes) startAmbientMusic();
}

function startAmbientMusic() {
  if (musicNodes) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume();
  const master = audioContext.createGain();
  master.gain.value = 0.08;
  master.connect(audioContext.destination);

  const lowFilter = audioContext.createBiquadFilter();
  lowFilter.type = "lowpass";
  lowFilter.frequency.value = 1400;
  lowFilter.Q.value = 0.5;
  lowFilter.connect(master);

  const delay = audioContext.createDelay();
  delay.delayTime.value = 0.38;
  const delayGain = audioContext.createGain();
  delayGain.gain.value = 0.18;
  delay.connect(delayGain).connect(lowFilter);

  function playTone(freq, start, duration, type, gainValue, destination = lowFilter) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(destination);
    gain.connect(delay);
    osc.start(start);
    osc.stop(start + duration + 0.08);
  }

  function scheduleBar(offset) {
    const root = 146.83; // D3
    const melody = [293.66, 349.23, 440.0, 392.0, 349.23, 293.66, 246.94, 293.66];
    const bass = [root, 110.0, 130.81, 98.0];
    const now = audioContext.currentTime + offset;
    bass.forEach((note, i) => playTone(note, now + i * 2, 1.85, "sine", 0.08));
    melody.forEach((note, i) => playTone(note, now + i * 1, 0.82, i % 3 === 0 ? "triangle" : "sine", 0.055));
    [293.66, 440.0, 587.33].forEach((note) => playTone(note, now, 7.7, "sine", 0.018));
    [246.94, 369.99, 493.88].forEach((note) => playTone(note, now + 4, 3.7, "sine", 0.014));
  }

  scheduleBar(0.05);
  scheduleBar(8.05);
  let nextOffset = 16.05;
  const musicTimer = setInterval(() => {
    if (!musicNodes || !musicNodes.active) return;
    scheduleBar(0.05);
    scheduleBar(8.05);
    nextOffset += 16;
  }, 16000);

  musicNodes = { master, timers: [musicTimer], active: true };
  updateMusicButton();
}

function toggleMusic() {
  if (!musicNodes) {
    startAmbientMusic();
    return;
  }
  musicNodes.active = !musicNodes.active;
  musicNodes.master.gain.setTargetAtTime(musicNodes.active ? 0.08 : 0, audioContext.currentTime, 0.18);
  updateMusicButton();
}

function updateMusicButton() {
  const btn = document.getElementById("musicBtn");
  const on = Boolean(musicNodes && musicNodes.active);
  btn.textContent = `背景音乐 ${on ? "开" : "关"}`;
  btn.setAttribute("aria-pressed", String(on));
}
