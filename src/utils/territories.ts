export type TerritoriesType = keyof typeof territories | 'general'
export enum RegionType {
    HdF = 'hauts-de-france',
} 

export const isCorrectTerritory = (territory: string): territory is TerritoriesType => {
    return territory === 'general' || Object.keys(territories).includes(territory);
}

export const isCorrectRegion = (region: string): region is RegionType => {
    return Object.values(RegionType).includes(region as RegionType);
}

export const isTerritoryFromRegion = (territory: string, region: string) => {
    if (region === 'hauts-de-france' && Object.keys(territories).includes(territory)) {
        return true
    }
    return false
}

export const territories = {
    'arras-pays-d-artois': 1,
    'artois-lys': 2,
    audomarois: 3,
    'aumale-blangy': 4, 
    'avesnois-thierache': 5,
    'baie-de-somme': 6,
    boulonnais: 7,
    calaisis: 8,
    cambresis: 9,
    chaunois: 10,
    'coeur-des-hauts-de-france': 11,
    'compiègne-pierrefonds': 12,
    'cote-d-opale': 13,
    'creil-halatte': 14,
    dunkerquois: 15,
    'flandre-rurale': 16,
    'grand-Amiénois': 17,
    'grand-Beauvaisis': 18,
    'grand-Laonnois': 19,
    hainaut: 20,
    'lens-hénin': 21,
    liancourtois: 22,
    'métropole-européenne-de-lille': 23,
    'noyonnais-deux-vallées': 24,
    'pays-de-valois': 25,
    'pévélois-douaisis': 26,
    'plateau-picard': 27,
    'portes-de-la-champagne': 28, 
    'saint-quentinois': 29,
    'senlis-chantilly': 30,
    'soissonnais-valois': 31,
    'vexin-sablons': 32,
    'villes-soeurs': 33
}