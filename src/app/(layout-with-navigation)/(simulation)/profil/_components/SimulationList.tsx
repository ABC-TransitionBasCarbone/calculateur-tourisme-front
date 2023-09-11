import TransClient from '@/components/translation/TransClient'
import Button from '@/design-system/inputs/Button'
import { useUser } from '@/publicodes-state'
import { Simulation } from '@/publicodes-state/types'
import { Trans } from 'react-i18next'

export default function SimulationList() {
  const {
    simulations,
    currentSimulationId,
    setCurrentSimulationId,
    deleteSimulation,
  } = useUser()

  console.log('TODO : implement action and persona logic here')

  return (
    <div className="mt-8">
      <h2 className="text-lg">
        <span
          role="img"
          aria-label="emoji save"
          aria-hidden
          className="mr-4 inline-block">
          💾
        </span>
        <TransClient>Mon historique des simulations</TransClient>
      </h2>
      <p>
        <TransClient i18nKey={'publicodes.Profil.simulations'}>
          Chaque simulation que vous faite est sauvegardée dans votre navigateur
          Web. Vous êtes le seul à y avoir accès.
        </TransClient>
      </p>
      <ul>
        {simulations.map((simulation: Simulation) => {
          const simulationDate =
            simulation.date !== undefined
              ? new Date(simulation.date)
              : new Date()

          return (
            <li key={simulation.id} className="list-none">
              <details>
                <summary>
                  <div className="inline-flex">
                    <span>{simulationDate.toLocaleDateString()}</span>
                    <span className="ml-1 hidden w-[8rem] overflow-hidden overflow-ellipsis whitespace-nowrap md:inline-block">
                      - {simulation.id}
                    </span>
                    {currentSimulationId === simulation.id ? (
                      <span className="mx-2">
                        ✅ <Trans>Chargée</Trans>
                      </span>
                    ) : (
                      <span>
                        <Button
                          className="mx-2"
                          size="sm"
                          onClick={() => {
                            /*
                          // TODO : implement action logic here
                          dispatch(setCurrentSimulation(simulation))
                          dispatch(setActionsChoices(simulation.actionChoices))
                          dispatch(
                            setAllStoredTrajets(simulation.storedTrajets)
                          )
                          */
                            setCurrentSimulationId(simulation.id)
                          }}>
                          <TransClient>Charger</TransClient>
                        </Button>
                        <Button
                          className="mx-2"
                          size="sm"
                          onClick={() => {
                            deleteSimulation(simulation.id)
                          }}>
                          <TransClient>Supprimer</TransClient>
                        </Button>
                      </span>
                    )}
                  </div>
                </summary>
                <ul>
                  <li>
                    <TransClient>Date complète :</TransClient>
                    {simulationDate.toLocaleDateString()}{' '}
                    {simulationDate.toLocaleTimeString()}.
                  </li>
                  <li>
                    <TransClient>Identifiant :</TransClient> {simulation.id}.
                  </li>
                </ul>
              </details>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
