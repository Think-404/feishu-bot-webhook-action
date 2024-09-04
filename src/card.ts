import { Repository } from './trend'

type NotificationCard = {
  repo: string
  eventType: string
  themeColor: string
  auser: string
  avatar: string
  status: string
  etitle: string
  detailurl: string
}

type TrendingCard = {
  object_list_1: Repository[]
}

type CardData = {
  template_id: string
  template_version_name: string
  template_variable: NotificationCard | TrendingCard
}

type CardType = {
  type: string
  data: CardData
}

type CardMessage = {
  timestamp: string
  sign: string
  msg_type: string
  card: CardType
}

export function BuildGithubNotificationCard(
  tm: number,
  sign: string,
  repo: string,
  title: string,
  eventType: string,
  body: string,
  color: string,
  user: string,
  status: string,
  etitle: string,
  detailurl: string
): string {
  const ncard: CardMessage = {
    timestamp: `${tm}`,
    sign,
    msg_type: 'interactive',
    card: {
      type: 'template',
      data: {
        template_id: 'AAqCh5gkkzgrG',
        template_version_name: '1.0.3',
        template_variable: {
          repo,
          eventType,
          themeColor: title,
          auser: user,
          avatar: body,
          status,
          etitle,
          detailurl
        }
      }
    }
  }
  return JSON.stringify(ncard)
}

export function BuildGithubTrendingCard(
  tm: number,
  sign: string,
  repos: Repository[]
): string {
  const tcard: CardMessage = {
    timestamp: `${tm}`,
    sign,
    msg_type: 'interactive',
    card: {
      type: 'template',
      data: {
        template_id: 'AAqkpVra76ijV',
        template_version_name: '1.0.0',
        template_variable: {
          object_list_1: repos
        }
      }
    }
  }
  return JSON.stringify(tcard)
}
