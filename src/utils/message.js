import { Lotto } from "../constants/lotto";

const ErrorMessage = {
  basic: (msg) => `[ERROR] ${msg}`,
  incorrectFormat: () => `숫자가 잘못된 형식입니다.`,
  incorrectLottoCount: () => `로또 번호는 ${Lotto.MAX_COUNT}개여야 합니다.`,
  incorrectLottoNumber: () =>
    `로또 번호는 ${Lotto.MAX_NUMBER}이상 ${Lotto.MAX_NUMBER}이하의 숫자여야 합니다.`,
  duplicateNumbers: () => `중복된 숫자가 포함되어 있습니다.`,
};

export { ErrorMessage };
