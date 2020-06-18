import {expect} from 'chai';
import userDataService from '../../services/userDataService.service.js';

describe("User Data Service Get Function", () => {
  it("should get true retrieving user details", async () => {
    let result = await userDataService.getUserData('id=0178914c-548b-4a4c-b918-47d6a391530c')
    expect(result.success).to.be.true;
  });

  it("should get true retrieving user details", async () => {
    let result = await userDataService.getUserData('name=Whitley')
    expect(result.success).to.be.true;
  });
});