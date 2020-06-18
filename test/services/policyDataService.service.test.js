import {expect} from 'chai';
import policyDataService from '../../services/policyDataService.service.js';

describe("Service Policy List Of A User", () => {
  it("should get true retrieving policy list", async () => {
    let result = await policyDataService.policyList('e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    expect(result.success).to.be.true;
  });

  it("should get true retrieving user details of a policy id", async () => {
    let result = await policyDataService.policyUser('d973993a-d35e-4d12-abb5-38083d556101')
    expect(result.success).to.be.true;
  });
});