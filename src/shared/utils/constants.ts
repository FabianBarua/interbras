export const isApple: () => boolean = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod') || ua.includes('mac')
}

export const ScooterAndroidUrl = 'https://html5.zhouchangshu.com/apk/huihao.apk'
export const ScooterIosUrl = 'https://apps.apple.com/es/app/id1509887773'
