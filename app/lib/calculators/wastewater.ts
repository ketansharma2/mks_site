export interface WastewaterInput {
    wastewaterFlow: number;
    bod: number;
    cod: number;
    tss: number;
  }
  
  export interface WastewaterResult {
    bodLoad: number;
    codLoad: number;
    tssLoad: number;
    totalPollutantLoad: number;
  }
  
  export function calculateWastewater(
    input: WastewaterInput
  ): WastewaterResult {
    const {
      wastewaterFlow,
      bod,
      cod,
      tss,
    } = input;
  
    const bodLoad =
      (wastewaterFlow * bod) / 1000;
  
    const codLoad =
      (wastewaterFlow * cod) / 1000;
  
    const tssLoad =
      (wastewaterFlow * tss) / 1000;
  
    const totalPollutantLoad =
      bodLoad + codLoad + tssLoad;
  
    return {
      bodLoad,
      codLoad,
      tssLoad,
      totalPollutantLoad,
    };
  }