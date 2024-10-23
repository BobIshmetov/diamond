import ViewModel from "../schema/View.model";

class ViewService {
  private readonly viewMOdel;

  constructor() {
    this.viewMOdel = ViewModel;
  }
}

export default ViewService;
