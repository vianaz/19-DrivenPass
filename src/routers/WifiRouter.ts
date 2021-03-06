import { WifiController } from "@controllers/WifiController";
import { Application } from "express";

export class WifiRouter {
  constructor(app: Application) {
    const wifiController = new WifiController();

    app.post("/wifi", wifiController.insertWifi);
    app.get("/wifi/:id?", wifiController.getWifi);
    app.delete("/wifi/:id", wifiController.deleteWifi);
  }
}
