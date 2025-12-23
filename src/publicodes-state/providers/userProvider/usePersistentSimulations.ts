import { generateSimulation } from '@/helpers/simulation/generateSimulation'
import { getIsLocalStorageAvailable } from '@/utils/getIsLocalStorageAvailable'
import { Migration } from '@publicodes/tools/migration'
import { useContext, useEffect, useState } from 'react'
import { Simulation } from '../../types'
import { isCorrectTerritory, territories } from '@/utils/territories'
import { Situation } from '@/publicodes-state/types'
import UserContext from '@/publicodes-state/providers/userProvider/context';

const isLocalStorageAvailable = getIsLocalStorageAvailable()

type Props = {
  storageKey: string
  migrationInstructions: Migration
}
export default function usePersistentSimulations({
  storageKey,
  migrationInstructions,
}: Props) {
  const [initialized, setInitialized] = useState<boolean>(false)
  const [simulations, setSimulations] = useState<Simulation[]>([])
  const [currentSimulationId, setCurrentSimulationId] = useState<string>('')
  const { territory } = useContext(UserContext)

  useEffect(() => {
    let localSimulations: Simulation[] | undefined
    let localCurrentSimulationId: string | undefined
    if (isLocalStorageAvailable) {
      const currentStorage = localStorage.getItem(storageKey)
      const parsedStorage = JSON.parse(currentStorage || '{}')

      localSimulations = parsedStorage.simulations
      localCurrentSimulationId = parsedStorage.currentSimulationId
    }

    if (localSimulations && localCurrentSimulationId) {
      const migratedLocalSimulations = localSimulations.map((simulation) => {
        return generateSimulation({
          ...simulation,
          migrationInstructions,
        })
      })
 
      setSimulations(migratedLocalSimulations)
      setCurrentSimulationId(localCurrentSimulationId)
    } else {
      let initialSituation: Situation = {} as Situation;

      if (territory &&  isCorrectTerritory(territory) && territory !== 'default') {
        initialSituation = { 'transport . localisation séjour': territories[territory] }
      }

      const newSimulation = generateSimulation({ situation: initialSituation })

      setSimulations([newSimulation])
      setCurrentSimulationId(newSimulation.id)
    }

    setInitialized(true)
  }, [migrationInstructions, storageKey, territory])

  useEffect(() => {
    if (initialized) {
      const currentStorage = JSON.parse(
        localStorage.getItem(storageKey) || '{}'
      )
      const updatedStorage = { ...currentStorage, simulations }
      localStorage.setItem(storageKey, JSON.stringify(updatedStorage))
    }
  }, [storageKey, simulations, initialized])

  useEffect(() => {
    if (initialized) {
      const currentStorage = JSON.parse(
        localStorage.getItem(storageKey) || '{}'
      )
      const updatedStorage = { ...currentStorage, currentSimulationId }
      localStorage.setItem(storageKey, JSON.stringify(updatedStorage))
    }
  }, [storageKey, currentSimulationId, initialized])

  return {
    simulations,
    setSimulations,
    currentSimulationId,
    setCurrentSimulationId,
  }
}
