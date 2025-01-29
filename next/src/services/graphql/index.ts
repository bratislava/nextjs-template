import { GraphQLClient } from 'graphql-request'

import { environment } from '@/src/environment'
import { getSdk } from '@/src/services/graphql/api'

const index = new GraphQLClient(`${environment.strapiUrl}/graphql`)

export const client = getSdk(index)
