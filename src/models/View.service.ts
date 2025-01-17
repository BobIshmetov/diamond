import Errors, { HttpCode, Message } from "../libs/Errors";
import { View, ViewInput } from "../libs/types/view";
import ViewModel from "../schema/View.model";

class ViewService {
  private readonly viewMOdel;

  constructor() {
    this.viewMOdel = ViewModel;
  }

  public async checkViewExistence(input: ViewInput): Promise<View> {
    return await this.viewMOdel
      .findOne({ memberId: input.memberId, viewRefId: input.viewRefId })
      .exec();
  }

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      return await this.viewMOdel.create(input);
    } catch (err) {
      console.log("ERROR,  model:insertMemberView:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;
