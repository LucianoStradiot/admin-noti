sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/claro/proveedores/adminnoticontrol/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.claro.proveedores.adminnoticontrol.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});