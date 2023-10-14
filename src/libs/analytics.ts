import { logEvent } from 'firebase/analytics'

import { analytics as firebaseAnalytics } from '@/libs/firebase'
import { Blog } from '@/entitie/blog'

type Event = {
  view_top: undefined
  view_profile: undefined
  view_blog: undefined
  read_blog: undefined
  read_blog_article: { title: string }
  tap_move_profile: undefined
  tap_move_blog: undefined
}

/**
 * analiticsにイベントログを送信します
 * @param eventName
 * @param params
 */
export const sendLogEvent = async <T extends keyof Event>(
  eventName: T,
  params: Event[T],
) => {
  const analytics = await firebaseAnalytics
  if (analytics) {
    logEvent<string>(analytics, eventName, params)
  }
}
