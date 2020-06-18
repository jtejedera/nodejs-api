import {expect} from 'chai';
import uacService from '../../services/uac.service.js';

describe("Check Role Service Function", () => {
  it("should get a valid user role", async () => {
    let result = await uacService.checkRole('e8fd159b-57c4-4d36-9bd7-a59ca13057bb')
    expect(result).to.be.an('string').to.be.oneOf(['user','admin']);
  });
});