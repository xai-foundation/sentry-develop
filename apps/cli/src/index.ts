import Vorpal from 'vorpal';
import { addAdmin } from './commands/access-control/add-admin.js';
import { addChallenger } from './commands/access-control/add-challenger.js';
import { bootChallenger } from './commands/boot-challenger.js';
import { createBlsKeyPair } from './commands/create-bls-key-pair.js';
import { createMnemonic } from './commands/create-mnemonic.js';
import { getAssertionCheckingStatus } from './commands/get-assertion-checking-status.js';
import { getListOfAdmins } from './commands/access-control/get-list-of-admins.js';
import { getListOfChallengers } from './commands/access-control/get-list-of-challengers.js';
import { getPrivateKeyFromMnemonic } from './commands/get-private-key-from-memonic.js';
import { getPublicKeyFromPrivateKey } from './commands/get-public-key-from-private-key.js';
import { manuallyChallengeAssertion } from './commands/manually-challenge-assertion.js';
import { removeAdmin } from './commands/access-control/remove-admin.js';
import { removeChallenger } from './commands/access-control/remove-challenger.js';
import { setChallengerPublicKey } from './commands/set-challenger-public-key.js';
import { toggleAssertionChecking } from './commands/toggle-assertion-checking.js';
import { addOperator } from './commands/operator-control/add-operator.js';
import { removeOperator } from './commands/operator-control/remove-operator.js';
import { listOperators } from './commands/operator-control/list-operators.js';
import { mintNodeLicenses } from "./commands/licenses/mint-node-licenses.js";
import { listNodeLicenses } from './commands/licenses/list-node-licenses.js';
import { setRollupAddress } from './commands/set-rollup-address.js';
import { getListOfKycAdmins } from './commands/access-control/get-list-of-kyc-admins.js';
import { addKycAdmin } from './commands/access-control/add-kyc-admin.js';
import { removeKycAdmin } from './commands/access-control/remove-kyc-admin.js';
import { listKycStatuses } from './commands/kyc/list-kyc-status.js';
import { checkKycStatus } from './commands/kyc/check-kyc-status.js';
import { setKycStatus } from './commands/kyc/set-kyc-status.js';
import { totalSupply } from './commands/xai-token/total-supply.js';
import { getBalancesForAddresses } from './commands/xai-token/get-balances.js';
import { getAllContractAddresses } from './commands/get-contract-addresses.js';
import { checkWhitelist } from './commands/xai-token/check-whitelist.js';
import { changeWhitelistStatus } from './commands/xai-token/change-whitelist-status.js';

const cli = new Vorpal();

// entrypoints to each of the commands
addAdmin(cli);
addChallenger(cli);
addKycAdmin(cli);
addOperator(cli);
bootChallenger(cli);
checkKycStatus(cli);
createBlsKeyPair(cli);
createMnemonic(cli);
getAssertionCheckingStatus(cli);
getBalancesForAddresses(cli);
getListOfAdmins(cli);
getListOfChallengers(cli);
getListOfKycAdmins(cli);
getPrivateKeyFromMnemonic(cli);
getPublicKeyFromPrivateKey(cli);
listKycStatuses(cli);
listNodeLicenses(cli);
listOperators(cli);
manuallyChallengeAssertion(cli);
mintNodeLicenses(cli);
removeAdmin(cli);
removeChallenger(cli);
removeKycAdmin(cli);
removeOperator(cli);
setChallengerPublicKey(cli);
setKycStatus(cli);
setRollupAddress(cli);
toggleAssertionChecking(cli);
totalSupply(cli);
getAllContractAddresses(cli);
checkWhitelist(cli);
changeWhitelistStatus(cli);

cli
    .delimiter('vanguard-node$')
    .show()
    .log('\nType "help" to display a list of actions.');
