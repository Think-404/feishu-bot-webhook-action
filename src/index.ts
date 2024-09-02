import { PostGithubEvent } from './github2feishu'
import * as core from '@actions/core'

core.info('PostGithubEvent')
// eslint-disable-next-line @typescript-eslint/no-floating-promises
PostGithubEvent()
