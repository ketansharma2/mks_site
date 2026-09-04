export interface ZLDInput {
    wastewaterFlow: number;
    roRecovery: number;
    meeRecovery: number;
    atfdRecovery: number;
  }
  
  export interface ZLDResult {
    roPermeate: number;
    roReject: number;
    meeDistillate: number;
    meeConcentrate: number;
    atfdRecovery: number;
    finalReject: number;
    overallRecovery: number;
  }
  
  export function calculateZLD(input: ZLDInput): ZLDResult {
    const {
      wastewaterFlow,
      roRecovery,
      meeRecovery,
      atfdRecovery,
    } = input;
  
    const roPermeate =
      wastewaterFlow * (roRecovery / 100);
  
    const roReject =
      wastewaterFlow - roPermeate;
  
    const meeDistillate =
      roReject * (meeRecovery / 100);
  
    const meeConcentrate =
      roReject - meeDistillate;
  
    const atfdRecoveryVolume =
      meeConcentrate * (atfdRecovery / 100);
  
    const finalReject =
      meeConcentrate - atfdRecoveryVolume;
  
    const totalRecovered =
      roPermeate +
      meeDistillate +
      atfdRecoveryVolume;
  
    const overallRecovery =
      wastewaterFlow > 0
        ? (totalRecovered / wastewaterFlow) * 100
        : 0;
  
    return {
      roPermeate,
      roReject,
      meeDistillate,
      meeConcentrate,
      atfdRecovery: atfdRecoveryVolume,
      finalReject,
      overallRecovery,
    };
  }