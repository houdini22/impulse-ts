import { Network } from "./Network";
import { NetworkRNN } from "./NetworkRNN";
import { NetworkLSTM } from "./NetworkLSTM";

type Networks = Network | NetworkRNN | NetworkLSTM;

export { Network, NetworkRNN, Networks };
