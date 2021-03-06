export class BostonParameters {
  public readonly stringParams: { [param: string]: string } = {};
  public readonly numberParams: { [param: string]: number } = {};

  constructor(private readonly initParams: { [param: string]: string | number }) {
    // Discard any extra parameters
    const params = {
      CRIM: this.initParams?.CRIM,
      ZN: this.initParams?.ZN,
      INDUS: this.initParams?.INDUS,
      CHAS: this.initParams?.CHAS,
      NOX: this.initParams?.NOX,
      RM: this.initParams?.RM,
      AGE: this.initParams?.AGE,
      DIS: this.initParams?.DIS,
      RAD: this.initParams?.RAD,
      TAX: this.initParams?.TAX,
      PTRATIO: this.initParams?.PTRATIO,
      B: this.initParams?.B,
      LSTAT: this.initParams?.LSTAT
    };
    for (const [key, value] of Object.entries(params)) {
      const str = String(value);
      const num = parseFloat(value as string);
      if (!isNaN(num)) {
        this.stringParams[key] = str;
        this.numberParams[key] = num;
      }
    }
  }
};

export class BostonPrediction {
  constructor(
    public readonly model: string,
    public readonly parameters: BostonParameters,
    public readonly price: number
  ) { }
}
