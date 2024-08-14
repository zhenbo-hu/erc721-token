const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SpongeBob", (m) => {
  const spongeBob = m.contract("SpongeBob", [
    "0x758Cdf3310142c038A676453b541C2EF7D9a61aA",
    10000,
  ]);

  return { spongeBob };
});
