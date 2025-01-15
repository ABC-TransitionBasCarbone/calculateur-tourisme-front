import { Simulation } from '@/publicodes-state/types'

export type Participant = {
  _id: string
  name: string
  email?: string
  simulation: Simulation
  userId: string
}

export type Group = {
  _id: string
  name: string
  emoji: string
  participants: Participant[]
  administrator: {
    _id: string
    name: string
    email?: string
    userId: string
  }
}
