export interface Group {
    groupId: number;
    groupName: string;
    accounts?: Account[];
    dailyReport?: GroupDailyReport[];
}

export interface Account {
    accountId: number;
    nickName: string;
    qqId: number;
    lastUpdatedTime: number;
    accessToken: string;
    accessTokenExpireTime: number;
    groups?: Group[];
    ships?: Ship[];
    battles?: Battle[];
}

export interface Ship {
    shipId: number;
    lastUpdateTime: number;
    shipName: string;
    shipType: ShipTypeEnum;
    tier: number;
    averageDamage: number;
    averageWinRate: number;
    averageFrags: number;
    accounts?: Account[];
    battles?: Battle[];
}

export enum ShipTypeEnum {
    Destroyer = 'Destroyer',
    Cruiser = 'Cruiser',
    Battleship = 'Battleship',
    AirCarrier = 'AirCarrier',
    Submarine = 'Submarine',
}

export enum BattleTypeEnum {
    PVP_SOLO = 'pvp_solo',
    PVP_DIV2 = 'pvp_div2',
    PVP_DIV3 = 'pvp_div3',
}

export type CalculatedBattle = Omit<
    Battle,
    'battleId' | 'account' | 'ship' | 'battleTime' | 'battleType'
>;

export interface Battle {
    battleId: number;
    account: Account;
    ship: Ship;
    battleTime: number;
    battleType: BattleTypeEnum;
    numberOfBattles: number;
    wins: number;
    damageDealt: number;
    damageScouting: number;
    damagePotential: number;
    capturePoints: number;
    capturePointsDropped: number;
    fragsTotal: number;
    planesKilled: number;
    survives: number;
    xp: number;
    fragsByMain: number;
    hitsByMain: number;
    shotsByMain: number;
    fragsBySecondary: number;
    hitsBySecondary: number;
    shotsBySecondary: number;
    fragsByTorpedoes: number;
    hitsByTorpedoes: number;
    shotsByTorpedoes: number;
    fragsByRamming: number;
    fragsByAircraft: number;
    actorOfTheDay?: GroupDailyReport;
    prisonerOfWarOfTheDay?: GroupDailyReport;
    scoutBoyOfTheDay?: GroupDailyReport;
    damageBoyOfTheDay?: GroupDailyReport;
    antiAirBoyOfTheDay?: GroupDailyReport;
    fragBoyOfTheDay?: GroupDailyReport;
}

export interface GroupDailyReport {
    reportId: number;
    reportTime: number;
    group?: Group;
    actorOfTheDay?: Battle;
    prisonerOfWarOfTheDay?: Battle;
    scoutBoyOfTheDay?: Battle;
    damageBoyOfTheDay?: Battle;
    antiAirBoyOfTheDay?: Battle;
    fragBoyOfTheDay?: Battle;
}
