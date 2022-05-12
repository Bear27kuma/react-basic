type Resident  = {
  familyName: string;
  lastName: string;
  mom?: Resident;
};

// Resident型のmomプロパティがオプショナルなので、undefinedへのアクセスになる可能性があり、エディタがエラー表示にしてくれる
// const getMomName = (resident: Resident): string => resident.mom.lastName;

// 非Nullアサーション演算子（Non-Null Assertion Operator）- null安全性を壊す
const getMomName = (resident: Resident): string => resident.mom!.lastName;

const patty = { familyName: 'Hope-Rabbit', lastName: 'patty' };
console.log(getMomName(patty));
