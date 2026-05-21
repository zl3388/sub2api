import type { Locale } from '@/i18n/locales'

export const messages = {
  zh: {
    controls: {
      theme: '主题',
      light: '明亮模式',
      dark: '暗色模式',
      language: '语言',
      localeName: '简体中文',
      login: '登录',
      cta: '立即接入',
      menu: '切换导航菜单',
      primaryNav: '主导航',
      preferences: '偏好设置',
      modalClose: '关闭弹窗',
    },
    calculator: {
      chooseModel: '选择模型',
      modelTabs: '价格模型',
      inputTokens: '输入 Token 额度',
      outputTokens: '输出 Token 额度',
      millionTokens: '百万 Tokens',
      costCompare: '费用对比',
      officialCost: '官方 API 理论开销',
      platformCost: '51Token 服务开销',
      savings: '预计节省',
      savePrefix: '省 ',
    },
    codeDemo: {
      demo: 'API 调用示例',
      tabs: '代码示例',
      latency: '延迟',
      billing: '计费',
    },
    intro: {
      choosing: '正在选择合适语言...',
      fallback: '如果页面没有自动跳转，请选择语言。',
    },
  },
  en: {
    controls: {
      theme: 'Theme',
      light: 'Light mode',
      dark: 'Dark mode',
      language: 'Language',
      localeName: 'English',
      login: 'Log in',
      cta: 'Start now',
      menu: 'Toggle navigation menu',
      primaryNav: 'Primary navigation',
      preferences: 'Preferences',
      modalClose: 'Close modal',
    },
    calculator: {
      chooseModel: 'Choose model',
      modelTabs: 'Pricing model',
      inputTokens: 'Input token volume',
      outputTokens: 'Output token volume',
      millionTokens: 'million tokens',
      costCompare: 'Cost comparison',
      officialCost: 'Official API estimate',
      platformCost: '51Token service cost',
      savings: 'Estimated savings',
      savePrefix: 'Save ',
    },
    codeDemo: {
      demo: 'API call example',
      tabs: 'Code examples',
      latency: 'Latency',
      billing: 'Billing',
    },
    intro: {
      choosing: 'Choosing the best language...',
      fallback: 'If the page does not redirect automatically, choose a language.',
    },
  },
} satisfies Record<Locale, Record<string, Record<string, string>>>

export type Messages = (typeof messages)[Locale]
