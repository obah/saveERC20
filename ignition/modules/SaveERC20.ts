import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x94281Be35cE44d154eb8Dd2606295a6d756AB395";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {
  const save = m.contract("SaveERC20", [tokenAddress]);

  return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0x6B4F1D179a6151199a737460C3f09F5855E8f776
