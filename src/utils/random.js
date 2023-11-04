import { MissionUtils } from "@woowacourse/mission-utils";

const pickUniqueNumbersInRange = (start, end, count) =>
  MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);

const Random = Object.freeze({
  lottoNumbers: () =>
    pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.NUMBER_COUNT),
});

export { Random };
