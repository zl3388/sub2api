import type { Locale } from '@/i18n/locales'
import type { SiteContent } from '@/types/site'

const sharedSite = {
  name: '51Token',
  domainSuffix: '.online',
  logoSrc: '/51token-logo-svg.svg',
  repositoryUrl: 'https://github.com/Wei-Shaw/sub2api',
  loginPath: '/login',
}

export const siteContent = {
  zh: {
    site: {
      ...sharedSite,
      description: '面向开发者与中小团队的高可用 AI API 代理分发平台，提供透明计费、稳定 failover 与主流模型接入。',
    },
    nav: [
      { label: '核心优势', href: '#trust' },
      { label: '支持模型', href: '#models' },
      { label: '成本测算', href: '#calculator' },
      { label: '技术支持', href: '#support' },
    ],
    hero: {
      eyebrow: '由开发者构建，面向真实业务高并发场景',
      title: '懂开发者，也懂',
      highlightedTitle: '性价比',
      suffixTitle: '的 AI 加速入口',
      description: '51Token 起源于真实开发团队自用的 Token 管理需求。我们自己也在持续使用，所以更在意长期稳定、透明计费和异常时的可靠切换。',
      originProof: '自用驱动 · 持续维护 · 不做一次性项目',
      actions: [
        { label: '开始免费体验', href: '/login', targetTop: true },
        { label: '查看开源项目', href: 'https://github.com/Wei-Shaw/sub2api', external: true },
      ],
      proofs: ['模型不偷换', 'Token 级计费', '秒级 failover'],
    },
    codeSamples: [
      {
        id: 'curl',
        label: 'curl_api.sh',
        language: 'shell',
        code: `curl https://api.51token.online/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer 51tk-sk_xxxx" \\
  -d '{
    "model": "claude-sonnet-4-6",
    "messages": [{"role":"user","content":"你好"}],
    "stream": true
  }'`,
        response: '正在通过 51Token 安全通道连接 Claude Sonnet。请求已进入高可用池，响应保持原始透传，账单按 token 精确记录。',
        latency: '110ms',
        cost: '$0.000021',
      },
      {
        id: 'typescript',
        label: 'openai_sdk.ts',
        language: 'typescript',
        code: `import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: "https://api.51token.online/v1",
  apiKey: "51tk-sk_xxxx",
})

const stream = await openai.chat.completions.create({
  model: "gpt-5.5",
  messages: [{ role: "user", content: "你好" }],
  stream: true,
})`,
        response: 'GPT 专线已启用。51Token 不替换低价模型，不缓存会话内容，只做稳定转发与透明计费。',
        latency: '125ms',
        cost: '$0.000013',
      },
      {
        id: 'python',
        label: 'openai_sdk.py',
        language: 'python',
        code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.51token.online/v1",
    api_key="51tk-sk_xxxx",
)

completion = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[{"role":"user", "content":"你好"}],
    stream=True,
)`,
        response: 'DeepSeek R1 推理链路已就绪。低成本路由、秒级 failover 与请求级追踪同步生效。',
        latency: '75ms',
        cost: '$0.0000012',
      },
    ],
    modelsHeading: {
      kicker: 'MODEL ROUTING',
      title: '主流模型统一接入，一个 OpenAI SDK 即可迁移',
      segments: [
        { text: '主流模型' },
        { text: '统一接入', accent: true },
        { text: '，一个 OpenAI SDK 即可迁移' },
      ],
    },
    models: [
      { icon: 'C', name: 'Claude Sonnet / Opus', price: '官方 $3/$15，51Token $2.4/$12 / 百万 tokens', latency: '110ms' },
      { icon: 'G', name: 'GPT / Codex 系列', price: '官方 $2.5/$10，51Token $0.75/$3 / 百万 tokens', latency: '125ms' },
      { icon: 'D', name: 'DeepSeek R1 / V3', price: '官方 $0.55/$2.19，51Token $0.08/$0.33 / 百万 tokens', latency: '75ms' },
    ],
    trustHeading: {
      kicker: 'FOUR PROMISES',
      title: '我们为开发者守住四条底线',
      segments: [
        { text: '我们为开发者守住' },
        { text: '四条底线', accent: true },
      ],
    },
    trustCards: [
      { title: '诚实可靠', body: '标注什么模型，就调用什么模型；不做低价高价模型替换。' },
      { title: '清晰透明', body: 'Token 级计量、余额和用量实时可查，避免账单黑箱。' },
      { title: '隐私安全', body: '请求与响应仅用于转发，不做本地二次缓存和训练。' },
      { title: '稳定冗余', body: '上游多账户池调度，异常时自动切换健康线路。' },
    ],
    slogan: {
      title: '风险归平台，体验归开发者',
      titleSegments: [
        { text: '风险归平台，' },
        { text: '体验归开发者', accent: true },
      ],
      body: '把上游限速、账号熔断、并发调度与备用池切换交给 51Token。你的代码只需要面向标准 API 编写，业务继续向前。',
      metrics: [
        { value: '99.9', unit: '%', label: 'SLA 目标' },
        { value: '1', unit: 's', label: '故障切换' },
        { value: '7x24', unit: 'h', label: '调度守护' },
      ],
    },
    calculatorHeading: {
      kicker: 'COST SIMULATOR',
      title: '估算你的开发支出能省多少',
      segments: [
        { text: '估算你的' },
        { text: '开发支出', accent: true },
        { text: '能省多少' },
      ],
    },
    pricingModels: [
      { id: 'claude', label: 'Claude Sonnet', description: 'Kiro 企业专线折率：输入 $2.40 / 输出 $12.00 / 百万 tokens', officialInput: 3, officialOutput: 15, platformInput: 2.4, platformOutput: 12 },
      { id: 'gpt', label: 'GPT Codex', description: 'Codex Team 专线折率：输入 $0.75 / 输出 $3.00 / 百万 tokens', officialInput: 2.5, officialOutput: 10, platformInput: 0.75, platformOutput: 3 },
      { id: 'deepseek', label: 'DeepSeek R1', description: '高性价比专线：输入 $0.08 / 输出 $0.33 / 百万 tokens', officialInput: 0.55, officialOutput: 2.19, platformInput: 0.08, platformOutput: 0.33 },
    ],
    supportHeading: {
      kicker: 'SUPPORT',
      title: '售后、技术交流与开源反馈通道',
      segments: [
        { text: '售后、技术交流与' },
        { text: '开源反馈', accent: true },
        { text: '通道' },
      ],
    },
    supportCards: [
      { title: '官方交流支持', body: '提供微信客服和 QQ 群渠道，适合接入咨询、充值疑问、模型路由异常排查。', action: { label: '登录后查看客服入口', href: '/login', targetTop: true } },
      { title: '拥抱开源生态', body: '底层基于成熟开源分发架构深度定制。欢迎在 GitHub 查看部署逻辑、提交建议和 Issue。', action: { label: '访问 GitHub 仓库', href: 'https://github.com/Wei-Shaw/sub2api', external: true } },
    ],
    legalModals: [
      {
        id: 'tos',
        triggerLabel: '服务协议',
        title: '服务使用协议',
        sections: [
          { heading: '服务范围', body: '51Token 提供 AI API 中转、负载分发、账户池 failover 与用量统计服务，帮助开发者以更稳定的方式接入主流模型。' },
          { heading: '使用规范', body: '用户应妥善保管 API Key，不得利用本服务传输违法、攻击性或侵犯第三方权益的内容。平台可对异常流量采取限流或熔断措施。' },
          { heading: '计费说明', body: '服务按模型与 token 用量透明计费。充值、余额、订阅和消费记录均应以控制台展示为准。' },
        ],
      },
      {
        id: 'privacy',
        triggerLabel: '隐私承诺',
        title: '隐私安全承诺',
        sections: [
          { heading: '不落盘', body: '51Token 仅作为传输管道处理请求和响应，不主动存储、训练、转售或二次分析用户的对话内容。' },
          { heading: '加密传输', body: '链路默认采用 HTTPS 加密传输，并通过最小化日志策略降低敏感内容暴露面。' },
          { heading: '数据归属', body: '用户通过服务发送与接收的数据，其知识产权和业务权益仍归用户所有。' },
        ],
      },
      {
        id: 'sla',
        triggerLabel: 'SLA 条款',
        title: '高可用保障条款',
        sections: [
          { heading: '可用性目标', body: '平台以 99.9% 服务可用性为运行目标，持续监控上游账户池、网络延迟与错误率。' },
          { heading: '秒级切换', body: '当上游异常、限速或不可用时，调度层会优先切换到健康账户与备用线路，尽量减少业务感知。' },
          { heading: '故障补偿', body: '如因平台侧持续故障造成服务不可用，可按后台公告或客服确认的规则进行补偿。' },
        ],
      },
    ],
  },
  en: {
    site: {
      ...sharedSite,
      description: 'A highly available AI API gateway for developers and small teams, with transparent billing, resilient failover, and access to mainstream models.',
    },
    nav: [
      { label: 'Advantages', href: '#trust' },
      { label: 'Models', href: '#models' },
      { label: 'Cost', href: '#calculator' },
      { label: 'Support', href: '#support' },
    ],
    hero: {
      eyebrow: 'Built by developers for real production traffic',
      title: 'Built for developers, ',
      highlightedTitle: 'priced for teams',
      suffixTitle: ' AI gateway',
      description: '51Token started as an internal token-management need from a real development team. We use it every day, so long-term stability, transparent billing, and reliable failover matter to us.',
      originProof: 'Self-used · Continuously maintained · Not a one-off project',
      actions: [
        { label: 'Try for free', href: '/login', targetTop: true },
        { label: 'View open source', href: 'https://github.com/Wei-Shaw/sub2api', external: true },
      ],
      proofs: ['No model swap', 'Token-level billing', 'Second-level failover'],
    },
    codeSamples: [
      {
        id: 'curl',
        label: 'curl_api.sh',
        language: 'shell',
        code: `curl https://api.51token.online/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer 51tk-sk_xxxx" \\
  -d '{
    "model": "claude-sonnet-4-6",
    "messages": [{"role":"user","content":"Hello"}],
    "stream": true
  }'`,
        response: 'Connecting to Claude Sonnet through the 51Token secure channel. The request is routed into the high-availability pool, the response is passed through unchanged, and usage is recorded precisely by token.',
        latency: '110ms',
        cost: '$0.000021',
      },
      {
        id: 'typescript',
        label: 'openai_sdk.ts',
        language: 'typescript',
        code: `import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: "https://api.51token.online/v1",
  apiKey: "51tk-sk_xxxx",
})

const stream = await openai.chat.completions.create({
  model: "gpt-5.5",
  messages: [{ role: "user", content: "Hello" }],
  stream: true,
})`,
        response: 'The GPT dedicated route is active. 51Token does not substitute cheaper models or cache conversations; it only provides stable forwarding and transparent billing.',
        latency: '125ms',
        cost: '$0.000013',
      },
      {
        id: 'python',
        label: 'openai_sdk.py',
        language: 'python',
        code: `from openai import OpenAI

client = OpenAI(
    base_url="https://api.51token.online/v1",
    api_key="51tk-sk_xxxx",
)

completion = client.chat.completions.create(
    model="deepseek-reasoner",
    messages=[{"role":"user", "content":"Hello"}],
    stream=True,
)`,
        response: 'The DeepSeek R1 reasoning route is ready. Low-cost routing, second-level failover, and request-level tracing are active.',
        latency: '75ms',
        cost: '$0.0000012',
      },
    ],
    modelsHeading: {
      kicker: 'MODEL ROUTING',
      title: 'Unified access to mainstream models with one OpenAI SDK',
      segments: [
        { text: 'Unified access' },
        { text: ' to mainstream models', accent: true },
        { text: ' with one OpenAI SDK' },
      ],
    },
    models: [
      { icon: 'C', name: 'Claude Sonnet / Opus', price: 'Official $3/$15, 51Token $2.4/$12 / million tokens', latency: '110ms' },
      { icon: 'G', name: 'GPT / Codex Series', price: 'Official $2.5/$10, 51Token $0.75/$3 / million tokens', latency: '125ms' },
      { icon: 'D', name: 'DeepSeek R1 / V3', price: 'Official $0.55/$2.19, 51Token $0.08/$0.33 / million tokens', latency: '75ms' },
    ],
    trustHeading: {
      kicker: 'FOUR PROMISES',
      title: 'Four promises we keep for developers',
      segments: [
        { text: 'Four promises' },
        { text: ' for developers', accent: true },
      ],
    },
    trustCards: [
      { title: 'Honest routing', body: 'The model you request is the model we call. We do not silently replace expensive models with cheaper ones.' },
      { title: 'Clear billing', body: 'Token-level metering, balance, and usage are visible in real time, avoiding opaque bills.' },
      { title: 'Privacy first', body: 'Requests and responses are used only for forwarding, with no local secondary caching or training.' },
      { title: 'Resilient fallback', body: 'Multiple upstream account pools are scheduled automatically, switching to healthy routes when exceptions occur.' },
    ],
    slogan: {
      title: 'Platform takes the risk, developers keep the experience',
      titleSegments: [
        { text: 'Platform takes the risk, ' },
        { text: 'developers keep the experience', accent: true },
      ],
      body: '51Token handles upstream rate limits, account failover, concurrency scheduling, and backup pools. Your code keeps targeting a standard API while production traffic keeps moving.',
      metrics: [
        { value: '99.9', unit: '%', label: 'SLA target' },
        { value: '1', unit: 's', label: 'failover' },
        { value: '7x24', unit: 'h', label: 'routing guard' },
      ],
    },
    calculatorHeading: {
      kicker: 'COST SIMULATOR',
      title: 'Estimate how much development spend you can save',
      segments: [
        { text: 'Estimate ' },
        { text: 'development spend', accent: true },
        { text: ' savings' },
      ],
    },
    pricingModels: [
      { id: 'claude', label: 'Claude Sonnet', description: 'Kiro business route: input $2.40 / output $12.00 / million tokens', officialInput: 3, officialOutput: 15, platformInput: 2.4, platformOutput: 12 },
      { id: 'gpt', label: 'GPT Codex', description: 'Codex Team route: input $0.75 / output $3.00 / million tokens', officialInput: 2.5, officialOutput: 10, platformInput: 0.75, platformOutput: 3 },
      { id: 'deepseek', label: 'DeepSeek R1', description: 'Cost-efficient route: input $0.08 / output $0.33 / million tokens', officialInput: 0.55, officialOutput: 2.19, platformInput: 0.08, platformOutput: 0.33 },
    ],
    supportHeading: {
      kicker: 'SUPPORT',
      title: 'Support, technical discussion, and open-source feedback',
      segments: [
        { text: 'Support, technical discussion, and ' },
        { text: 'open-source feedback', accent: true },
      ],
    },
    supportCards: [
      { title: 'Official support channels', body: 'We provide WeChat support and QQ group channels for integration questions, recharge issues, and model-routing troubleshooting.', action: { label: 'Log in to view support entry', href: '/login', targetTop: true } },
      { title: 'Open-source ecosystem', body: 'The service is deeply customized on top of a mature open-source distribution architecture. Visit GitHub to review deployment logic, submit suggestions, or file issues.', action: { label: 'Visit GitHub repository', href: 'https://github.com/Wei-Shaw/sub2api', external: true } },
    ],
    legalModals: [
      {
        id: 'tos',
        triggerLabel: 'Terms',
        title: 'Terms of Service',
        sections: [
          { heading: 'Service scope', body: '51Token provides AI API proxying, load distribution, account-pool failover, and usage statistics to help developers access mainstream models more reliably.' },
          { heading: 'Acceptable use', body: 'Users must protect their API keys and must not use the service to transmit illegal, abusive, or third-party-infringing content. The platform may rate-limit or circuit-break abnormal traffic.' },
          { heading: 'Billing', body: 'The service is billed transparently by model and token usage. Recharge, balance, subscription, and consumption records should follow the console display.' },
        ],
      },
      {
        id: 'privacy',
        triggerLabel: 'Privacy',
        title: 'Privacy and Security Commitment',
        sections: [
          { heading: 'No content persistence', body: '51Token acts only as a transport channel for requests and responses. It does not actively store, train on, resell, or secondarily analyze user conversation content.' },
          { heading: 'Encrypted transport', body: 'Traffic uses HTTPS encryption by default, and minimized logging reduces the exposure of sensitive content.' },
          { heading: 'Data ownership', body: 'Data sent and received through the service, including intellectual property and business rights, remains owned by the user.' },
        ],
      },
      {
        id: 'sla',
        triggerLabel: 'SLA',
        title: 'High Availability SLA',
        sections: [
          { heading: 'Availability target', body: 'The platform operates with a 99.9% service availability target and continuously monitors upstream account pools, network latency, and error rates.' },
          { heading: 'Second-level failover', body: 'When upstream providers are abnormal, rate-limited, or unavailable, the scheduler prioritizes healthy accounts and backup routes to reduce business impact.' },
          { heading: 'Incident compensation', body: 'If a sustained platform-side failure causes service unavailability, compensation may follow the rules confirmed in dashboard announcements or by support.' },
        ],
      },
    ],
  },
} satisfies Record<Locale, SiteContent>
